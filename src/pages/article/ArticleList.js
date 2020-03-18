import React, { useState, useEffect } from 'react';
import { List, Row, Col, Button, message, Modal } from 'antd'
import '../../static/css/ArticleList.css'
import axios from 'axios'
import servicePath from '../../config/ApiUrl'
const { confirm } = Modal;

const ArticleList = (props) => {
    const [list, setList] = useState([])

    //进入页面时，获得博客文章的列表
    useEffect(() => {
        getArticleList()
    }, [])

    const getArticleList = () => {
        axios({
            method: 'get',
            url: servicePath.getArticleList,
            withCredentials: true,
            header: { 'Access-Control-Allow-Origin': '*' }
        }).then(
            res => {
                console.log(res.data)
                setList(res.data.list)
            }
        )
    }

    const deleteItem = (id) => {
        confirm({
            title: '确定要删除这篇博客文章吗?',
            content: '如果你点击OK按钮，文章将会永远被删除，无法恢复。',
            onOk() {
                axios(servicePath.deleteArticle + id, { withCredentials: true }).then(
                    res => {
                        message.success('文章删除成功')
                        getArticleList()
                    }
                )
            },
            onCancel() {
                message.success('没有任何改变')
            },
        });
    }

    const editItem = (id) => {
        props.history.push('/home/editArticle/' + id)
    }

    return (
        <div>
            <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={3}>
                            <b>类别</b>
                        </Col>
                        <Col span={3}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={3}>
                            <b>集数</b>
                        </Col>
                        <Col span={3}>
                            <b>浏览量</b>
                        </Col>

                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>

                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className="list-div">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={3}>
                                {item.typeName}
                            </Col>
                            <Col span={3}>
                                {item.addTime}
                            </Col>
                            <Col span={3}>
                                共<span>{item.partCount}</span>集
                            </Col>
                            <Col span={3}>
                                {item.viewCount}
                            </Col>

                            <Col span={4}>
                                <Button type="primary" onClick={() => editItem(item.id)}>修改</Button>&nbsp;
                                <Button onClick={() => deleteItem(item.id)}>删除 </Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ArticleList