import React, { Component } from 'react'
import { login } from "../../api/apis"
/* 引入样式表 */
import '../../assets/css/Login.scss'
/* 引入antd样式 */
import { List, InputItem, Button, WingBlank } from 'antd-mobile';

export default class Login extends Component {
    state={
        username:"",
        pwd:''
    }
    render() {
        return (
            <div id="Login">
                <div className="logo">
                    <img src={require("../../assets/imgs/logo.png")} />
                </div>

                <WingBlank size="md">
                    <List>
                        <InputItem placeholder="请输入手机号" clear value={this.state.username} onChange={this.changeUsername.bind(this)}>
                            <div style={{ width: "50px" }}>
                                <img src={require("../../assets/imgs/userLogin.png")} alt="icon" style={{ height: '22px', width: '22px', color: "#00BC5B" }} />
                            </div>
                        </InputItem>
                        <InputItem placeholder="请输入密码" clear type="password" value={this.state.pwd} onChange={this.changePwd.bind(this)}>
                            <div style={{ width: "50px" }}>
                                <img src={require("../../assets/imgs/lock.png")} alt="icon" style={{ height: '22px', width: '22px', color: "#00BC5B" }} />
                            </div>
                        </InputItem>
                    </List>
                    <Button type="primary" onClick={this.doLogin.bind(this)} style={{ backgroundColor: "#00BC5B" }}>登录</Button>
                    <div className="loginBottom">
                        <a href="#/Reg">手机快速注册</a>
                        <a >忘记密码</a>
                    </div>
                </WingBlank>



            </div>
        )
    }
    changeUsername(e) {
        this.setState({
            username: e,
        })
    }
    changePwd(e) {
        this.setState({
            pwd: e,
        })
    }
    doLogin(){
        login(this.state.username,this.state.pwd).then(
            data=>{
                console.log(data)
                if(data.data=="ok"){
                    this.props.history.push("/Main")
                }else{
                    alert("用户名或密码错误")
                }
            }
        )
    }
}
