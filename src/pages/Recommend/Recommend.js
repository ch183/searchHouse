import React, { Component } from 'react'
import BScroll from "better-scroll"
import "../../assets/css/Recommend.scss"
import { IP } from "../../api/apis"
/* 引入状态机的连接桥梁 */
import { connect } from "react-redux"

class Recommend extends Component {
    componentDidMount(){
        /* better-scroll */
        let scroll = new BScroll(document.getElementById("Recommend"), {
            click: true,
        })
    }
    render() {
        return (
            <div id="Recommend">
                <ul className="content">
                    <h2>猜你喜欢</h2>
                    <div className="guessLoveMain">
                        {this.props.list.map((obj, index) => {
                            return <div className="single" key={obj.id}>
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
                    <div className="space"></div>
                </ul>
            </div>
        )
    }
}
export default connect((state) => {
    return {
        list: state
    }
})(Recommend)