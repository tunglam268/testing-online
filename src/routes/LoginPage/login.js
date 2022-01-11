import { Form, Input,Card,Row,Col, Button, Checkbox , Menu } from 'antd';
import { UserOutlined ,  LockOutlined} from '@ant-design/icons';
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinish = () => {
    window.location.href = '/listuser'
  };

  return (
    <Row style={{padding: '100px 20px'}}>
      <Col span={12} offset={10}>
        <Card style={{ width: 400 }}>
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
              <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input style={{padding: 10, margin: 0, minHeight: 10, width:350,}} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input style={{padding: 10,margin: 0,minHeight: 10,width:350,}} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">Forgot password</a>
                </Form.Item>

              </Form.Item>
              <Form.Item>
          
                <Button style={{
                  padding: 0,
                  minHeight: 0,
                  width:350,
                  }} type="primary" htmlType="submit" className="login-form-button"><Link to ="/listuser"/>LOGIN</Button>
          
              </Form.Item>
            </Form>         
          </Menu>
        </Card>
      </Col>
    </Row>
  );
};

export default Login