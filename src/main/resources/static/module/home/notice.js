// 通知大喇叭
export default {
    allNotice: "all-notice"
};

Vue.component("all-notice", {
    template: "  <nav class=\"breadcrumb\">\n" +
        "        <div class=\"bull\"><i class=\"fa fa-volume-up\"></i></div>\n" +
        "        <div id=\"scrolldiv\">\n" +
        "            <div class=\"scrolltext\">\n" +
        "                <ul style=\"margin-top: 0px;\">\n" +
        "                    <li class=\"scrolltext-title\">\n" +
        "                        <a href=\"notice/3.htm\" rel=\"bookmark\">终于开始更新了</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"scrolltext-title\">\n" +
        "                        <a href=\"notice/1.htm\" rel=\"bookmark\">本站下载地址</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </nav>"
});
