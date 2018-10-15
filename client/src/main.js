/**
 *  登陆之后的主页面
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon ,Avatar,Col,Row,Table} from 'antd';
import { Link, Route, hashHistory, Router } from 'react-router-3';
import Students from './components/admin/students.js'
import Teachers from './components/admin/teachers'
import UserCenter from './components/user/userCenter'

const { Header, Content, Footer, Sider } = Layout;
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.query.user
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <div class="antd-pro-components-sider-menu-index-logo">
              <Menu.Item key="1">
                <h2 style={{color:'white'}}>毕设选题系统</h2>
                <Link to="/userCenter"></Link>
              </Menu.Item>

              </div>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">学生列表</span>
                <Link to="/students"></Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">老师列表</span>
                <Link to="/teachers"></Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} >
              <div style={{marginRight:10}}>
             
                {/* <span style={{textAlign:"center",marginRight:100}}> */}
                <Row type="flex" justify="end">
                  <Col span={7}></Col>
                  <Col span={7}></Col>
                  <Col span={7}></Col>
                  <Col span={1}>
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" size="large"/>
                    {this.state.user}
                  </Col>
                </Row>
                    
                {/* </span> */}
              </div>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                <Router history={hashHistory}>
                  <Route path='/students' component={Students} />
                  <Route path='/teachers' component={Teachers} />
                  <Route path='/userCenter' component={UserCenter} />
                </Router>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              安徽师范大学皖江学院-计算机科学与技术
            </Footer>
          </Layout>
          </Layout>
      </div>
    );
  }
}

export default Main;