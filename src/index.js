import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/reset.css'
/* 引入store仓库 */
import store from "./store"
/* 引入桥梁模块 */
import {Provider} from "react-redux"
/* 引入antd全局样式 */
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
