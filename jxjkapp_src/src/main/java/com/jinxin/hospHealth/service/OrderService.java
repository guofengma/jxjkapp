package com.jinxin.hospHealth.service;

import com.alibaba.fastjson.JSON;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.exceptions.ShowExceptions;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.doraemon.base.redis.RedisOperation;
import com.doraemon.base.util.DBigDecimal;
import com.doraemon.base.util.UUidGenerate;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;
import com.jinxin.hospHealth.controller.protocol.PO.OrderInfoPO;
import com.jinxin.hospHealth.controller.protocol.PO.OrderProductPO;
import com.jinxin.hospHealth.dao.DaoEnumValid;
import com.jinxin.hospHealth.dao.mapper.HospOrderMapper;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.models.HospOrderProduct;
import com.jinxin.hospHealth.dao.models.HospProductSku;
import com.jinxin.hospHealth.dao.models.HospUserBalance;
import com.jinxin.hospHealth.dao.modelsEnum.EnableEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderPayTypeEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderStateEnum;
import com.jinxin.hospHealth.dao.modelsEnum.OrderTypeEnum;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.*;

/**
 * Created by zbs on 2018/1/10.
 */
@Service
@Log4j
public class OrderService implements BaseService<HospOrder,OrderInfoPO> {

    @Autowired
    HospOrderMapper hospOrderMapper;
    @Autowired
    UserInfoService userInfoService;
    @Autowired
    SkuService skuService;
    @Autowired
    OrderProductService orderProductService;
    @Autowired
    RedisOperation redisOperation;
    @Autowired
    UserBalanceService userBalanceService;


    /**
     * 增加一个订单
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    @Transactional
    public HospOrder add(OrderInfoPO orderInfoPO) throws Exception {
        //校验数据
        DPreconditions.checkNotNull(userInfoService.selectOne(orderInfoPO.getUserId()),
                Language.get("user.select-not-exist"),
                true);
        DPreconditions.checkNotNull(orderInfoPO.getType(),
                Language.get("order.type-null"),
                true);
        DPreconditions.checkState(orderInfoPO.getOrderProductPOList()!=null
                && orderInfoPO.getOrderProductPOList().size()>0,
                Language.get("order.sku-null"),
                true);
        DaoEnumValid.checkOrderState(orderInfoPO.getState());
        DaoEnumValid.checkOrderType(orderInfoPO.getType());
        //创建 order product list 对象
        List<HospOrderProduct> orderProductList = convert(orderInfoPO);
        //创建 hospOrder object 对象
        HospOrder add = new HospOrder();
        add.setCode(UUidGenerate.create());
        add.setUserId(orderInfoPO.getUserId());
        add.setType(orderInfoPO.getType());
        add.setState(OrderStateEnum.NON_PAYMENT.getCode());
        add.setOrderPayPrice(orderPayPrice(orderProductList,orderInfoPO));
        add.setOrderSalesPrice(orderSalesPrice(orderProductList));
        add.setCreateDate(new Date());
        add.setUpdateDate(new Date());
        //开始保存
        DPreconditions.checkState(hospOrderMapper.insertReturnId(add) ==1,
                Language.get("service.save-failure"),
                true);
        for(HospOrderProduct orderProduct : orderProductList){
            orderProduct.setOrderId(add.getId());
            orderProductService.add(orderProduct);
        }
        return add;
    }

    /**
     * 支付宝或微信回调支付
     * @param orderInfoPO
     * @throws Exception
     */
    @Transactional
    public void pay(OrderInfoPO orderInfoPO) throws Exception {
            HospOrder hospOrder = orderInfoPO.getCode() != null ?
                    DPreconditions.checkNotNull(
                            selectOneByCode(orderInfoPO.getCode()),
                            Language.get("order.select-not-exist"),
                            true) :
                    DPreconditions.checkNotNull(
                            selectOne(orderInfoPO.getId()),
                            Language.get("order.select-not-exist"),
                            true);
            DPreconditions.checkNotNull(orderInfoPO.getPaymentType(),
                    Language.get("order.payment-type-null"),
                    true);
            DPreconditions.checkState(orderInfoPO.getAmount() != null
                            && orderInfoPO.getAmount().compareTo(BigDecimal.ZERO) > 0,
                    Language.get("order.amount-null"),
                    true);
            DPreconditions.checkState(
                    hospOrder.getOrderPayPrice().compareTo(orderInfoPO.getAmount()) == 0,
                    Language.get("order.pay-price-not-equal"),
                    true);
            DaoEnumValid.checkOrderPayType(orderInfoPO.getPaymentType());
            HospOrder update = new HospOrder();
            if (orderInfoPO.getPaymentType().equals(OrderPayTypeEnum.WECHAT.getCode())) {
                //验证对应的返回是否是恶意请求
            }
            if (orderInfoPO.getPaymentType().equals(OrderPayTypeEnum.ALIPAY.getCode())) {
                //验证对应的返回是否是恶意请求
            }
            //如果是余额支付
            if (orderInfoPO.getPaymentType().equals(OrderPayTypeEnum.BALANCE.getCode())) {
                HospUserBalance userBalance = new HospUserBalance();
                userBalance.setUserId(hospOrder.getUserId());
                userBalance.setBalance(DBigDecimal.upsideDown(orderInfoPO.getAmount()));
                userBalanceService.update(userBalance);
            }
            update.setId(hospOrder.getId());
            update.setState(OrderStateEnum.PAY.getCode());
            update.setPaymentType(orderInfoPO.getPaymentType());
            update.setUpdateDate(new Date());
            DPreconditions.checkState(hospOrderMapper.updateByPrimaryKeySelective(update) == 1,
                    Language.get("service.update-failure"),
                    true);
    }

    /**
     * 订单申请退款
     * @param id
     * @throws Exception
     */
    public void refund(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder hospOrder = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                hospOrder.getState().equals(OrderStateEnum.PAY.getCode()),
                Language.get("order.have-to-pay-state"),
                true);
        OrderInfoPO orderInfoPO = new OrderInfoPO();
        orderInfoPO.setId(id);
        orderInfoPO.setState(OrderStateEnum.REFUND.getCode());
        update(orderInfoPO);
    }

    /**
     * 根据code查询订单信息
     *
     * @param code
     * @throws Exception
     * **/
    public HospOrder selectOneByCode(String code) throws Exception {
        DPreconditions.checkNotNull(code,
                Language.get("order.code-null"),
                true);
        HospOrder hospOrder = new HospOrder();
        hospOrder.setCode(code);
        HospOrder req = hospOrderMapper.selectOne(hospOrder);
        req.setHospOrderProductList(selectOrderProductListByOrderId(req.getId()));
        return req;
    }

    @Override
    public void update(OrderInfoPO orderInfoPO) throws Exception {
        DPreconditions.checkNotNull(orderInfoPO.getId(),
                Language.get("order.id-null"),
                true);
        DPreconditions.checkNotNull(
                selectOne(orderInfoPO.getId()),
                Language.get("order.select-not-exist"),
                true);
        HospOrder update = new HospOrder();
        update.setId(orderInfoPO.getId());
        update.setState(orderInfoPO.getState());
        DPreconditions.checkState(
                hospOrderMapper.updateByPrimaryKeySelective(update) == 1,
                Language.get("service.update-failure"),
                true);
    }

    @Override
    public void deleteOne(Long id) throws Exception {
        throw new ShowExceptions(Language.get("service.invalid-method"));
    }

    /**
     * 关闭订单
     * @param id
     * @throws Exception
     */
    @Transactional
    public void close(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder hospOrder = DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        DPreconditions.checkState(
                hospOrder.getState().equals(OrderStateEnum.NON_PAYMENT.getCode()),
                Language.get("order.close-order-tyep-failure"),
                true);
        OrderInfoPO update = new OrderInfoPO();
        update.setId(id);
        update.setState(OrderStateEnum.CLOSE.getCode());
        update(update);
    }

    /**
     * 订单无效
     * @param id
     * @throws Exception
     */
    @Override
    public void setStateAsInvalid(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        DPreconditions.checkNotNull(
                selectOne(id),
                Language.get("order.select-not-exist"),
                true);
        OrderInfoPO update = new OrderInfoPO();
        update.setId(id);
        update.setEnable(EnableEnum.ENABLE_DELETE.getCode());
        update(update);
    }

    /**
     * 根据ID查询订单信息
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrder selectOne(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder select = new HospOrder();
        select.setId(id);
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        HospOrder req = hospOrderMapper.selectOne(select);
        if(req != null) {
            req.setHospOrderProductList(selectOrderProductListByOrderId(id));
        }
        return req;
    }

    /**
     * 根据条件查询订单信息
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrder> select(OrderInfoPO orderInfoPO) throws Exception {
        PageHelper.startPage(orderInfoPO.getPageNum(), orderInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(orderInfoPO.getField())) {
            PageHelper.orderBy(orderInfoPO.getField());
        }else {
            PageHelper.orderBy(orderInfoPO.getDefaultField());
        }
        orderInfoPO.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        log.info("order info po : "+JSON.toJSON(orderInfoPO));
        List<HospOrder> req = hospOrderMapper.selectByExampleByCustom(orderInfoPO);
        return new PageInfo(selectOrderProductListByOrderId(req));
    }

    /**
     * 查询全部订单
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo selectAll(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }else {
            PageHelper.orderBy(OrderInfoPO.getDefaultField());
        }
        HospOrder select = new HospOrder();
        select.setEnable(EnableEnum.ENABLE_NORMAL.getCode());
        List<HospOrder> req = hospOrderMapper.select(select);
        return new PageInfo(selectOrderProductListByOrderId(req));
    }

    /**
     * 查询一个订单信息 --- admin
     * @param id
     * @return
     * @throws Exception
     */
    @Override
    public HospOrder selectOneAdmin(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        HospOrder req = hospOrderMapper.selectByPrimaryKey(id);
        if(req != null)
            req.setHospOrderProductList(selectOrderProductListByOrderId(id));
        return req;
    }

    /**
     * 根据条件查询订单信息 --- admin
     * @param orderInfoPO
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo<HospOrder> selectAdmin(OrderInfoPO orderInfoPO) throws Exception {
        PageHelper.startPage(orderInfoPO.getPageNum(), orderInfoPO.getPageSize());
        if (StringUtil.isNotEmpty(orderInfoPO.getField())) {
            PageHelper.orderBy(orderInfoPO.getField());
        }else {
            PageHelper.orderBy(orderInfoPO.getDefaultField());
        }
        orderInfoPO.setEnable(null);
        List<HospOrder> req = hospOrderMapper.selectByExampleByCustom(orderInfoPO);
        return new PageInfo(selectOrderProductListByOrderId(req));
    }


    /**
     * 查询全部订单信息 --- admin
     * @param pageBean
     * @return
     * @throws Exception
     */
    @Override
    public PageInfo selectAllAdmin(PageBean pageBean) throws Exception {
        if(pageBean == null)
            pageBean = new PageBean();
        PageHelper.startPage(pageBean.getPageNum(), pageBean.getPageSize());
        if (StringUtil.isNotEmpty(pageBean.getField())) {
            PageHelper.orderBy(pageBean.getField());
        }else {
            PageHelper.orderBy(OrderInfoPO.getDefaultField());
        }
        List<HospOrder> req = hospOrderMapper.selectAll();
        return new PageInfo(selectOrderProductListByOrderId(req));
    }

    /**
     * 订单支付价格
     * @param list
     * @return
     */
    private BigDecimal orderPayPrice(List<HospOrderProduct>  list,OrderInfoPO orderInfoPO){
        //如果是服务订单,并且是手工录入的价格,支持这样的直接录入价格模式
        if(OrderTypeEnum.SERVICE.equals(orderInfoPO.getType())
                && orderInfoPO.getAmount() != null
                && orderInfoPO.getAmount().compareTo(BigDecimal.ZERO) > 0){
            return orderInfoPO.getAmount();
        }
        BigDecimal payPrice = BigDecimal.ZERO;
        for (HospOrderProduct hospOrderProduct : list)
            payPrice = payPrice.add(hospOrderProduct.getProductPayPrice());
        return payPrice;
    }

    /**
     * 订单销售价格
     * @param list
     * @return
     */
    private BigDecimal orderSalesPrice(List<HospOrderProduct>  list){
        BigDecimal salesPrice = BigDecimal.ZERO;
        for(HospOrderProduct hospOrderProduct : list){
            salesPrice = salesPrice.add(hospOrderProduct.getProductSalesPrice());
        }
        return salesPrice;
    }


    /**
     * orderInfoPO 转成 List<HospOrderProduct>
     * 注意 :  List<HospOrderProduct> 对象没有orderId 等信息
     *
     * @param orderInfoPO
     * @return
     */
    private List<HospOrderProduct> convert(OrderInfoPO orderInfoPO){
        DPreconditions.checkNotNull(orderInfoPO,"需要被转换的orderInfoPo为空");
        List<HospOrderProduct> hospOrderProductList = new ArrayList<>();
        for(OrderProductPO orderProductPO : orderInfoPO.getOrderProductPOList()) {
            HospProductSku hospProductSku = DPreconditions.checkNotNull(
                    skuService.selectOne(orderProductPO.getSkuId()),
                    Language.get("sku.select-not-exist"),
                    true);
            HospOrderProduct orderProduct = new HospOrderProduct();
            orderProduct.setProductSkuId(hospProductSku.getId());
            //todo : 没有计算优惠
            orderProduct.setProductPayPrice(
                    DBigDecimal.multiply(hospProductSku.getSalesPrice(), orderProductPO.getQua()));
            orderProduct.setProductSalesPrice(hospProductSku.getSalesPrice());
            orderProduct.setProductShowPrice(hospProductSku.getShowPrice());
            orderProduct.setQuantity(orderProductPO.getQua());
            //如果是服务的话,计算出服务的次数
            if (orderInfoPO.getType().equals(OrderTypeEnum.SERVICE))
                orderProduct.setServiceQuantity(orderProductPO.getQua() * hospProductSku.getServiceQuantity());
            hospOrderProductList.add(orderProduct);
        }
        return hospOrderProductList;
    }

    /**
     * 通过order补充order product信息
     * @param hospOrderList
     * @return
     * @throws Exception
     */
    private List<HospOrder> selectOrderProductListByOrderId(List<HospOrder> hospOrderList) throws Exception {
        if(hospOrderList == null)
            return null;
        for(HospOrder hospOrder : hospOrderList){
            hospOrder.setHospOrderProductList(selectOrderProductListByOrderId(hospOrder.getId()));
        }
        return hospOrderList;
    }

    /**
     * 通过order补充order product信息
     * @param id
     * @return
     * @throws Exception
     */
    private List<HospOrderProduct> selectOrderProductListByOrderId(Long id) throws Exception {
        DPreconditions.checkNotNull(id,
                Language.get("order.id-null"),
                true);
        PageInfo<HospOrderProduct>  pageInfo = DPreconditions.checkNotNull(
                orderProductService.selectByOrderId(id),
                Language.get("order.order-product-null"),
                true);
        return pageInfo.getList();
    }

}