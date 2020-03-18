import React from 'react';
import { Link, Route } from 'react-router-dom';
import Video from "./Video"
import Workplace from "./Workplace"
import BlogIndex from "./BlogIndex"
import "./Home.css"
import ArticleList from "./article/ArticleList"
import ArticleAdded from "./article/ArticleAdded"


function Home() {
    return (
        <div className="mainDiv">
            <div className="leftNav">
                <h3>视频</h3>
                <ul>
                    <li><Link to="/home/index">博客首页</Link> </li>
                    <li><Link to="/home/video">视频教程</Link> </li>
                    <li><Link to="/home/workplace">职场空间</Link> </li>
                </ul>
                <h3>文章</h3>
                <ul>
                    <li><Link to="/home/articleList">文章列表</Link> </li>
                    <li><Link to="/home/addArticle">添加文章</Link> </li>
                </ul>
            </div>

            <div className="rightMain">
                <Route path="/home/index" exact component={BlogIndex} />
                <Route path="/home/video" component={Video} />
                <Route path="/home/workplace" component={Workplace} />
                <Route path="/home/articleList" component={ArticleList} />
                <Route path="/home/addArticle" component={ArticleAdded} />
                <Route path="/home/editArticle/:id" component={ArticleAdded} />
            </div>
        </div>
    )
}

export default Home
