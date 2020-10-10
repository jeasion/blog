//我来组成头部
export default {
    allHeader: "all-header"
};
Vue.component("all-header", {
    template: "  <header id=\"masthead\" class=\"site-header\">\n" +
        "        <nav id=\"top-header\">\n" +
        "            <div class=\"top-nav\">\n" +
        "                <div class=\"user-login\">\n" +
        "                    <a v-bind:href=\"top_nav.login\">登录</a>\n" +
        "                </div>\n" +
        "                <div class=\"menu-topmenu-container\">\n" +
        "                    <ul id=\"menu-topmenu\" class=\"top-menu\">\n" +
        "                        <li class=\"menu-item\">\n" +
        "                            <a v-bind:href=\"top_nav.link\">\n" +
        "                                <i class=\"fa fa-link\"></i>\n" +
        "                                <span class=\"font-text\">申请友链&nbsp;</span>&nbsp;\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"menu-item\">\n" +
        "                            <a v-bind:href=\"top_nav.catalog\">\n" +
        "                                <i class=\"fa-list-alt fa\"></i>\n" +
        "                                <span class=\"font-text\">文章归档&nbsp;</span>&nbsp;\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                        <li class=\"menu-item\">\n" +
        "                        </li>\n" +
        "                        <li class=\"menu-item\">\n" +
        "                            <a href=\"top_nav.aboutMe\">\n" +
        "                                <i class=\"fa fa-info\"></i>\n" +
        "                                <span class=\"font-text\">关于本站&nbsp;</span>&nbsp;\n" +
        "                            </a>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </nav><!-- #top-header -->\n" +
        "\n" +
        "        <div id=\"menu-box\">\n" +
        "            <div id=\"top-menu\">\n" +
        "                 <span class=\"nav-search\">\n" +
        "                            <i class=\"fa fa-search\"></i>\n" +
        "                        </span>\n" +
        "                <div class=\"logo-site\"><h1 class=\"site-title\">\n" +
        "                    <a v-bind:href=\"logo_site.index\" v-bind:title=\"logo_site.title\">{{logo_site.title}}</a>\n" +
        "                </h1>\n" +
        "                    <p class=\"site-description\">{{logo_site.description}}</p>\n" +
        "                </div><!-- .logo-site -->\n" +
        "                <div id=\"site-nav-wrap\">\n" +
        "                    <div id=\"sidr-close\">\n" +
        "                        <a href=\"../index.htm#sidr-close\" class=\"toggle-sidr-close\">×</a>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <nav id=\"site-nav\" class=\"main-nav\">\n" +
        "                        <a href=\"../index.htm#sidr-main\" id=\"navigation-toggle\" class=\"bars\">\n" +
        "                            <i class=\"fa fa-bars\"></i>\n" +
        "                        </a>\n" +
        "                        <div class=\"menu-pcmenu-container\">\n" +
        "                            <ul id=\"menu-pcmenu\" class=\"down-menu nav-menu sf-js-enabled sf-arrows\">\n" +
        "                                <li>\n" +
        "                                    <a href=\"../default.html\">\n" +
        "                                        <i class=\"fa-home fa\"></i>\n" +
        "                                        <span class=\"font-text\">首页</span>\n" +
        "                                    </a>\n" +
        "                                </li>\n" +
        "                                <li v-for=\"menu in menus\" :key='menu.id'>\n" +
        "                                    <a v-bind:href=\"menu.href\"> " +
        "                                            <i class=\"fa fa-coffee\"></i>\n" +
        "                                        <span class=\"font-text\">{{menu.name}}&nbsp;</span>\n" +
        "                                    </a>\n" +
        "                                    <ul class=\"sub-menu\">\n" +
        "                                        <li v-for=\"sub in menus[menu.id].sub\" :key='sub.id'>\n" +
        "                                            <a v-bind:href=\"sub.href\" target=\"_blank\">{{sub.name}}</a>\n" +
        "                                        </li>" +
        "                                    </ul>\n" +
        "                                </li>\n" +
        "                            </ul>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </nav>\n" +
        "\n" +
        "                </div>\n" +
        "                <div class=\"clear\"></div>\n" +
        "            </div><!-- #top-menu -->\n" +
        "        </div><!-- #menu-box -->\n" +
        "    </header><!-- #masthead -->",
    data: function () {
        return {
            //顶部导航栏
            "top_nav": {
                "login": {
                    "href": "login.htm",
                    "icon": ""
                },
                "link": {
                    "href": "applyLink.htm",
                    "icon": ""
                },
                "catalog": {
                    "href": "articleFile.htm",
                    "icon": ""
                },
                "aboutMe": {
                    "href": "aboutSite.htm",
                    "icon": ""
                },
            },
            //头部logo层
            "logo_site": {
                "index": "default.html",
                "description": "细雪扶微风，落叶枯秋风",
                "icon": "",
                "title": "细雪扶风"
            },
            //头部分类层
            "menus": [{
                "id": 0,
                "href": "category/1.htm",
                "icon": "",
                "name": "Java",
                "sub": [
                    {
                        "id": 0,
                        "href": "category/2.htm",
                        "name": "Java 基础"
                    }
                ]
            }]
        }
    },
    mounted: function () {

        var _this = this;
        // 获取logo以及描述信息
        // axios.get("/system/logo_site", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6c035e7913d6981fd1f08b", {
            params: {}
        }).then(function (response) {
            if (response.data.status == "success") _this.logo_site = response.data.logo_site;
            else {
                console.log("logo请求获取数据出错，请检查数据正确性!");
                alert("返回数据异常！");
            }
        }).catch(function (error) {
            console.log(error);
        });


        // 获取导航栏信息
        // axios.get("/page/menus", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6c053f7913d6981fd2e3fc", {
            params: {}
        }).then(function (response) {
            if (response.data.status == "success") _this.menus = response.data.menus;
            else {
                console.log("获取导航栏数据出错，请检查数据正确性!");
                alert("返回数据异常！");
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
});

