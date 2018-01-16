package com.jinxin.hospHealth.controller.protocol.VO;

import com.jinxin.hospHealth.dao.models.HospArea;
import com.jinxin.hospHealth.dao.models.HospOrderProduct;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Transient;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * Created by zbs on 2018/1/15.
 */
@Data
@ApiModel("订单")
public class OrderVO {
    @ApiModelProperty("订单ID")
    private Long id;
    @ApiModelProperty("订单编号")
    private String code;
    @ApiModelProperty("操作人员名称")
    private String operationName;
    @ApiModelProperty("用户信息")
    private HospUserInfo user;
    @ApiModelProperty("院区信息")
    private HospArea area;
    @ApiModelProperty("类型（0 服务订单 1 商品订单）")
    private Integer type;
    @ApiModelProperty("支付状态 (已支付订单/未支付订单 )")
    private String payState;
    @ApiModelProperty("退款状态 (退款申请中/退款完毕)")
    private String refundState;
    @ApiModelProperty("订单支付总价格（促销优惠后的支付总价格）")
    private BigDecimal orderPayPrice;
    @ApiModelProperty("订单销售总价格（没参加促销的价格）")
    private BigDecimal orderSalesPrice;
    @ApiModelProperty("支付方式（0 微信 1 支付宝）")
    private Integer paymentType;
    @ApiModelProperty("支付成功回执编号")
    private String paymentCode;
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;
    @ApiModelProperty("订单参加的全部活动，按逗号分隔")
    private String promotionIds;
    @ApiModelProperty("订单中的商品")
    private List<HospOrderProduct> hospOrderProductList;

}
