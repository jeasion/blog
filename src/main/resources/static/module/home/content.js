// 文章内容排版
export default {
    allContent: "all-content"
};
Vue.component("all-content", {
    template: "  <div id=\"primary\" class=\"content-area\">" +
        "            <main id=\"main\" class=\"site-main\" role=\"main\">\n" +
        "                <article class=\"post type-post\" v-for='article in articles'>\n" +
        "\n" +
        "                    <figure class=\"thumbnail\">\n" +
        "                        <a v-bind:href=\"\article.href\">\n" +
        "                            <img v-bind:src=\"article.img\"\n" +
        "                                 class=\"attachment-content size-content wp-post-image\" v-bind:alt=\"article.title\" width=\"280\"\n" +
        "                                 height=\"210\">\n" +
        "                        </a>\n" +
        "                        <span class=\"cat\">\n" +
        "                                            <a v-bind:href=\"article.category.href\">\n" +
        "                                                    {{article.category.name}}</a>\n" +
        "                                        </span>\n" +
        "                    </figure>\n" +
        "\n" +
        "                    <header class=\"entry-header\">\n" +
        "                        <h2 class=\"entry-title\">\n" +
        "                            <a v-bind:href=\"article.href\" rel=\"bookmark\">\n" +
        "                                {{article.title}}</a>\n" +
        "                        </h2>\n" +
        "                    </header>\n" +
        "\n" +
        "                    <div class=\"entry-content\">\n" +
        "                        <div class=\"archive-content\">\n" +
        "                            {{article.archive_content}}" +
        "                        </div>\n" +
        "                        <span class=\"title-l\"></span>\n" +
        "                        <span class=\"new-icon\">\n" +
        "                                        </span>\n" +
        "                        <span class=\"entry-meta\">\n" +
        "                                        <span class=\"date\">\n" +
        "                                            {{article.date}}\n" +
        "                                        &nbsp;&nbsp;\n" +
        "                                        </span>\n" +
        "                                        <span class=\"views\">\n" +
        "                                            <i class=\"fa fa-eye\"></i>\n" +
        "                                               {{article.views}} views\n" +
        "                                        </span>\n" +
        "                                        <span class=\"comment\">&nbsp;&nbsp;\n" +
        "                                            <a v-bind:href=\"article.comment_href\" rel=\"external nofollow\">\n" +
        "                                              <i class=\"fa fa-comment-o\"></i>\n" +
        "\n" +
        "                                                        发表评论\n" +
        "                                                    </a>\n" +
        "                                        </span>\n" +
        "                                    </span>\n" +
        "                        <div class=\"clear\"></div>\n" +
        "                    </div><!-- .entry-content -->\n" +
        "\n" +
        "                    <span class=\"entry-more\">\n" +
        "                                    <a v-bind:href=\"article.href\" rel=\"bookmark\">\n" +
        "                                        阅读全文\n" +
        "                                    </a>\n" +
        "                                </span>\n" +
        "                </article>\n" +
        "     </main>" +
        "     <nav class=\"navigation pagination\" role=\"navigation\">\n" +
        "                    <a class=\"page-numbers\" href=\"#\" title='首页' @click='top_page'><<</a>\n" +
        "                    <a class=\"page-numbers\" href=\"#\" title='上一页' @click='page_up'><</a>\n" +
        "                    <a class=\"page-numbers current\">{{pageLimit.index}}</a>\n" +
        "                    <a class=\"page-numbers\" href=\"#\" title='下一页' @click='page_down'>></a>\n" +
        "                    <a class=\"page-numbers\" href=\"#\" title='尾页' @click='last_page'>>></a>\n" +
        "                    <a>共{{pages}}页</a>\n" +
        "     </nav>" +
        "</div>",

    data: function () {
        return {
            // 文章列表
            "category": "index",
            "articles": [
                {
                    "id": 0,
                    "href": "../static/article/33.htm",
                    "img": "../static/img/thumbnail/random/img_0.jpg",
                    "title": "MySQL常用命令语句1",
                    "category":
                        {
                            "href": "../static/category/13.htm",
                            "name": "数据库",
                        }
                    ,
                    "archive_content": "常用的语句查询 select * from bbs where id=1;增加 insert into bbs (name,data_year) values(\"jack\", \"1993-10-01\")修改updatebbssetname = \"tom\", sex = 1, age = 18where...",
                    "date": "2018年11月25日",
                    "views": "122",
                    "comment_href": "../static/article/33.htm#comments"
                }
            ],
            // 文章分页
            "pageLimit": {
                "index": 1,
                "limit": 3,
                "total": 15,
                "pages": ""
            }
        }
    },
    computed: {
        //页面总数计算
        pages: function () {
            return Math.ceil(this.pageLimit.total / this.pageLimit.limit)
        }
    },
    mounted: function () {

        var _this = this;

        // 文章分页
        // axios.get("/system/params/pages", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6bef917913d6981fc91c56", {
            params: {}
        }).then(function (response) {
            if (response.data.status == "success") _this.pageLimit = response.data.pageLimit;
            else {
                console.log("请求系统分页参数出错!" + response.data);
                alert("请求系统分页参数异常！");
            }
        }).catch(function (error) {
            console.log(error);
        });


        // 文章列表
        // axios.get("/article/list", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6bf00e7913d6981fc94b19", {
            params: {category: _this.category}
        }).then(function (response) {
            if (response.data.status == "success") {
                _this.articles = response.data.articles;
                _this.category = response.data.category;
            } else {
                console.log("请求文章列表出错!" + response.data);
                alert("请求文章列表出错！");
            }
        }).catch(function (error) {
            console.log(error);
        });


    },
    methods: {

        //页面跳转
        top_page: function () {
            this.pageLimit.index == 1 ? alert('已是第一页！') : axios.get("/pages/top_page", {
                params: {category: this.category}
            }).then(response => (this.pageLimit = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        },
        page_up: function () {
            this.pageLimit.index == 1 ? alert('已是第一页！') : axios.get("/pages/page_up", {
                params: {category: this.category, index: this.pageLimit.index}
            }).then(response => (this.pageLimit = response.data))
                .catch(function (error) {
                    console.log(error);
                });

        },
        page_down: function () {
            this.pageLimit.index == this.pageLimit.pages ? alert('已是最后一页！') : axios.get("/pages/page_down", {
                params: {category: this.category, index: this.pageLimit.index}
            }).then(response => (this.pageLimit = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        },
        last_page: function () {
            this.pageLimit.index == this.pageLimit.pages ? alert('已是最后一页！') : axios.get("/pages/last_page", {
                params: {category: this.category}
            }).then(response => (this.pageLimit = response.data))
                .catch(function (error) {
                    console.log(error);
                });
        },

    }

})
;

