import React, { Component } from 'react'
import cityList from '../../json/city.json'
import BScroll from 'better-scroll'
import "../../assets/css/CityList.scss"
export default class CityList extends Component {
    componentDidMount() {
        let scroll = new BScroll(document.querySelector(".left"),{
            click:true,
        })
    }
    render() {
        return (
            <div id="CityList">
            <div className="backHome" ><span onClick={this.back.bind(this)}>&lt; 返回</span></div>
                <div className="left">
                    <ul className="content">
                        <div className="leftTop">
                            <h2>热门城市</h2>
                            <div className="hotCity">
                                {cityList.hot.map(obj => <div key={obj}>{obj}</div>)}
                            </div>
                        </div>
                    <div className="leftBottom">
                        {cityList.list.map(obj => {
                            return <div className="single"><h2 id={obj.title} key={obj.title}>{obj.title}</h2>
                                <div className="main">{obj.city.map(obj1 => <div>{obj1}</div>)}</div>
                            </div>
                        })}
                    </div>
                    <div className="space"></div>
                    </ul>
                </div>
                <div className="right">
                    {cityList.list.map((obj,index) => <p onClick={this.clickScroll.bind(this)}>{obj.title}</p>)}
                </div>
            </div>
        )
    }
    back(){
        this.props.history.push("/Main")
    }
    clickScroll(e){
        let scroll = new BScroll(document.querySelector(".left"),{
            click:true,
        }).scrollToElement(document.getElementById(e.target.innerHTML),1000)
    }
}
