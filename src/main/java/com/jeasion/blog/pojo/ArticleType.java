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
 * 数据库表名 article_type
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("article_type")
public class ArticleType  {


    /**
     * 数据库字段名 TYPE_ID 类型 int
     */
    @ApiModelProperty(value = "类型ID")
    private Integer  typeId;


    /**
     * 数据库字段名 TYPE_NAME 类型 varchar(32)
     */
    @ApiModelProperty(value = "类型名称")
    private String  typeName;


    /**
     * 数据库字段名 ICON_HREF 类型 varchar(32)
     */
    @ApiModelProperty(value = "图标地址")
    private String  iconHref;


    /**
     * 数据库字段名 PARENT_TYPE_ID 类型 varchar(32)
     */
    @ApiModelProperty(value = "父类型ID")
    private String  parentTypeId;


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
