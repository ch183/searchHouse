import React, { Component } from 'react';
import {HashRouter,Switch,Route} from "react-router-dom"
import './assets/css/App.scss'
import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import Reg from "./pages/Login/Reg"

export default class App extends Component {
    render() {
        return (
            <div id="App">
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/Login" component={Login}></Route>
                        <Route path="/Reg" component={Reg}></Route>
                        <Route component={Main}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
