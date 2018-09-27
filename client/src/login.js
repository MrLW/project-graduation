import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react'
import { Card } from 'antd';
import ReactDOM from 'react-dom'
import { Link, hashHistory } from 'react-router-3';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        fetch(`/user/login?name=${values.userName}&pwd=${values.password}`, { method: 'get' }).then((resp) => resp.json()).then((data) => {
          let status = data.status;
          if (status === 'success') {
            alert('登陆成功');
            hashHistory.push('/index');
          }
          else alert('登陆失败');
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )} */}
          {/* <a className="login-form-forgot" href="">Forgot password</a> */}
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: 350 }}>
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </FormItem>
      </Form>
    );
  }
}

const WrapNormalLoginForm = Form.create()(NormalLoginForm);

class Login extends Component {
  render() {
    return (
      <div>
        <Card
          title="毕业设计选题系统"
          extra={<Link to={`/regist`}>注册</Link>}
          style={{ width: 400, marginLeft: 550, marginTop: 100 }}
        >

          <WrapNormalLoginForm />
        </Card>
      </div>
    );
  }
}

export default Login;