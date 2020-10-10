// 站点情况
export default {
    siteProfile: "site-profile"
};

Vue.component("site-profile", {
    template: "    <aside id=\"php_text-22\" class=\"widget php_text\">\n" +
        "                <h3 class=\"widget-title\">\n" +
        "                    <i class=\"fa fa-bars\"></i>网站概况\n" +
        "                </h3>\n" +
        "                <div class=\"textwidget widget-text\">\n" +
        "                    <ul class=\"site-profile\">\n" +
        "                        <li><i class=\"fa fa-file-o\"></i> 文章总数：{{siteProfile.articleSum}} 篇</li>\n" +
        "                        <li><i class=\"fa fa-commenting-o\"></i> 留言数量：{{siteProfile.comments}} 条</li>\n" +
        "                        <li><i class=\"fa fa-folder-o\"></i> 分类数量：{{siteProfile.tags}} 个</li>\n" +
        "                        <li><i class=\"fa fa-tags\"></i> 标签总数：{{siteProfile.tags}} 个</li>\n" +
        "                        <li><i class=\"fa fa-link\"></i> 友链数量：{{siteProfile.linksTo}} 个</li>\n" +
        "                        <li><i class=\"fa fa-eye\"></i> 浏览总量：{{siteProfile.views}} 次</li>\n" +
        "                        <li><i class=\"fa fa-pencil-square-o\"></i> 最后更新：\n" +
        "                            <span style=\"color:#2F889A\">\n" +
        "                                        {{siteProfile.lastUpdate}}</span>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "                <div class=\"clear\"></div>\n" +
        "            </aside>",
    data: function () {
        return {
            "siteProfile": {
                "articleSum": 25,
                "comments": 23,
                "category": 22,
                "tags": 35,
                "linksTo": 2,
                "views": 123,
                "lastUpdate": "2020年01月01日"
            }
        }
    },
    mounted: function () {
        const _this = this;
        // axios.get("/home/siteProfile", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6bef4c7913d6981fc903bb", {
                params: {}
            }
        ).then(function (response) {
            if (response.data.status == "success") _this.siteProfile = response.data.siteProfile;
            else {
                console.log("请求网站概论数据出错!" + response.data);
                alert("请求网站概论数据异常！");
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
});

