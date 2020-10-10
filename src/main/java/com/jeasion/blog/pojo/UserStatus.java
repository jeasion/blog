package com.jeasion.blog.pojo;

import java.math.BigDecimal;
import java.util.Date;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import com.baomidou.mybatisplus.annotation.TableName;

/**
 * 数据库表名 user_status
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("user_status")
public class UserStatus  {


    /**
     * 数据库字段名 USER_ID 类型 int
     */
    @ApiModelProperty(value = "用户ID")
    private Integer  userId;


    /**
     * 数据库字段名 SESSION_ID 类型 varchar(32)
     */
    @ApiModelProperty(value = "SessionID")
    private String  sessionId;


    /**
     * 数据库字段名 IP 类型 varchar(32)
     */
    @ApiModelProperty(value = "IP")
    private String  ip;


    /**
     * 数据库字段名 MEACHINE_NAME 类型 varchar(32)
     */
    @ApiModelProperty(value = "机器名称")
    private String  meachineName;


    /**
     * 数据库字段名 POSITION 类型 varchar(32)
     */
    @ApiModelProperty(value = "登录地点(经度|维度)")
    private String  position;


    /**
     * 数据库字段名 LOGIN_TIME 类型 datetime
     */
    @ApiModelProperty(value = "登录时间")
    private LocalDateTime  loginTime;


    /**
     * 数据库字段名 OUT_TIME 类型 datetime
     */
    @ApiModelProperty(value = "注销时间")
    private LocalDateTime  outTime;


    /**
     * 数据库字段名 STAY_TIME 类型 decimal(32,10)
     */
    @ApiModelProperty(value = "登录时长")
    private BigDecimal  stayTime;


    /**
     * 数据库字段名 LOGIN_COUNT 类型 int
     */
    @ApiModelProperty(value = "登录次数")
    private Integer  loginCount;


    /**
     * 数据库字段名 LAST_LOGIN_TIME 类型 datetime
     */
    @ApiModelProperty(value = "上次登录时间")
    private LocalDateTime  lastLoginTime;

}
