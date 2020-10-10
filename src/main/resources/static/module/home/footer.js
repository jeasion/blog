// 近期评论
export default {
    allFooter: "all-footer"
};

Vue.component("all-footer", {
    template: " <div class=\"site-info\">\n" +
        "        <p style=\"text-align: center;\">{{corpParams.corpRight}}\n" +
        "            <a href=\"toIndex\" target=\"_blank\" rel=\"noopener noreferrer\">{{corpParams.blogName}}</a>\n" +
        "            All rights reserved.\n" +
        "        </p>\n" +
        "    </div>",
    data: function () {
        return {
            "corpParams": {
                "corpRight": "Copyright © 2020",
                "blogName": "风吟博客",
                "indexHref": "http://localhost:63342/default.html"
            }
        }
    },
    mounted: function () {
        const _this = this;
        // axios.get("/system/corpParams", {
        axios.get("https://mock.apipost.cn/app/mock/success/5f6bf95c7913d6981fcd3fc7", {
            params: {}
        }).then(function (response) {
                if (response.data.status == "success") _this.corpParams = response.data.corpParams;
                else {
                    console.log("获取footer数据出错，请检查数据:" + response.data + "的正确性");
                    alert("footer返回数据异常！");
                }
            }
        ).catch(function (error) {
            console.log(error);
        })
    },
    methods: {}


});
