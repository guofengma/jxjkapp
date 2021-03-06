package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.guava.DPreconditions;
import com.doraemon.base.language.Language;
import com.jinxin.hospHealth.dao.models.HospOrder;
import com.jinxin.hospHealth.dao.models.HospOrderGrade;
import com.jinxin.hospHealth.dao.models.HospOrderServiceDetails;
import com.jinxin.hospHealth.service.OrderGradeService;
import com.jinxin.hospHealth.service.OrderService;
import com.jinxin.hospHealth.service.OrderServiceDetailsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by zbs on 2018/1/19.
 */
@RestController
@RequestMapping("/orderServiceGrade")
@Slf4j
@Api(description = "服务订单评价相关接口")
public class OrderGradeController extends MyBaseController{

    @Autowired
    OrderGradeService orderGradeService;
    @Autowired
    OrderServiceDetailsService orderServiceDetailsService;
    @Autowired
    OrderService orderService;

    @ApiOperation(value = "新增订单服务评价信息")
    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "服务订单评价", required = true) @RequestBody HospOrderGrade hospOrderGrade) throws Exception {
        Long userId = getCurrentUserId();
        HospOrderServiceDetails hosd =  DPreconditions.checkNotNull(
                orderServiceDetailsService.selectOne(hospOrderGrade.getOrderServiceDetailsId()),
                Language.get("order-product-service.select-not-exist"),
                true);
//        HospOrder order = DPreconditions.checkNotNull(
//                orderService.selectOneByOrderProductServiceDetailsId(hosd.getOrderProductId()),
//                Language.get("order.select-not-exist"),
//                true);
//        DPreconditions.checkState(
//                order.getUserId() == userId,
//                "只能对自己的订单进行评价",
//                true);
        HospOrderGrade add = orderGradeService.add(hospOrderGrade);
        return ResponseWrapperSuccess(add);
    }

    @ApiOperation(value = "查询单个订单服务评价内容", response = HospOrderGrade.class)
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "订单服务评价ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(orderGradeService.selectOne(id));
    }

    @ApiOperation(value = "查询全部订单服务评价内容", response = HospOrderGrade.class)
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false) @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(orderGradeService.selectAll(pageBean));
    }
}
