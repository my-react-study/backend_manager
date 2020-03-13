import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd'
import '../../static/css/ArticleAdded.css'
import axios from 'axios'
import servicePath from '../../config/ApiUrl'

const { Option } = Select;
const { TextArea } = Input

const ArticleAdded = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [publishDate, setPublishDate] = useState('')
    const [articleType, setArticleType] = useState(1)
    const [articleTypeList, setArticleTypeList] = useState([])

    //页面初始化时获取文章类型数据
    useEffect(() => {
        getArticleTypeList()
    }, [])

    const getArticleTypeList = () => {
        axios({
            method: 'get',
            url: servicePath.getTypeInfo,
            header: { 'Access-Control-Allow-Origin': '*' },
            withCredentials: true
        }).then(
            res => {
                if (res.data.data === "没有登录") {
                    localStorage.removeItem('openId')
                    props.history.push('/')
                } else {
                    setArticleTypeList(res.data.data)
                }
            }
        )
    }

    const changeContent = (e) => {
        setContent(e.target.value)
    }

    const changeArticleType = (value) => {
        setArticleType(value)
        console.log(value)
    }

    const changeIntroduction = (e) => {
        setIntroduction(e.target.value)
    }

    const publishArticle = () => {
        if (!title) {
            message.error("文章标题不能为空")
            return false
        }
        if (!content) {
            message.error("文章内容不能为空")
            return false
        }
        if (!introduction) {
            message.error("文章简介不能为空")
            return false
        }
        if (!publishDate) {
            message.error("发布时间不能为空")
            return false
        }
        var dataProps = {
            'type_id': articleType,
            'title': title,
            'article_content': content,
            'introduce': introduction,
            'addTime': (new Date(publishDate.replace('-', '/')).getTime()) / 1000, //把字符串转换成时间戳
            'view_count': Math.ceil(Math.random() * 100) + 1000,
            'part_count': Math.ceil(Math.random() * 100) + 20
        }
        axios({
            method: 'post',
            url: servicePath.addArticle,
            data: dataProps,
            withCredentials: true
        }).then(
            res => {
                if (res.data.isSuccess) {
                    message.success('文章保存成功')
                } else {
                    message.error('文章保存失败');
                }
            }
        )

    }

    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={20}>
                            <Input
                                value={title}
                                placeholder="博客标题"
                                onChange={e => { setTitle(e.target.value) }}
                                size="large" />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select size="large" defaultValue={articleType} onChange={changeArticleType}>
                                {
                                    articleTypeList.map((item, index) => {
                                        return (<Option key={index} value={item.Id}>{item.typeName}</Option>)
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10} >
                        <Col span={12}>
                            <TextArea
                                value={content}
                                className="markdown-content"
                                onChange={changeContent}
                                onPressEnter={changeContent}
                                rows={35}
                                placeholder="文章内容"
                            />
                        </Col>
                        <Col span={12}>
                            <div
                                className="show-html"
                            >

                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button type="primary" size="large" onClick={publishArticle}  >发布文章</Button>
                            <br />
                        </Col>
                        <Col span={24}>
                            <br />
                            <TextArea
                                value={introduction}
                                rows={4}
                                placeholder="文章简介"
                                onChange={changeIntroduction}
                                onPressEnter={changeIntroduction}
                            />
                            <br />
                            <div
                                className="introduce-html"
                            >
                                文章简介
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    onChange={(date, dateString) => setPublishDate(dateString)}
                                    placeholder="发布日期"
                                    size="large"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ArticleAdded