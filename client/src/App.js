import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import Login from './login';
import Regist from './regist'
import Main from './main'

import { Route,Router, hashHistory } from 'react-router-3'
// class App extends Component {
//   render() {
//     return (
//       <Card
//         title="毕业设计选题系统"
//         extra={<a href="regist">注册</a>}
//         style={{ width: 400,marginLeft:550,marginTop:100 }}
//       >
//         <Login/>
//       </Card>
//     );
//   }
// }

// export default App;


class MainRoute extends Component {
  render() {
    return (
      <Router history={hashHistory}>                
          <Route path="/" component={Login} />
          <Route path='/login' component={Login} /> 
           <Route path='/regist' component={Regist} />    
           <Route path='/index' component={Main} />       
      </Router>
    )
  }
}
export default MainRoute;