package com.jinxin.hospHealth.controller;

import com.alibaba.fastjson.JSONObject;
import com.doraemon.base.controller.bean.PageBean;
import com.jinxin.hospHealth.dao.models.HospUserInfo;
import com.jinxin.hospHealth.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zbs on 2017/12/25.
 */
@RestController
@RequestMapping("/userInfo")
@Slf4j
@Api(description = "用户信息相关接口")
public class UserInfoController extends MyBaseController{

    @Autowired
    UserInfoService userInfoService;

    @ApiOperation(value = "新增用户信息")
    @RequestMapping(value="/", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject add(
            @ApiParam(value = "商品信息", required = true) @RequestBody HospUserInfo userInfo) throws Exception {
        Map<String,Long> map = new HashMap<>();
        userInfoService.add(userInfo);
        map.put("id",userInfo.getId());
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "更新用户信息")
    @RequestMapping(value="/", method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospUserInfo userInfo) throws Exception {
        userInfoService.update(userInfo);
        return ResponseWrapperSuccess(null);
    }

    @ApiOperation(value = "查询单个用户信息",response = HospUserInfo.class)
    @RequestMapping(value="/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOne(
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(userInfoService.selectOne(id));
    }

    @ApiOperation(value = "查询全部用户信息",response = HospUserInfo.class)
    @RequestMapping(value="/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAll(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(userInfoService.selectAll(pageBean));
    }

    @ApiOperation(value = "根据条件查询用户信息",response = HospUserInfo.class)
    @RequestMapping(value="/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject select(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospUserInfo userInfo) throws Exception {
        return ResponseWrapperSuccess(userInfoService.select(userInfo));
    }

    @ApiOperation(value = "查询单个用户信息---admin",response = HospUserInfo.class)
    @RequestMapping(value="/admin/", method = RequestMethod.GET)
    @ResponseBody
    public JSONObject selectOneAdmin(
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        return ResponseWrapperSuccess(userInfoService.selectOne(id));
    }

    @ApiOperation(value = "查询全部用户信息---admin",response = HospUserInfo.class)
    @RequestMapping(value="/admin/all", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAllAdmin(
            @ApiParam(value = "分页信息", required = false)  @RequestBody(required = false) PageBean pageBean) throws Exception {
        return ResponseWrapperSuccess(userInfoService.selectAllAdmin(pageBean));
    }

    @ApiOperation(value = "根据条件查询用户信息---admin",response = HospUserInfo.class)
    @RequestMapping(value="/admin/query", method = RequestMethod.POST)
    @ResponseBody
    public JSONObject selectAdmin(
            @ApiParam(value = "商品信息", required = true)  @RequestBody HospUserInfo userInfo) throws Exception {
        return ResponseWrapperSuccess(userInfoService.selectAdmin(userInfo));
    }

    @ApiOperation(value = "删除单个用户信息")
    @RequestMapping(value="/", method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject deleteOne(
            @ApiParam(value = "用户ID", required = true) @RequestParam(value = "id", required = true) Long id) throws Exception {
        userInfoService.deleteOne(id);
        return ResponseWrapperSuccess(null);
    }
}