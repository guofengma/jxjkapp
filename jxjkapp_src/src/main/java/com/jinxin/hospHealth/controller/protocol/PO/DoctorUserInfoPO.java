package com.jinxin.hospHealth.controller.protocol.PO;

import com.doraemon.base.controller.bean.PageBean;
import com.doraemon.base.util.MD5Encryption;
import com.jinxin.hospHealth.dao.models.HospDoctorUserInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.Date;

/**
 * Created by zbs on 2018/1/18.
 */
@Data
@ApiModel("doctor账户信息")
public class DoctorUserInfoPO extends PageBean{

    @ApiModelProperty("用户ID")
    private Long id;
    @ApiModelProperty("姓名")
    private String name;
    @ApiModelProperty("密码")
    private String password;
    @ApiModelProperty("院区ID")
    private Long areaId;
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
    @ApiModelProperty("创建时间")
    private Date createDate;
    @ApiModelProperty("更新时间")
    private Date updateDate;

    public HospDoctorUserInfo transform(Date createDate, Date updateDate) throws Exception {
        HospDoctorUserInfo hospDoctorUserInfo = new HospDoctorUserInfo();
        hospDoctorUserInfo.setId(this.id);
        hospDoctorUserInfo.setName(this.name);
        hospDoctorUserInfo.setAreaId(this.areaId);
        hospDoctorUserInfo.setPassword(
                this.password != null
                        ? MD5Encryption.getMD5(this.password)
                        : null);
        hospDoctorUserInfo.setHeadPortrait(this.headPortrait);
        hospDoctorUserInfo.setSex(this.sex);
        hospDoctorUserInfo.setPhone(this.phone);
        hospDoctorUserInfo.setEmail(this.email);
        hospDoctorUserInfo.setAge(this.age);
        hospDoctorUserInfo.setBirthday(this.birthday);
        hospDoctorUserInfo.setCreateDate(createDate);
        hospDoctorUserInfo.setUpdateDate(updateDate);
        return hospDoctorUserInfo;
    }
}
