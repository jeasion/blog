package com.jeasion.blog.controller;

import com.jeasion.blog.pojo.ArticleTagType;
import com.jeasion.blog.service.ArticleTagTypeService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.fasterxml.jackson.databind.json.JsonMapper;

import javax.annotation.Resource;
import javax.servlet.ServletRequest;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Controller
@Log4j2
@RequestMapping(value = "/home/articleTagType")
public class ArticleTagTypeController{

    @Autowired
    private ArticleTagTypeService articleTagTypeService;


    @RequestMapping(value = "list", method = RequestMethod.GET)
    public String list(Model model){
        return"/admin/list";
        }

}



