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
 * 数据库表名 article_tag_type
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("article_tag_type")
public class ArticleTagType  {


    /**
     * 数据库字段名 TAG_ID 类型 int
     */
    @ApiModelProperty(value = "标签ID")
    private Integer  tagId;


    /**
     * 数据库字段名 TAG_NAME 类型 varchar(32)
     */
    @ApiModelProperty(value = "标签名称")
    private String  tagName;


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
