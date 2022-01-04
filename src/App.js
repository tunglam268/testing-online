import React from 'react';
import moment from 'moment';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Descriptions, Card ,TreeSelect, Button , Dropdown,Divider, Tabs, Space} from 'antd';
import { UserOutlined , MailOutlined , PhoneOutlined ,SearchOutlined , PlusOutlined , CloseOutlined} from '@ant-design/icons';
import { Form, Input,  Select , Radio , DatePicker} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link ,Outlet} from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const dateFormat = 'YYYY-MM-DD';
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];
const menuContact = (
  <Form.Item >
    <Form.Item name="Contact" label="Contact">
        <Form.Item>
          <Input placeholder="Gmail" prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder="Phone" prefix={<PhoneOutlined />}/>
        </Form.Item>
      </Form.Item>
  </Form.Item>
);

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


function handleChange(value) {
  console.log(`selected ${value}`);
}

function callback(key) {
  console.log(key);
}

export default function ListUser() {


  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu mode="inline" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to ="/listuser"/>Lịch test</Menu.Item>   
        <Menu.Item key="2"><Link to ="/question"/>Bộ câu hỏi</Menu.Item>
        <Menu.Item key="3">Đã hoàn thành</Menu.Item>
        <Menu.Item key="4">Tài liệu</Menu.Item>
        <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title ="Account">
          <Menu.Item key="account" >Quản lý tài khoản</Menu.Item>
          <Menu.Item key="logout"><Link to ="/login"/>Đăng xuất</Menu.Item>
        </SubMenu>
        
      </Menu>
    </Header>
    <Outlet />
  </Layout>
  
  );
}