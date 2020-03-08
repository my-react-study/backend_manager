import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function Login(props) {
    const login = () => {
        props.history.push('/index')
    }
    
    return (
        <div>
            <Button type="primary" size="large" block onClick={login} > Login in </Button>
        </div>
    )
}
export default Login