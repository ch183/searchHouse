import React, { Component } from 'react'
import { getCode, reg } from "../../api/apis"
/* 引入样式 */
import "../../assets/css/Reg.scss"
/* 引入antd样式 */
import { Checkbox, List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
    state = {
        username: "",
        pwd: "",
        code: "",
        checkCode: "获取验证码",
    }
    render() {
        return (
            <div id="Reg">
                <WingBlank size="md">
                    <List>
                        <InputItem placeholder="请输入手机" clear value={this.state.username} onChange={this.changeUsername.bind(this)}>
                        </InputItem>
                        <InputItem placeholder="请输入密码" clear value={this.state.pwd} type="password" onChange={this.changePwd.bind(this)}>
                        </InputItem>
                        <InputItem placeholder="请输入验证码" clear value={this.state.code} maxLength="6" type="password" onChange={this.changeCode.bind(this)} extra={this.state.checkCode} onExtraClick={this.getCheckCode.bind(this)}>
                        </InputItem>
                    </List>
                    <AgreeItem data-seed="logId">
                        我已同意
                        <a href="#">《用户服务协议》及《隐私权政策》</a>
                    </AgreeItem>
                    <WhiteSpace size="md" />
                    <Button type="primary" style={{ backgroundColor: "#00BC5B" }} onClick={this.doReg.bind(this)}>注册</Button>
                    <WhiteSpace size="md" />
                    <a href="#/Login" className="hadUser">已有账号</a>
                </WingBlank>
            </div>
        )
    }
    reg() {
        this.props.history.push('/Login')
    }
    /* 双向绑定数据 */
    changeUsername(val) {
        this.setState({
            username: val,
        })
    }
    changePwd(val) {
        this.setState({
            pwd: val,
        })
    }
    changeCode(val) {
        this.setState({
            code: val,
        })
    }
    /* 获取验证码 */
    getCheckCode() {
        getCode().then(data => {
            this.setState({ username: this.state.username, pwd: this.state.pwd, code: this.state.code, checkCode: data.data });
        })
    }
    /* 注册 */
    doReg() {
        console.log(this.state.code ==this.state.checkCode)
        if (this.state.code == this.state.checkCode) {
            reg(this.state.username, this.state.pwd).then(data => {
                if (data.data == "ok") {
                    this.props.history.push("/Login")
                } else {
                    alert("请确认用户名及密码是否符合格式,验证码是否")
                    console.log(data)
                    return false
                }
            })
        }else{
            alert("请确认用户名及密码是否符合格式,验证码是否正确!")
            return false
        }

    }
}
