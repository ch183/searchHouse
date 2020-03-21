import React, { Component } from 'react'
import {Switch,Route} from "react-router-dom"
import MainIndex from "./MainIndex"
import Chat from "../Chat/Chat"
import Recommend from "../Recommend/Recommend"
import Myself from "../Myself/Myself"
/* 引入样式 */
import '../../assets/css/Main.scss'
/* 引入antd框架 */
import { Flex } from 'antd-mobile';

export default class Main extends Component {
    render() {
        return (
            <div id="Main">
                <Switch>
                    <Route exact path="/Main/" component={MainIndex}></Route>                    
                    <Route path="/Main/Chat" component={Chat}></Route>
                    <Route path="/Main/Recommend" component={Recommend}></Route>
                    <Route path="/Main/Myself" component={Myself}></Route>
                    <Route component={MainIndex}></Route>
                </Switch>
                {/* 底部导航 */}
                <Flex className="MainBottomNav">
                    <Flex.Item onClick={this.jump.bind(this,"/Main/MainIndex")}><img alt="icon" src={require('../../assets/imgs/home.png')}/>首页</Flex.Item>
                    <Flex.Item onClick={this.jump.bind(this,"/Main/Chat")}><img alt="icon" src={require('../../assets/imgs/chat.png')}/>微聊</Flex.Item>
                    <Flex.Item onClick={this.jump.bind(this,"/Main/Recommend")}><img alt="icon" src={require('../../assets/imgs/collect.png')}/>推荐</Flex.Item>
                    <Flex.Item onClick={this.jump.bind(this,"/Main/Myself")}><img alt="icon" src={require('../../assets/imgs/user.png')}/>我的</Flex.Item>
                </Flex>
                <div className="space"></div>
            </div>
        )
    }
    jump(local){
        this.props.history.push(local)
    }
}
