
/**
 *  主要设置路由
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Login from './components/login/login.js';
import Regist from './components/regist/regist.js'
import Main from './main'
import { Route, Router, hashHistory } from 'react-router-3'

class App extends Component {
  
  render() {
    return (
      <div >
        <Router history={hashHistory}>
          <Route path="/" component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/regist' component={Regist} />
          <Route path='/index' component={Main} />
        </Router>
      </div>
    )
  }
}
export default App;