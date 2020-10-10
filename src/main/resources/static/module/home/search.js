//我来组成搜索框和提醒
export default {
    allSearch: "all-search"
};
Vue.component("all-search", {

    template: " <div id=\"search-main\">\n" +
        "        <div class=\"searchbar\">\n" +
        "            <form method=\"get\" id=\"searchform\" action=\"http://localhost:8081/search\" accept-charset=\"UTF-8\">\n" +
        "            <span>\n" +
        "                <input type=\"text\" value=\"\" name=\"keywords\" id=\"s\" placeholder=\"输入搜索内容\" required=\"\">\n" +
        "                <button type=\"submit\" id=\"searchsubmit\">搜索</button>\n" +
        "            </span>\n" +
        "            </form>\n" +
        "        </div>\n" +
        "        <div class=\"clear\"></div>\n" +
        "    </div>"
    

});
