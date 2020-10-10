// 近期评论
export default {
    comments: "recent-comments"
};

Vue.component("recent-comments", {
    template: "  <aside id=\"recent_comments-2\" class=\"widget recent_comments wow fadeInUp\" data-wow-delay=\"0.3s\"><h3\n" +
        "                    class=\"widget-title\"><i class=\"fa fa-bars\"></i>近期评论</h3>\n" +
        "                <div id=\"message\" class=\"message-widget\">\n" +
        "                    <ul>\n" +
        "                        <li style=\"border: none;\" v-for='comment in comments'>\n" +
        "                            <a v-bind:href=\"comment.href\" rel=\"external nofollow\">\n" +
        "                        <span class=\"comment_author\">\n" +
        "                            <strong>{{comment.visitors}}&nbsp;&nbsp;</strong>\n" +
        "                        </span>\n" +
        "                                {{comment.comment}}</a>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "                <div class=\"clear\"></div>\n" +
        "            </aside>",
    data: function () {
        return {
            "comments": [
                {
                    "visitors": "鲁迅",
                    "comment": "我的博客有两条留言",
                    "href": "article/6/6.html#anchor-comment-29"
                },
                {
                    "visitors": "鲁迅",
                    "comment": "一条是评论",
                    "href": "article/6/6.html#anchor-comment-22"
                }
                ,
                {
                    "visitors": "鲁迅",
                    "comment": "另一条也是评论",
                    "href": "article/6/6.html#anchor-comment-29"
                }
                ,
                {
                    "visitors": "卢本伟",
                    "comment": "卢本伟牛逼",
                    "href": "article/6/6.html#anchor-comment-29"
                }
                ,
                {
                    "visitors": "卢本伟",
                    "comment": "我卢本伟没有开挂",
                    "href": "article/6/6.html#anchor-comment-29"
                }
                ,
            ]
        }
    },
    mounted: function () {
        const _this = this;
        // axios.get("/home/recentComments", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6bf0fe7913d6981fc9af0d", {
            params: {}
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


    }
});
