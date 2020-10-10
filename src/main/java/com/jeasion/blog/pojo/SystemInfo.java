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
 * 数据库表名 system_info
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("system_info")
public class SystemInfo  {


    /**
     * 数据库字段名 PARAMETER_ID 类型 int
     */
    @ApiModelProperty(value = "参数ID")
    private Integer  parameterId;


    /**
     * 数据库字段名 PARAMETER_NAME 类型 varchar(1024)
     */
    @ApiModelProperty(value = "参数名称")
    private String  parameterName;


    /**
     * 数据库字段名 PARAMETER_VALUE 类型 varchar(1024)
     */
    @ApiModelProperty(value = "参数值")
    private String  parameterValue;


    /**
     * 数据库字段名 USER_ID 类型 int
     */
    @ApiModelProperty(value = "创建人ID")
    private Integer  userId;


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
