import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home';


function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={Login}></Route>
            <Route path="/home/" component={Home} />
        </Router>
    )
}

export default AppRouter