package com.jeasion.blog.service.impl;


import org.springframework.stereotype.Service;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import com.jeasion.blog.pojo.SystemInfo;
import com.jeasion.blog.dao.SystemInfoDao;


/**
 * <p>
 *  服务类
 * </p>
 *
 * @author shanp.liu
 * @date 2020-10-10
 */
@Service
@Log4j2
public class SystemInfoServiceImpl {

    @Autowired
    private SystemInfoDao systemInfoDao;


}
