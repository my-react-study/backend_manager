import React from 'react';
import { Route, Link } from 'react-router-dom';
import Vue from './Vue';
import Flutter from './Flutter';
import Java from './Java';
import "./Video.css"

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/home/video/vue">Vue视频教程</Link></li>
                    <li><Link to="/home/video/flutter">Flutter视频教程</Link></li>
                    <li><Link to="/home/video/java">Java视频教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/home/video/vue" component={Vue}></Route>
                <Route path="/home/video/flutter" component={Flutter}></Route>
                <Route path="/home/video/java" component={Java}></Route>
            </div>
        </div>
    )
}
export default Video