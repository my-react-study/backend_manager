import React from 'react';
import { Route, Link } from "react-router-dom"
import Money from "./Money"
import Getup from "./Getup"
import Avocation from "./Avocation"
import "./Workplace.css"

function Workplace() {
    return (
        <div >
            <div className="topNav">
                <ul>
                    <li><Link to="/home/workplace/money">程序员加薪秘籍</Link></li>
                    <li><Link to="/home/workplace/getup">程序员早起攻略</Link></li>
                    <li><Link to="/home/workplace/avocation">程序员副业宝典</Link></li>
                </ul>
            </div>
            <div className="workplaceContent">
                <div>职场空间</div>
                <Route path="/home/workplace/money" component={Money}></Route>
                <Route path="/home/workplace/getup" component={Getup}></Route>
                <Route path="/home/workplace/avocation" component={Avocation}></Route>
            </div>
        </div>
    )
}
export default Workplace