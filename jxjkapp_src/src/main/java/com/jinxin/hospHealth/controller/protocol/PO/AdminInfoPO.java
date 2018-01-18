package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.util.MD5Encryption;
import com.jinxin.hospHealth.dao.models.HospAdminUserInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

/**
 * Created by zbs on 2018/1/16.
 */
@Data
@ApiModel("admin账号信息")
public class AdminInfoPO extends PageBean{

    @ApiModelProperty("用户ID")
    private Long id;
    @ApiModelProperty("登陆名")
    private String name;
    @ApiModelProperty("密码")
    private String password;
    @ApiModelProperty("头像")
    private String headPortrait;
    @ApiModelProperty("性别 0 女 1 男")
    private Integer sex;
    @ApiModelProperty("电话")
    private String phone;
    @ApiModelProperty("邮箱")
    private String email;
    @ApiModelProperty("年龄")
    private Integer age;
    @ApiModelProperty("生日")
    private Date birthday;
    @ApiModelProperty("权限 ,分割")
    private String permissions;

    public HospAdminUserInfo transform() throws Exception {
        HospAdminUserInfo hospAdminUserInfo = new HospAdminUserInfo();
        hospAdminUserInfo.setId(this.id);
        hospAdminUserInfo.setName(this.name);
        hospAdminUserInfo.setPassword(
                this.password != null
                        ? MD5Encryption.getMD5(this.password)
                        : null);
        hospAdminUserInfo.setHeadPortrait(this.headPortrait);
        hospAdminUserInfo.setSex(this.sex);
        hospAdminUserInfo.setPhone(this.phone);
        hospAdminUserInfo.setEmail(this.email);
        hospAdminUserInfo.setAge(this.age);
        hospAdminUserInfo.setBirthday(this.birthday);
        hospAdminUserInfo.setPermissions(this.permissions);
        return hospAdminUserInfo;
    }
}