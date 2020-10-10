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
 * 数据库表名 system_operate_log
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("system_operate_log")
public class SystemOperateLog  {


    /**
     * 数据库字段名 USER_ID 类型 int
     */
    @ApiModelProperty(value = "用户ID")
    private Integer  userId;


    /**
     * 数据库字段名 OPERATE_MENU_NAME 类型 varchar(32)
     */
    @ApiModelProperty(value = "操作菜单名称")
    private String  operateMenuName;


    /**
     * 数据库字段名 OPERATE_TYPE 类型 int
     */
    @ApiModelProperty(value = "操作类型(1：登录 2：注销)")
    private Integer  operateType;


    /**
     * 数据库字段名 UPDATED_TIME 类型 datetime
     */
    @ApiModelProperty(value = "操作时间")
    private LocalDateTime  updatedTime;

}
