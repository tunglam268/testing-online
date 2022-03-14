import { Form, Input, Card, Row, Col, Button, Checkbox, Menu } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import React, { useState } from 'react';


export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onBack = () => {
    window.location.href="/"
  }
  const handleLogin = () => {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'username': username,
      'password': password
    });

    axios.post('http://localhost:8080/checklogin', data)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if(response.data === "redirect:/staff/home") {
          window.location.href="/listuser"
        }
      })
      .catch(function (error) {
        console.log(error);

      });

  }

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
                  onChange={onChangeUsername} value={username}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Tên đăng nhập" />
              </Form.Item>

              <Form.Item name="password"

                rules={[{ required: true, message: 'Chưa nhập mật khẩu !' }]}>

                <Input style={{ padding: 10, margin: 0, minHeight: 10, width: 350, }}
                  onChange={onChangePassword} value={password}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password" placeholder="Nhập mật khẩu" />
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
                }} type="primary" htmlType="submit"
                  className="login-form-button"
                  onClick={handleLogin}>Đăng nhập</Button>

                <p></p>


              </Form.Item>
            </Form>
            <Button style={{
              padding: 0,
              minHeight: 0,
              width: 350,
            }} htmlType="submit" onClick={(e)=>onBack(e)}>Quay Lại</Button>
          </Menu>


        </Card>
      </Col>
    </Row >

  );
}

