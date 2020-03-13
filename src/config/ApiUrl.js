let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin: ipUrl + 'checkLogin',  //  检查用户名密码是否正确
    getArticleList: ipUrl + 'getArticleList',  //  文章列表 
    addArticle: ipUrl + 'addArticle',  //  添加文章 
}
export default servicePath;