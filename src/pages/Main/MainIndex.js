import React, { Component } from 'react'
import '../../assets/css/MainIndex.scss'
import { Checkbox, List, InputItem, Button, WhiteSpace, WingBlank, Carousel } from 'antd-mobile';
import BScroll from "better-scroll"
import { IP,guessLove } from '../../api/apis'
import {connect} from "react-redux"

class MainIndex extends Component {
    state = {
        myCity:"正在定位..",
        nav: [{ text: "新房", img: require("../../assets/imgs/House.png") }, { text: "新房", img: require("../../assets/imgs/House.png") }, { text: "新房", img: require("../../assets/imgs/House.png") }, { text: "新房", img: require("../../assets/imgs/House.png") },],
        wiki: [{ id: 1, text: "我要贷款", img: require('../../assets/imgs/money.png') }, { id: 2, text: "我要贷款", img: require('../../assets/imgs/money.png') }, { text: "我要贷款", img: require('../../assets/imgs/money.png') }, { id: 3, text: "我要贷款", img: require('../../assets/imgs/money.png') },],
        guessLove: [],
        data: ['1.jpg', '2.jpg', '3.jpg'],
    }
    componentDidMount() {
         /* better-scroll */
         let scroll = new BScroll(document.getElementById("MainIndex"),{
            click:true,
        })
        /* 显示左上角定位 */
        this.showCityInfo()
        /* 获取猜你喜欢数据 */
        guessLove().then(data => {
            this.setState({
                guessLove: data.data
            })
        })
    }
    render() {
        return (
            <div id="MainIndex">
            <ul className="content">
                {/* 头部搜索栏 */}
                <div className="MainTop">
                    <div className="myCity" onClick={this.jump.bind(this,"/MyCity")}>{this.state.myCity}</div>
                    <InputItem placeholder="请输入手机号" clear style={{ height: "30px" }}>
                        <div>
                            <img src={require("../../assets/imgs/search.png")} alt="icon" />
                        </div>
                    </InputItem>
                    <div className="checkCity" onClick={this.jump.bind(this,"/CityList")}>
                        <img src={require("../../assets/imgs/map.png")} alt="icon" />
                    </div>
                </div>
                {/* 轮播图 */}
                <Carousel autoplay={true} infinite>
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: "auto" }}
                        >
                            <img
                                src={require(`../../assets/imgs/${val}`)}
                                alt="jpg"
                                style={{ width: '100%', height: "200px", verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* 导航图标 */}
                <div className="headerNav">
                    <div className="headerNavTop">
                        {this.state.nav.map(obj => <div ><img src={obj.img} alt="icon" />{obj.text}</div>)}
                    </div>
                    <div className="headerNavBottom">
                        {this.state.nav.map(obj => <div ><img src={obj.img} alt="icon" />{obj.text}</div>)}
                    </div>
                </div>
                {/* 房产全百科 */}
                <div className="wiki">
                    <div className="wikiTitle">
                        <span>房产全百科</span>专业的买房攻略</div>
                    <div className="wikiMain">
                        {this.state.wiki.map(obj => <div key={obj.id}><img src={obj.img} alt="" />{obj.text}</div>)}
                    </div>
                </div>
                {/* 猜你喜欢 */}
                <div className="guessLove">
                    <h2>猜你喜欢</h2>
                    <div className="guessLoveMain">
                        {this.state.guessLove.map((obj, index) => {
                            return <div className="single" key={obj.id} onClick={this.getClick.bind(this, obj)}>
                                <div className="left">
                                    {<img src={IP + obj.imgs} alt="预览" />}
                                </div>
                                <div className="middle">
                                    <h3>{obj.name}</h3>
                                    <p>{obj.area}</p>
                                    <p><span>{obj.type}</span>{obj.point}平</p>
                                </div>
                                <div className="right">
                                    {obj.price}/平
                            </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="space"></div>
            </ul>
            </div>
        )
    }
    showCityInfo() {
        /* 保存this指向 */
        var that = this
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city) {
                    var cityinfo = result.city;
                    that.setState({
                        myCity: cityinfo
                    })
                }else{
                    console.log("错误信息:"+result.city)
                }
            }
        });
    }
    getClick(obj) {
        /* 向redux传数据 */
        this.props.dispatch({
            type:"seen",
            obj
        })
    }
    jump(hash){
        this.props.history.push(hash)
    }
    
}
export default connect()(MainIndex)
