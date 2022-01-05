import React from 'react';
import 'antd/dist/antd.css';
import './header.css';
import { Layout, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';

const { Header , } = Layout;


export default function HeaderTitle() {

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
          <Menu.Item key="logout"><Link to ="/"/>Đăng xuất</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  </Layout>
  
  );
}