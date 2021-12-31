import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function App() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider , Footer } = Layout;
  return (
    <div>
  <Layout>  
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>      
      <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
      <Menu.Item key="3">Log Out</Menu.Item>
    </Menu>
  </Header>
  <Content style={{ padding: '0 50px' }}>
    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Chức năng">
            <Menu.Item key="1">Thêm/Cập nhật ứng viên</Menu.Item>
            <Menu.Item key="2">Xóa ứng viên</Menu.Item>
            <Menu.Item key="3">Tìm ứng viên</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Test">
            <Menu.Item key="5">Thêm/Cập nhật bài test</Menu.Item>
            <Menu.Item key="6">Xóa bài test</Menu.Item>
            <Menu.Item key="7">Tìm bài test</Menu.Item>
            <Menu.Item key="8">Thêm/Cập nhật câu hỏi</Menu.Item>
            <Menu.Item key="9">Xóa câu hỏi</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
    </Layout>
  </Content>
  <Footer style={{ textAlign: 'center' }}>Testing Online</Footer>
</Layout>
    </div>
  );
}