import React, { Component } from 'react'
import '../../assets/css/Myself.scss'
import BScroll from "better-scroll"
export default class Myself extends Component {
    state = {
        list: {
            list1: [{ text: '我的积分', img: require('../../assets/imgs/integral.png') }, { text: '我的订阅', img: require('../../assets/imgs/integral.png') }, { text: '微聊联系人', img: require('../../assets/imgs/integral.png') }],
            list2: [{ text: '房贷计算器', img: require('../../assets/imgs/integral.png') }, { text: '我的房子', img: require('../../assets/imgs/integral.png') }],
            list3: [{ text: '我的看房记录', img: require('../../assets/imgs/integral.png') }, { text: '我的问答', img: require('../../assets/imgs/integral.png') }],
            list4: [{ text: '设置', img: require('../../assets/imgs/integral.png') }, { text: '意见反馈', img: "" }]
        }
    }
    componentDidMount() {
        /* better-scroll */
        let scroll = new BScroll(document.getElementById("Myself"), {
            click: true,
        })
    }
    render() {
        return (
            <div id="Myself">
                <ul className="content">
                    <div className="header">
                        <div className="headerTop">
                            <div className="headerImg">
                                <img src={require('../../assets/imgs/header.png')} alt="" /></div>
                            <div className="login">
                                <p className="loginState" onClick={this.login.bind(this)}>登录/注册</p>
                                <p>可以与经纪人发起聊天</p>
                            </div>
                            <div className="setting">
                                <img src={require('../../assets/imgs/Settings.png')} alt="" />
                            </div>
                        </div>
                        <div className="headerBottom">
                            <div className="headerBottomData">
                                <p>0</p>
                                <p><img src={require('../../assets/imgs/home.png')} alt="" />钱包</p>
                            </div>
                            <div className="headerBottomData">
                                <p>0</p>
                                <p><img src={require('../../assets/imgs/home.png')} alt="" />优惠</p>
                            </div>
                            <div className="headerBottomData">
                                <p>0</p>
                                <p><img src={require('../../assets/imgs/home.png')} alt="" />积分</p>
                            </div>
                        </div>
                    </div>
                    <div className="single">
                        {this.state.list.list1.map(obj => {
                            return <div key={obj.text}><span><img src={obj.img} alt="icon" />{obj.text}</span> <span>></span></div>
                        })}
                    </div>
                    <div className="single">
                        {this.state.list.list2.map(obj => {
                            return <div key={obj.text}><span><img src={obj.img} alt="icon" />{obj.text}</span> <span>></span></div>
                        })}
                    </div>
                    <div className="single">
                        {this.state.list.list3.map(obj => {
                            return <div key={obj.text}><span><img src={obj.img} alt="icon" />{obj.text}</span> <span>></span></div>
                        })}
                    </div>
                    <div className="single">
                        {this.state.list.list4.map(obj => {
                            return <div key={obj.text}><span><img src={obj.img} />{obj.text}</span> <span>></span></div>
                        })}
                    </div>
                    <div className="space"></div>
                </ul>
            </div>
        )
    }
    login(){
        this.props.history.push("/Login")
    }
}
