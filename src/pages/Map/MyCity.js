import React, { Component } from 'react'
import "../../assets/css/MyCity.scss"
export default class MyCity extends Component {
    state = {
        myCity: "正在定位",
    }
    componentDidMount() {
        this.showCityInfo()
    }
    render() {
        return (
            <div id="MyCity" style={{width:"100%",height:"100%"}}>
            <div className="backHome" ><span onClick={this.back.bind(this)}>&lt; 返回</span></div>            
                <p style={{position:"relative",top:0,zIndex:1}}>当前定位城市:{this.state.myCity}</p>
                <div id="city" style={{width:"100%",height:"100%"}}></div>
            </div>
        )
    }
    /* 返回首页 */
    back(){
        this.props.history.push("/Main")
    }
    //获取用户所在城市信息
    showCityInfo() {
        var that = this
        var map = new window.AMap.Map("city", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    that.setState({
                        myCity: cityinfo
                    })
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                that.setState({
                    myCity: result.info
                })
                 
            }
        });
    }
}
