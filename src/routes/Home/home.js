import React from 'react';
import 'antd/dist/antd.css';
import './home.css';
import { Layout, Menu} from 'antd';

import { Link ,Outlet} from 'react-router-dom';

const { Header , Content ,Sider } = Layout;


export default function Home() {

  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to ="/login"/>Login</Menu.Item>
        
      </Menu>
      <Outlet />
    </Header>
    <Layout>

      
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          
        </Content>
          
      </Layout>
      
    </Layout>
    
  </Layout>
  
  );
}