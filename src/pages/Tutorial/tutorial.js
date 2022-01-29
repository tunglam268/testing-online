import React from 'react';
import 'antd/dist/antd.css';
import './tutorial.css';
import { Layout,Card,Row,Col,Typography,Button, Menu, Form, Space} from 'antd';
import { ArrowRightOutlined,UserOutlined} from '@ant-design/icons';
import { NavLink ,Outlet} from 'react-router-dom';
import { Content, Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Text, Title } = Typography;
const styleHeader = { background: '#ffffff' };
const styleCard1 = { minHeight: 1000 }
const styleCard2 = { minHeight: 500 }

function onFinish (){
    window.location.href = '/test'
};

export default function Tutorial() {
    return (
        <Layout>
            <Header style={styleHeader}>
                <Row>
                    <Col span={2} offset={23}>
                        <Menu style={styleHeader} mode="horizontal">
                            <SubMenu  icon={<UserOutlined />} title="Tài khoản">
                                <Menu.Item key="logout"><NavLink to="/" />Đăng xuất</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>

            <Layout>
                <Content>
                    <Form onFinish={onFinish}>
                        <Card style={styleCard1}>
                            <Col span={12} offset={11}>
                                <Title>Hướng dẫn</Title>
                            </Col>
                        <Card style={styleCard2}></Card>
                            <Col span={12} offset={12}>
                                <p></p>
                                <Button style={{width: '10%'}} type="primary" htmlType="submit" shape="round" >Bắt đầu</Button>
                            </Col>
                        </Card>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
}