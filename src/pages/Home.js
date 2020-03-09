import React from 'react';
import { Link, Route } from 'react-router-dom';
import Video from "./Video"
import Workplace from "./Workplace"
import BlogIndex from "./BlogIndex"
import "./Home.css"

function Home() {
    return (
        <div className="mainDiv">
            <div className="leftNav">
                <h3>一级导航</h3>
                <ul>
                    <li><Link to="/home/index">博客首页</Link> </li>
                    <li><Link to="/home/video">视频教程</Link> </li>
                    <li><Link to="/home/workplace">职场空间</Link> </li>
                </ul>
            </div>

            <div className="rightMain">
                <Route path="/home/index" exact component={BlogIndex} />
                <Route path="/home/video" component={Video} />
                <Route path="/home/workplace" component={Workplace} />
            </div>
        </div>
    )
}

export default Home
