package com.jinxin.hospHealth.his.bean;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import lombok.Data;

/**
 * Created by sloan on 2017/10/20.
 */


@XStreamAlias("ROOT")
@Data
public class LockRegister {

    @XStreamAlias("HM")
    String hm;
}
