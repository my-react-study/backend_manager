import React, { useState } from 'react';
import { Row, Col, Input, Select, Button, DatePicker } from 'antd'
import '../../static/css/ArticleAdded.css'

const { Option } = Select;
const { TextArea } = Input

const ArticleAdded = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [publishDate, setPublishDate] = useState('')
    const [acticleType, setActicleType] = useState('1')

    const changeContent = (e) => {
        setContent(e.target.value)
    }

    const changeArticleType = (value) => {
        setActicleType(value)
        console.log(value)
    }

    const changeIntroduction = (e) => {
        setIntroduction(e.target.value)
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
                            <Select size="large" defaultValue={acticleType} onChange={changeArticleType}>
                                <Option key='1' value='1'>视频教程</Option>
                                <Option key='2' value='2'>生活分享</Option>
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
                            <Button type="primary" size="large"  >发布文章</Button>
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