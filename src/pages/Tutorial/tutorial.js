import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './tutorial.css';
import { Layout, Card, Row, Col, Typography, Button, Menu, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { Content, Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Title } = Typography;
const styleHeader = { background: '#ffffff' };
const styleCard1 = { minHeight: 1000 }
const styleCard2 = { minHeight: 500 }


export default function Tutorial() {
    const [test, setTest] = useState([]);

    const onFinish = () => {
        // const getItem = JSON.parse(localStorage.getItem("test"))
        // setTest(getItem)

        if (test.subject == "1") {
            return window.location.href = "/english"
        } else if (test.subject == "2") {
            return window.location.href = "/code"
        } else {
            return window.location.href = "/knowledger"
        }

    };

    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("test"))
        setTest(getItem)
    }, []);

    return (
        <Layout>
            <Header style={styleHeader}>
                <Row>
                    <Col span={3} offset={22}>
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
                    <Form >
                        <Card style={styleCard1}>
                            <Col span={12} offset={11}>
                                <Title>Hướng dẫn</Title>
                            </Col>
                            <Card style={styleCard2}></Card>
                            <Col span={12} offset={12}>
                                <p></p>
                                <Button
                                    style={{ width: '10%' }}
                                    type="primary"
                                    htmlType="submit"
                                    onClick={onFinish}
                                    shape="round" >Bắt đầu</Button>
                            </Col>
                        </Card>
                    </Form>
                </Content>
            </Layout>
        </Layout>
    );
}