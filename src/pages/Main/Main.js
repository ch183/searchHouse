import React, { Component } from 'react'
import { HashRouter, Switch, Route } from "react-router-dom"
import MainIndex from "./MainIndex"
import Chat from "../Chat/Chat"
import Recommend from "../Recommend/Recommend"
import Myself from "../Myself/Myself"
/* 引入样式 */
import '../../assets/css/Main.scss'
/* 引入antd框架 */
import { Flex } from 'antd-mobile';

export default class Main extends Component {
    state = {
        bottomList: [{ img: "home.png", text: "首页", jump: "MainIndex" }, { img: "chat.png", text: "微聊", jump: "Chat" }, { img: "collect.png", text: "足迹", jump: "Recommend" }, { img: "user.png", text: "我的", jump: "Myself" },]
    }
    render() {
        return (
            <div id="Main">
                <HashRouter>
                    <Switch>
                        <Route exact path="/Main/" component={MainIndex}></Route>
                        <Route path="/Main/Chat" component={Chat}></Route>
                        <Route path="/Main/Recommend" component={Recommend}></Route>
                        <Route path="/Main/Myself" component={Myself}></Route>
                        <Route component={MainIndex}></Route>
                    </Switch>
                </HashRouter>
                {/* 底部导航 */}
                <Flex className="MainBottomNav">
                    {this.state.bottomList.map(obj => <Flex.Item key={obj.text} onClick={this.jump.bind(this, "/Main/" + obj.jump)}><img alt="icon" src={require('../../assets/imgs/' + obj.img)} />{obj.text}</Flex.Item>)}
                </Flex>
                <div className="space"></div>
            </div>
        )
    }
    jump(local) {
        this.props.history.push(local)
    }
}
