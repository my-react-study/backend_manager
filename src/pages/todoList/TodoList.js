import React, { Component } from 'react';
import { Table, Input, Row, Button } from 'antd';
import 'antd/dist/antd.css'
import store from './store/storeCreator'
import { getUserListAction, getAllUserAction, getUsersByUsername } from "./store/actionCreator";

const { Search } = Input;

const userList = [
    {
        username: "tom",
        age: "18",
        address: "武汉",
    },
    {
        username: "tom",
        age: "18",
        address: "武汉",
    },
    {
        username: "tom",
        age: "18",
        address: "武汉",
    },
    {
        username: "tom",
        age: "18",
        address: "武汉",
    },
    {
        username: "tom",
        age: "18",
        address: "武汉",
    },
    {
        username: "tom",
        age: "18",
        address: "武汉",
    }
]

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.search = this.search.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    columns = [
        {
            dataIndex: "username", title: "姓名",
        },
        {
            dataIndex: "age", title: "年龄",
        },
        {
            dataIndex: "address", title: "地址"
        },
        {
            dataIndex: "action", title: "操作", width: 200, render: (text, row) => {
                return <div>
                    <Button >编辑</Button>
                    <Button style={{ marginLeft: 10 }} type="danger" >删除</Button>
                </div>
            }
        }];

    componentDidMount() {
        // axios.get('http://localhost:7300/mock/5e74ab0eca458a00267bf30a/tmh/getUserList').then((res) => {
        //     const userList = res.data.userList
        //     const action = getUserListAction(userList)
        //     store.dispatch(action)
        const action = getAllUserAction()
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    search = (e) => {
        const action = getUsersByUsername(e.target.value)
        store.dispatch(action)
    };

    render() {
        return (
            <div className="App">
                <Row>
                    <Search style={{ width: 300 }} onChange={this.search} placeholder="请输入姓名" />
                    <Button type="primary" style={{ marginLeft: 20 }} >添加用户</Button>
                </Row>
                <Row style={{ paddingTop: 20 }}>
                    <Table dataSource={this.state.userList} rowKey={row => row.id} bordered columns={this.columns} />
                </Row>
            </div>
        );
    }
}

export default TodoList;