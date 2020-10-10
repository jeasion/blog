// 所有标签

export default {
    tagList: "tag-list"
};

Vue.component("tag-list", {
    template: "  <aside class=\"widget\">\n" +
        "                <h3 class=\"widget-title\">\n" +
        "                    <i class=\"fa fa-bars\"></i>所有标签\n" +
        "                </h3>\n" +
        "                <div class=\"tagcloud\">\n" +
        "                    <a  v-for=\" tag in  tagList \"  v-bind:href=\"tag.href\"\n" +
        "                       class=\"tag-link-129 tag-link-position-1\"\n" +
        "                       style=\"font-size: 14px;\">\n" +
        "                        {{tag.name}}</a>\n" +
        "                    <div class=\"clear\"></div>\n" +
        "                </div>\n" +
        "                <div class=\"clear\"></div>\n" +
        "            </aside>",
    data: function () {
        return {
            "tagList": [{
                "href": "tag/1.htm",
                "name": "Java-test"
            }, {
                "href": "tag/2.htm",
                "name": "算法"
            }, {
                "href": "tag/3.htm",
                "name": "数据结构"
            }, {
                "href": "tag/4.htm",
                "name": "操作系统"
            }
            ]
        }
    },
    mounted: function () {
        const _this = this;
        // axios.get("/home/tagList", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6bee837913d6981fc8b83a", {
            params: {}
        }).then(function (response) {
            if (response.data.status == "success") _this.tagList = response.data.tagList;
            else {
                console.log("请求标签数据出错!" + response.data);
                alert("请求标签数据异常！");
            }
        }).catch(function (error) {
            console.log(error);
        })
    }
});

