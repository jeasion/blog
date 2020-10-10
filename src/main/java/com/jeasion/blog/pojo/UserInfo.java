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
 * 数据库表名 user_info
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("user_info")
public class UserInfo  {


    /**
     * 数据库字段名 USER_ID 类型 int
     */
    @ApiModelProperty(value = "用户ID")
    private Integer  userId;


    /**
     * 数据库字段名 USERNAME 类型 varchar(32)
     */
    @ApiModelProperty(value = "用户名称")
    private String  username;


    /**
     * 数据库字段名 PASSWORD 类型 varchar(32)
     */
    @ApiModelProperty(value = "密码")
    private String  password;


    /**
     * 数据库字段名 LOGO 类型 varchar(32)
     */
    @ApiModelProperty(value = "头像(路径)")
    private String  logo;


    /**
     * 数据库字段名 USER_LEVEL 类型 int
     */
    @ApiModelProperty(value = "用户等级(1:最高等级管理员 2:普通管理员 3：普通用户 4：游客)")
    private Integer  userLevel;


    /**
     * 数据库字段名 IS_VALID 类型 varchar(32)
     */
    @ApiModelProperty(value = "是否可用(1 ：可用  2：已注销  3：已锁定)")
    private String  isValid;


    /**
     * 数据库字段名 CREATED_BY 类型 int
     */
    @ApiModelProperty(value = "创建人")
    private Integer  createdBy;


    /**
     * 数据库字段名 CREATED_TIME 类型 datetime
     */
    @ApiModelProperty(value = "创建时间")
    private LocalDateTime  createdTime;


    /**
     * 数据库字段名 UPDATED_BY 类型 int
     */
    @ApiModelProperty(value = "更新人")
    private Integer  updatedBy;


    /**
     * 数据库字段名 UPDATED_TIME 类型 datetime
     */
    @ApiModelProperty(value = "更新时间")
    private LocalDateTime  updatedTime;

}
