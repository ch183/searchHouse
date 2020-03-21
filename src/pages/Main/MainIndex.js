import React, { Component } from 'react'
import '../../assets/css/MainIndex.scss'
import { Checkbox, List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { guessLove } from '../../api/apis'
export default class MainIndex extends Component {
    state = {
        nav: [{ text: "新房", img: require("../../assets/imgs/House.png") }, {text: "新房", img: require("../../assets/imgs/House.png") }, { text: "新房", img: require("../../assets/imgs/House.png") }, { text: "新房", img: require("../../assets/imgs/House.png") },],
        wiki: [{id:1,text: "我要贷款", img: require('../../assets/imgs/money.png') }, { id:2,text: "我要贷款", img: require('../../assets/imgs/money.png') }, { text: "我要贷款", img: require('../../assets/imgs/money.png') }, { id:3,text: "我要贷款", img: require('../../assets/imgs/money.png') },],
        guessLove: [],
    }
    componentDidMount() {
        guessLove().then(data => {
            this.setState({
                guessLove: data.data
            })
        })
    }
    render() {
        return (
            <div id="MainIndex">
                {/* 头部搜索栏 */}
                <div className="MainTop">
                    <div className="myCity">成都市</div>
                    <InputItem placeholder="请输入手机号" clear style={{ height: "30px" }}>
                        <div>
                            <img src={require("../../assets/imgs/search.png")} alt="icon" />
                        </div>
                    </InputItem>
                    <div className="checkCity">
                        <img src={require("../../assets/imgs/map.png")} alt="icon" />
                    </div>
                </div>
                {/* 轮播图 */}

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
                        {this.state.guessLove.map((obj,index) => {
                            return <div className="single" key={obj.id} onClick={this.getClick.bind(this,index)}>
                                <div className="left">
                                    {<img src={require('../../assets' + obj.imgs)} alt="预览" />}
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
            </div>
        )
    }
    getClick(index){
        console.log(this.state.guessLove[index])
    }
}
