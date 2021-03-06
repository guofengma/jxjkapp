package com.jinxin.hospHealth.his.bean;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import com.thoughtworks.xstream.annotations.XStreamImplicit;
import lombok.Data;

import java.util.List;

/**
 * Created by zbs on 2017/10/6.
 */
@XStreamAlias("ROOT")
@Data
public class OutpatientPaymentInfo {

    @XStreamImplicit(itemFieldName="GHLIST")
    List<Ghlist> ghlist;

    @Data
    public class Ghlist{
        @XStreamAlias("GH")
        Gh gh;
    }

    @Data
    public class Gh{
        //单据号
        @XStreamAlias("DJH")
        String djh;
        //挂号类型
        @XStreamAlias("HL")
        String hl;
        //预约时间
        @XStreamAlias("YYSJ")
        String yysj;
        //开单科室
        @XStreamAlias("KDKS")
        String kdks;
        //执行状态返回字符串(预约中、不就诊、等待就诊、完成就诊、正在就诊、已挂号)
        @XStreamAlias("ZXZT")
        String zxzt;
        //单据类型，1-收费单，4-挂号单
        @XStreamAlias("DJLX")
        String djlx;
        //支付状态，0-待支付，1-已支付，2-已退费
        @XStreamAlias("ZFZT")
        String zfzt;
        //是否预约，0-挂号并缴费，1-预约不缴费
        @XStreamAlias("SFYY")
        String sfyy;
        //金额
        @XStreamAlias("JE")
        String je;
        //医生ID
        @XStreamAlias("YSID")
        String ysid;
        //医生姓名
        @XStreamAlias("YSXM")
        String ysxm;
        //是否结算卡支付，0-否，1-是。即是否通过第三方支付
        @XStreamAlias("SFJSK")
        String sfjsk;
        @XStreamImplicit(itemFieldName="YZLIST")
        List<Yzlist> yzlists;

    }

    @Data
    public class Yzlist{
        @XStreamAlias("YZ")
        Yz yz ;
    }

    @Data
    public class Yz{
        //医嘱类型
        @XStreamAlias("YZLX")
        String yzlx;
        //医嘱ID
        @XStreamAlias("YZID")
        String yzid;
        //医嘱名称
        @XStreamAlias("YZMC")
        String yzmc;
        //费目列表
        @XStreamImplicit(itemFieldName="FMLIST")
        List<Fmlist> fmlists;
        @XStreamImplicit(itemFieldName="DJLIST")
        List<Djlist> djlists;
    }

    @Data
    public class Djlist{
        //医嘱名称
        @XStreamAlias("DJ")
        Dj dj;
    }

    @Data
    public class Dj{
        //单据号
        @XStreamAlias("DJH")
        String djh;
        //单据类型
        @XStreamAlias("DJLX")
        String djlx;
        //金额
        @XStreamAlias("JE")
        String je;
        //开单时间，格式(YYYY-MM-DD HH24:MM:SS)
        @XStreamAlias("KDSJ")
        String kdsj;
        //是否结算卡支付，0-否，1-是。即是否通过第三方支付
        @XStreamAlias("SFJSK")
        String sfjsk;
        //支付状态，1-已支付，0-未支付
        @XStreamAlias("ZFZT")
        String zfzt;
        //已退金额
        @XStreamAlias("YTJE")
        String ytje;
    }

    @Data
    public class Fmlist{
        @XStreamAlias("FM")
        Fm fm;
    }

    @Data
    public class Fm{
        //费目名称
        @XStreamAlias("MC")
        String mc;
        //金额
        @XStreamAlias("JE")
        String je;
        //支付状态，1-已支付，0-未支付
        @XStreamAlias("ZFZT")
        String zfzt;
        //明细列表
        @XStreamImplicit(itemFieldName="MXLIST")
        List<Mxlist> mxlists ;
    }

    @Data
    public class Mxlist{
        @XStreamAlias("MX")
        Mx mx;
    }

    @Data
    public class Mx{
        //名称
        @XStreamAlias("MC")
        String mc;
        //规格
        @XStreamAlias("GG")
        String gg;
        //数量
        @XStreamAlias("SL")
        String sl;
        //单位
        @XStreamAlias("DW")
        String dw;
        //单价
        @XStreamAlias("DJ")
        String dj;
    }
}
