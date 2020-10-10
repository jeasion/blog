package com.jeasion.blog.dao;

import com.jeasion.blog.pojo.ArticleTagType;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

/**
 * <p>
 * article_tag_type dao层
 * </p>
 *
 * @author shanp.liu
 * @date 2020-10-10
 */

@Repository
public interface ArticleTagTypeDao {
        /**
         * 根据主键删除 数据库 的记录, article_tag_type
         * @author shanp.liu
         * @date 2020-10-10
         */
        int deleteByPrimaryKey(Long id);

        /**
         * 新写入数据库记录, article_tag_type
         * @author shanp.liu
         * @date 2020-10-10
         */
        int insert(ArticleTagType record);

        /**
         * 根据指定主键获取一条数据库记录, article_tag_type
         * @author shanp.liu
         * @date 2020-10-10
         */
    ArticleTagType selectByPrimaryKey(Long id);

        /**
         * 根据主键来更新符合条件的数据库记录, article_tag_type
         * @author shanp.liu
         * @date 2020-10-10
         */
        int updateByPrimaryKey(ArticleTagType record);

        /**
         * 根据条件分页查询(计数)
         * @author shanp.liu
         * @date 2020-10-10
         * */
        long countForPage(Map<String, Object> searchMap);

        }

