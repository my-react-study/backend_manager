import React, { useState } from 'react';
import { List, Row, Col, Button } from 'antd'
import '../../static/css/ArticleList.css'
const ArticleList = () => {
    const [list, setList] = useState([{
        "id": 9,
        "title": "特太让人任天野",
        "introduce": "儿童日月潭玉",
        "addTime": "2020-01-30",
        "typeName": "视频教程"
    },
    {
        "id": 7,
        "title": "20个Flutter实例视频教程 让你轻松上手工作",
        "introduce": "这篇文章是Flutter基础的一个进阶教程，主要讲解的是在工作中一些常用的功能。学完这篇文章和视频，你可以轻松制作出80%以上工作中常用的Flutter复杂效果，对Flutter有更深刻的了解。\n\n本文是实战和基础的一个衔接总结。 在学完基础后，很多小伙伴都急于上手一个实战项目，觉的做完实战项目就算学会了Flutter，达到了工作水平一样。其实在实战和基础之间还需要有一个过度，人们喜欢称之为进阶。那这篇文章或者说视频就是进阶教程，它会以小实例的方式进行讲解。实例也会达到20个以上，每个小实例就是一个小的实战。\n\n** 学习这篇文章最重要的是，你必须在看完视频后动手练习，否则很难学会。**",
        "addTime": "2020-01-11",
        "typeName": "视频教程"
    },
    {
        "id": 6,
        "title": "React16免费视频教程（共28集）",
        "introduce": "这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端免费视频教程，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。\n\n我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。\n\n已更新完成........附上文章视频列表。",
        "addTime": "2020-01-11",
        "typeName": "视频教程"
    },
    {
        "id": 5,
        "title": "Redux免费视频教程（共24集）",
        "introduce": "通过React基础教程的学习，我相信你一定对React有了很好的了解，也可以制作出一些简单的React项目（注意我这里说的是简单的项目）。为什么你只能做出一些简单的项目那?因为React就是一个简单的轻量级的视图层框架。\n\nReact当中的组件通信和状态管理是特别繁琐的，比如子组件和父组件通信改变值，要通过父组件的方法。这就好比恋爱，要先认识女孩，再牵手，再接吻，最后你才能为所欲为。这种形式肯定不符合现在人的习惯，所以就有了很多快餐服务，通宵服务，极大的方便了现代人的需求。在开发中同样，公司最讲的就是效率，效率就需要把事情变简单，那只有React肯定不符合大型项目和快速开发。需要视图层框架+数据层框架，两个相互结合，就可以实现大型的开发项目了。",
        "addTime": "2020-01-11",
        "typeName": "快乐生活"
    },
    {
        "id": 2,
        "title": "React Router 免费文字视频教程（共9集）",
        "introduce": "React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。这是官方的解释，虽然足以解释React Router，但我觉的还不够重视这个插件。就目前我的工作经验所知，凡是React技术栈的项目（WEB和Native），都需要用到React Router。有了它你才可以构建复杂的应用程序，有了它才能使应用有层次感。如果没有React Router，我们智能用switch...case这样的语句，进行判断渲染，这非常的麻烦，而且不可用；但是有了React Router一切就变的简单了。",
        "addTime": "2019-10-17",
        "typeName": "视频教程"
    },
    {
        "id": 1,
        "title": "VSCode常用插件和技巧教程",
        "introduce": "想写这个文章已经很久了，但是一直觉的需要的人可能会很少，毕竟VSCode这种每天都使用IDE工具，基本在1小时内就可以快速上手，但是通过我对身边同事的观察，我发现还是有很多小伙伴使用不够精通。特别是现在越来越多的插件，有的非常好用，直接可以提高我们的开发效率，那从今天开始，我开始更新VSCode的一些插件和技巧，这个并不是定期更新，`而是我有了好的素材就会更新。`",
        "addTime": "2019-10-18",
        "typeName": "视频教程"
    }])
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
                                共<span>{item.part_count}</span>集
                            </Col>
                            <Col span={3}>
                                {item.view_count}
                            </Col>

                            <Col span={4}>
                                <Button type="primary" >修改</Button>&nbsp;
                                <Button >删除 </Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ArticleList