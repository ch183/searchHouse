import React, { Component } from 'react'
import '../../assets/css/Chat.scss'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
export default class Chat extends Component {
    render() {
        return (
            <div id="Chat">
                <div className="ChatMain">
                    <div className="headerImg">
                        <img src={require('../../assets/imgs/header.png')} alt="" />
                    </div>
                    <p>置业顾问:<span>张小妹</span></p>
                    <p>专业服务诚信做人做事!</p>
                    <Button type="primary" style={{ backgroundColor: "#00BC5B", width: "80%",margin:"auto"}}>我要聊天</Button>
                </div>
            </div>
        )
    }
}
