package com.jeasion.blog;


import com.baomidou.mybatisplus.core.exceptions.MybatisPlusException;
import com.baomidou.mybatisplus.core.toolkit.StringPool;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.InjectionConfig;
import com.baomidou.mybatisplus.generator.config.*;
import com.baomidou.mybatisplus.generator.config.po.TableInfo;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import com.baomidou.mybatisplus.generator.engine.VelocityTemplateEngine;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * @Auther: shanp.liu
 * @Date: 2019/7/2 14:17
 * @Description:
 * article,article_tag_type,article_type,system_info,system_operate_log,user_info,user_status
 */
public class CodeGenerator {


    public static void main(String[] args) {
        // 代码生成器
        AutoGenerator mpg = new AutoGenerator();
        // 包配置
        PackageConfig pc = packageConfigSet();
        mpg.setPackageInfo(pc);
        // 设置数据源
        mpg.setDataSource(dataSourceConfigSet());
        // 全局参数配置
        mpg.setGlobalConfig(globalConfigSet());
        // 项目路径设定
        String projectPath = System.getProperty("user.dir");
        // 配置模板
        TemplateConfig templateConfig = templateConfigSet();
        mpg.setTemplate(templateConfig);
        // 类生成配置
        StrategyConfig strategy = classInjectionStrategySet(pc);

        mpg.setStrategy(strategy);
        //设置模板引擎为Velocity
        mpg.setTemplateEngine(new VelocityTemplateEngine());

        // 自定义配置
        InjectionConfig cfg = new InjectionConfig() {
            @Override
            public void initMap() {
                // to do nothing
            }
        };

        // 模板引擎设定为 velocity
        String templatePath = "/templates/mapper.xml.vm";

        // 自定义输出配置
        List<FileOutConfig> focList = new ArrayList<>();
        // 自定义配置会被优先输出
        focList.add(new FileOutConfig(templatePath) {
            @Override
            public String outputFile(TableInfo tableInfo) {
                // 自定义输出文件名 ， 如果你 Entity 设置了前后缀、此处注意 xml 的名称会跟着发生变化！！
//                return projectPath + "/src/main/resources/mappers/" + pc.getModuleName()
                return projectPath + "/src/main/resources/mapper/"
                        + "/" + tableInfo.getEntityName() + "Mapper" + StringPool.DOT_XML;
            }
        });
        cfg.setFileOutConfigList(focList);
        mpg.setCfg(cfg);
        mpg.execute();
    }


    /**
     * @return java.lang.String
     * @Author shanp.liu
     * @Description 获取需要生成代码的表名
     * @Date 10:27 2020/10/10
     * @Param [tip]
     **/
    public static String getTableNames(String tip) {

        Scanner scanner = new Scanner(System.in);
        StringBuilder help = new StringBuilder();
        help.append("请输入" + tip + "：");
        System.out.println(help.toString());
        if (scanner.hasNext()) {
            String ipt = scanner.nextLine();
            if (StringUtils.isNotEmpty(ipt)) {
                return ipt;

            }
        }
        throw new MybatisPlusException("请输入正确的" + tip + "！");

    }

    /**
     * @return GlobalConfig 全局参数配置类
     * @Author shanp.liu
     * @Description 全局参数配置
     * @Date 9:54 2020/10/10
     * @Param []
     **/
    public static GlobalConfig globalConfigSet() {

        GlobalConfig gc = new GlobalConfig();
        String projectPath = System.getProperty("user.dir");
        //用于多个模块下生成到精确的目录下
//        String projectPath = "E:/IDEA WorkSpace/demo_springcoud2/demo_security_oauth2";
        //生成文件的输出目录
        gc.setOutputDir(projectPath + "/src/main/java");
        //开发人员
        gc.setAuthor("shanp.liu");
        //是否打开输出目录
        gc.setOpen(false);
        // 实体属性 Swagger2 注解
        gc.setSwagger2(true);
        //配置各个功能的类名，其中%s表示变量
        gc.setMapperName("%sDao");
        gc.setControllerName("%sController");
        gc.setServiceImplName("%sServiceImpl");
        gc.setServiceName("%sService");

        return gc;
    }

    /**
     * @return DataSourceConfig 数据源配置
     * @Author shanp.liu
     * @Description 数据源配置
     * @Date 10:01 2020/10/10
     * @Param []
     **/
    public static DataSourceConfig dataSourceConfigSet() {

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUrl("jdbc:mysql://127.0.0.1:3306/myblog?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT%2B8");
        //设置驱动
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
        //用户名
        dsc.setUsername("root");
        //密码
        dsc.setPassword("root");
        return dsc;
    }

    /**
     * @return PackageConfig
     * @Author shanp.liu
     * @Description 包设置
     * @Date 10:03 2020/10/10
     * @Param []
     **/
    public static PackageConfig packageConfigSet() {

        PackageConfig pc = new PackageConfig();
        //添加这个后 会以一个实体为一个模块 比如user实体会生成user模块 每个模块下都会生成三层
        // pc.setModuleName(scanner("模块名"));
        pc.setParent("com.jeasion.blog");
        pc.setEntity("pojo");
        pc.setController("controller");
        pc.setMapper("dao");
        return pc;
    }


    /**
     * @return TemplateConfig
     * @Author shanp.liu
     * @Description 配置自定义输出模板（如果不配置这些，则会按照官方的配置进行生成）
     * @Date 10:16 2020/10/10
     * @Param []
     **/
    public static TemplateConfig templateConfigSet() {

        TemplateConfig templateConfig = new TemplateConfig();
        //指定自定义模板路径，注意不要带上.ftl/.vm, 会根据使用的模板引擎自动识别
        templateConfig.setEntity("templates/entity.java");
        templateConfig.setMapper("templates/dao.java");
        templateConfig.setController("templates/controller.java");
        templateConfig.setService("templates/service.java");
        templateConfig.setServiceImpl("templates/serviceImpl.java");
        templateConfig.setXml("templates/mapper.xml");
        //设置为空则代表不需要生成
        templateConfig.setXml(null);
        return templateConfig;

    }

    /**
     * @return StrategyConfig 策略配置
     * @Author shanp.liu
     * @Description 类生成配置
     * @Date 10:20 2020/10/10
     * @Param [pc]
     **/
    public static StrategyConfig classInjectionStrategySet(PackageConfig pc) {
        StrategyConfig strategy = new StrategyConfig();
        //数据库表映射到实体的命名策略
        strategy.setNaming(NamingStrategy.underline_to_camel);
        //数据库表字段映射到实体的命名策略, 未指定按照 naming 执行
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        //为实体类添加公共基类
        // strategy.setSuperEntityClass("com.wt.demo01.BaseEntity");
        //实体类采用lombok的形式
        strategy.setEntityLombokModel(true);
        //设置controller为restcontroller
        strategy.setRestControllerStyle(true);
        //【实体】是否生成字段常量（默认 false）
        strategy.setEntityColumnConstant(true);
        //是否生成实体时，生成字段配置 即在字段属性上加上@TableField("")注解
        strategy.setEntityTableFieldAnnotationEnable(true);

        // controller的公共父类
        // strategy.setSuperControllerClass("com.wt.demo01.BaseController");
        // 写于父类中的公共字段
        // strategy.setSuperEntityColumns("id");
        String[] tables = getTableNames("表名，多个英文逗号分割").split(",");
        strategy.setInclude(tables);
        //驼峰转连字符
        strategy.setControllerMappingHyphenStyle(true);
        //表前缀
        strategy.setTablePrefix(pc.getModuleName() + "_");
        return strategy;
    }


}

