// 关于我
export default {
    aboutMe: "about-me"
};

Vue.component("about-me", {
    template: "<aside class=\"widget about\">\n" +
        "                <h3 class=\"widget-title\">\n" +
        "                    <i class=\"fa fa-bars\"></i>关于本站\n" +
        "                </h3>\n" +
        "                <div id=\"feed_widget\">\n" +
        "                    <div class=\"feed-about\">\n" +
        "                        <div class=\"about-main\">\n" +
        "                            <div class=\"about-img\">\n" +
        "                                <img v-bind:src=\"aboutMe.Alipay\"\n" +
        "                                     alt=\"赞助我\">\n" +
        "                            </div>\n" +
        "                            <div class=\"about-name\">{{aboutMe.nickname}}</div>\n" +
        "                            <div class=\"about-the\">\n" +
        "                                {{aboutMe.description}}\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"clear\"></div>\n" +
        "                        <ul>\n" +
        "                            <li class=\"tmail\">\n" +
        "                                <a target=\"_blank\" rel=\"external nofollow\"\n" +
        "                                   v-bind:href=\"'mailto:'+aboutMe.contactMe.mail\"\n" +
        "                                   title=\"邮件联系我\">\n" +
        "                                    <i class=\"fa fa-envelope\"></i>\n" +
        "                                </a>\n" +
        "                            </li>\n" +
        "                            <li class=\"tsina\">\n" +
        "                                <a title=\"撕逼战场\"\n" +
        "                                   href=\"aboutMe.contactMe.Weibo\"\n" +
        "                                   target=\"_blank\" rel=\"external nofollow\">\n" +
        "                                    <i class=\"fa fa-weibo\"></i>\n" +
        "                                </a>\n" +
        "                            </li>\n" +
        "                            <li class=\"feed\">\n" +
        "                                <a title=\"同性蕉友\" v-bind:href=\"aboutMe.contactMe.github\" target=\"_blank\"\n" +
        "                                   rel=\"external nofollow\">\n" +
        "                                    <i class=\"fa fa-github\"></i>\n" +
        "                                </a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"clear\"></div>\n" +
        "            </aside>",
    data: function () {
        return {
            "aboutMe": {
                "contactMe": {
                    "Aipay": "http://localhost:8081/uploads/2018/11/avatar(3).jpg",
                    "mail": "#",
                    "github": "#",
                    "Weibo": "#"
                },
                "description": "仰之弥高，钻之弥坚",
                "nickname": "枯蓑"
            }

        }
    },
    mounted: function () {
        const _this = this;
        // 获取个人信息
        // axios.get("/home/aboutMe", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6bf9c37913d6981fcd6da7", {
            params: {}
        }).then(function (response) {
            if (response.data.status == "success") _this.aboutMe = response.data.aboutMe;
            else {
                console.log("获取个人信息出错!" + response.data);
                alert("获取个人信息数据异常！");
            }
        }).catch(function (error) {
            console.log(error)
        });
    },
});
