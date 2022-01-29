import React from 'react';
import 'antd/dist/antd.css';
import './result.css';
import { Layout, Card, Row, Col, Typography, Progress, Menu, } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Content, Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Text } = Typography;
const styleHeader = { background: '#ffffff' };
const styleCard1 = { minHeight: 700 , padding: '200px 0 0 400px' }
// const styleCard2 = { width: 1500, minHeight: 400 , padding: '70px 0 50px 50px' }
// const styleCard3 = { width: 500, minHeight: 400 }


export default function Result() {
    return (
        <Layout>
            <Header style={styleHeader}>
                <Row>
                    <Col span={2} offset={23}>
                        <Menu style={styleHeader} mode="horizontal">
                            <SubMenu icon={<UserOutlined />} title="Tài khoản">
                                <Menu.Item key="logout"><NavLink to="/" />Đăng xuất</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Layout>
                <Content>
                    <Card style={styleCard1}>
                        <Row justify="center">
                            <Col span={12}>  
                                                     
                                    <h1>Bạn đã hoàn thành bài test</h1>
                                    <Text strong>Tên :</Text><Text> Nguyễn Văn A</Text><br />
                                    <Text strong>Vị trí :</Text><Text> Java Developer</Text><br />
                                    <Text strong>Thời gian hoàn thành :</Text><Text> 00:00:00</Text><br />
                                    <Text>Đây là thống kê bài làm của bạn</Text><br />
                                 
                            </Col>
                            <p></p>
                            <Col span={12} pull={7}>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Text strong>Tiếng Anh</Text>
                                <Progress percent={80} />
                                <Text strong>Kiến thức chung</Text>
                                <Progress percent={90} />
                                <Text strong>Tiếng Anh</Text>
                                <Progress percent={40} />
                            </Col>
                               
                        </Row>
                        
                    </Card>
                </Content>
            </Layout>
        </Layout>
    );
}