import { Form, Input, Card, Row, Col, Button, Checkbox, Menu } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'


const Login = () => {

  const onFinish = () => {
    window.location.href = '/listuser'
  };

  const onHome = () => {
    window.location.href = '/'
  }

  // const construsctor = (props) => {
  //   super(props)
  //   this.state = {
  //     "username": "",
  //     "password": "",
  //   }
  // }

  // setParams = (event) => {
  //   this.setParamsetState({[event.targetarget.n]: event.target.value})
  // }

  return (
    <Row style={{ padding: '100px 20px' }}>
      <Col span={12} offset={10}>
        <Card style={{ width: 400 }}>
          <h2>Đăng Nhập</h2>
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>

              <Form.Item name="username"
                
                rules={[{ required: false, message: 'Chưa nhập tài khoản đăng nhập !' }]}>

                <Input style={{ padding: 10, margin: 0, minHeight: 10, width: 350, }}
                  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
              </Form.Item>

              <Form.Item name="password"
                
                rules={[{ required: false, message: 'Chưa nhập mật khẩu !' }]}>

                <Input style={{ padding: 10, margin: 0, minHeight: 10, width: 350, }}
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
                }} type="primary" htmlType="submit" className="login-form-button">Đăng nhập</Button>

                <p></p>


              </Form.Item>
            </Form>
            <Button style={{
              padding: 0,
              minHeight: 0,
              width: 350,
            }} htmlType="submit" onClick={onHome}>Quay Lại</Button>
          </Menu>


        </Card>
      </Col>
    </Row>
  );
};

export default Login