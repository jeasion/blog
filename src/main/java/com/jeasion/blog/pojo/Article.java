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
 * 数据库表名 article
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("article")
public class Article  {


    /**
     * 数据库字段名 ARTICLE_ID 类型 int
     */
    @ApiModelProperty(value = "文章ID")
    private Integer  articleId;


    /**
     * 数据库字段名 USER_ID 类型 int
     */
    @ApiModelProperty(value = "作者ID")
    private Integer  userId;


    /**
     * 数据库字段名 TYPE 类型 varchar(32)
     */
    @ApiModelProperty(value = "文章类型ID(以|分割)")
    private String  type;


    /**
     * 数据库字段名 TAG 类型 varchar(32)
     */
    @ApiModelProperty(value = "文章标签(以|分割)")
    private String  tag;


    /**
     * 数据库字段名 ARTICLE 类型 varchar(1024)
     */
    @ApiModelProperty(value = "文章标题")
    private String  article;


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


    /**
     * 数据库字段名 ARTICLE_CONTENT 类型 text
     */
    @ApiModelProperty(value = "文章内容")
    private String  articleContent;

}
