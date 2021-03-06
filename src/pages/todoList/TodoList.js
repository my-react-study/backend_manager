import React, { Component } from 'react';
import { Table, Input, Row, Button, Modal, Form, message } from 'antd';
import 'antd/dist/antd.css'
import store from './store/storeCreator'
import { getAllUserAction, getUsersByUsername, addUserAction, editUserAction,deleteUserAction } from "./store/actionCreator";

const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

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
            dataIndex: "id", title: "ID",
        },
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
                    <Button onClick={() => this.modal('edit', row)}>编辑</Button>
                    <Button style={{ marginLeft: 10 }} type="danger" onClick={() => this.remove(row)}>删除</Button>
                </div>
            }
        }];

    componentDidMount() {
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

    //添加编辑用户弹窗
    modal = (type, row) => {
        this.setState({
            visible: true,
            modalType: type
        }, () => {
            this.props.form.resetFields();
            if (type === 'add') return;
            this.props.form.setFieldsValue({
                username: row.username,
                age: row.age,
                address: row.address
            })
            this.setState({ editRow: row })
        })
    }

    //添加与修改用户提交
    handleOk = () => {
        this.props.form.validateFieldsAndScroll((err, value) => {
            if (err) return;
            let user = {
                userName: value.username, age: value.age, address: value.address
            };
            if (this.state.modalType === 'add') {
                const action = addUserAction(user)
                store.dispatch(action)
                this.setState({ visible: false });
                message.success("添加成功!")
            } else {
                user.id = this.state.editRow.id
                console.log(this.state.editRow)
                const action = editUserAction(user)
                store.dispatch(action)
                this.setState({ visible: false });
                message.success("编辑成功!")
            }
        })
    }

    remove = (row) => {
        confirm({
            title: '是否要删除该用户?',
            okText: '是',
            okType: '否',
            cancelText: 'No',
            onOk() {
                const action = deleteUserAction(row.id)
                store.dispatch(action)
                message.success('删除成功!')
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return (
            <div className="App">
                <Row>
                    <Search style={{ width: 300 }} onChange={this.search} placeholder="请输入姓名" />
                    <Button type="primary" style={{ marginLeft: 20 }} onClick={() => this.modal('add')}>添加用户</Button>
                </Row>
                <Row style={{ paddingTop: 20 }}>
                    <Table dataSource={this.state.userList} rowKey={row => row.id} bordered columns={this.columns} />
                </Row>
                <Modal
                    title={this.state.modalType === 'add' ? "添加用户" : "编辑用户"}
                    onOk={this.handleOk}
                    onCancel={() => this.setState({ visible: false })}
                    visible={this.state.visible}>
                    <Form>
                        <FormItem label="用户"  {...formItemLayout}>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input placeholder="username" />
                            )}
                        </FormItem>
                        <FormItem label="年龄"  {...formItemLayout}>
                            {getFieldDecorator('age', {
                                rules: [{ required: true, message: 'Please input your age!' }],
                            })(
                                <Input placeholder="age" />
                            )}
                        </FormItem>
                        <FormItem label="地址"  {...formItemLayout}>
                            {getFieldDecorator('address', {
                                rules: [{ required: true, message: 'Please input your address!' }],
                            })(
                                <Input placeholder="address" />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Form.create()(TodoList);