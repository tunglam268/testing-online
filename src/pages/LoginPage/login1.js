import { Form, Input, Card, Row, Col, Button, Checkbox, Menu } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import React from 'react';


export default class Login1 extends React.Component {

  // onFinish = () => {
  //   window.location.href = '/listuser'
  // };

  onHome = () => {
    window.location.href = '/'
  }

  construsctor(props) {

    this.state = {
      "username": "",
      "password": "",
    }
  }

  setParams = (e) => {
    this.setState({ [e.target.username]: e.target.value })
  }

  login = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'post',
      url: 'localhost:8080/staff/checklogin',
      headers: {

      },
      data: {
        username: this.state.username,
        password: this.state.password
      }
    };


    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.ok) {
          window.location.href = '/listuser'
          return response.JSON()
        }
        throw Error(response.status)
      })

      // .then(result => {
      //   console.log(result)
      //   // localStorage.setItem("accessToken" , result.accessToken)
      //   alert("Thanh cong")
      //   window.location.href = '/listuser'
      // })


      .catch(function (error) {
        console.log(error);
        alert("Username , Password are wrong")
      });
  }

  render() {

    return (
      <Row style={{ padding: '100px 20px' }}>
        <Col span={12} offset={10}>
          <Card style={{ width: 400 }}>
            <h2>Đăng Nhập</h2>
            <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
              <Form name="normal_login" className="login-form" initialValues={{ remember: true }} >

                <Form.Item name="username"

                  rules={[{ required: true, message: 'Chưa nhập tài khoản đăng nhập !' }]}>

                  <Input style={{ padding: 10, margin: 0, minHeight: 10, width: 350, }}
                    onChange={this.setParams}
                    prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
                </Form.Item>

                <Form.Item name="password"

                  rules={[{ required: true, message: 'Chưa nhập mật khẩu !' }]}>

                  <Input style={{ padding: 10, margin: 0, minHeight: 10, width: 350, }}
                    onChange={this.setParams}
                    prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Nhớ tài khoản</Checkbox>
                    <a className="login-form-forgot" href="">Quên mật khẩu ?</a>
                  </Form.Item>

                </Form.Item>
                <Form.Item>

                  <Button style={{
                    padding: 0,
                    minHeight: 0,
                    width: 350,
                  }} type="primary" htmlType="submit" className="login-form-button" onClick={this.login}>Đăng nhập</Button>

                  <p></p>


                </Form.Item>
              </Form>
              <Button style={{
                padding: 0,
                minHeight: 0,
                width: 350,
              }} htmlType="submit" onClick={this.onHome}>Quay Lại</Button>
            </Menu>


          </Card>
        </Col>
      </Row >

    )
  }
}

