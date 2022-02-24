import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from 'react';
import 'antd/dist/antd.css';
import './complete.css';
import { Menu, Row, Col, Card, Button, Space, Typography } from 'antd';
import { UserOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import CandidateResult from "./candidateresult";
import axios from "axios";

const { Option } = Select;
const { Text } = Typography;
const styleContent = { background: '#ffffff', padding: '25px 20px', minHeight: 1000, height: '100vh', overflow: 'auto' };
const styleHeader = { background: '#ffffff' }
const styleSider = { background: '#ffffff', padding: '20px 10px' }





export default function Complete() {

    const handleSearch = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://localhost:8080/staff/getallres',
            headers: {

            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <Layout>
            <Header style={styleHeader} className="header">
                <Row>
                    <Col span={8}>
                        <Menu style={styleHeader} mode="horizontal" defaultSelectedKeys={['3']}>
                            <Menu.Item key="1"><NavLink to="/listuser" /><Text strong>Lịch test</Text></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/question" /><Text strong>Bộ câu hỏi</Text></Menu.Item>
                            <Menu.Item key="3"><NavLink to="/complete" /><Text strong>Đã hoàn thành</Text></Menu.Item>
                            <Menu.Item key="4"><NavLink to="/document" /><Text strong>Tài liệu</Text></Menu.Item>
                        </Menu>
                    </Col>

                    <Col span={2} offset={14}>
                        <Menu style={styleHeader} mode="horizontal">
                            <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title={<Text strong>Tài khoản</Text>}>
                                <Menu.Item key="account" ><NavLink to="/manageaccount" />Quản lý tài khoản</Menu.Item>
                                <Menu.Item key="logout"><NavLink to="/" />Đăng xuất</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>

            <Layout>
                <Card style={{ width: 470 }}>
                    <Sider width={500} theme="light" className="site-layout-background" style={styleSider}>
                        <Form.Item name="Name" style={{ width: '80%' }}><p>Tên</p><Input placeholder="Nhập tên" prefix={<UserOutlined />} /></Form.Item>
                        <Form.Item name="Room" style={{ width: '80%' }}><p>Phòng ban</p>
                            <Select placeholder="Lựa chọn" >
                                <Option value="1">Java</Option>
                                <Option value="2">Python</Option>
                                <Option value="3">Golang</Option>
                                <Option value="4">JavaScript</Option>
                                <Option value="5">NodeJS</Option>
                                <Option value="6">MySQL</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="Position"><p>Vị trí</p>
                            <Select mode="tags" style={{ width: '80%' }} placeholder="Vị trí" >
                                <Option value="Fresher">Fresher</Option>
                                <Option value="Junior">Junior</Option>
                                <Option value="Senior">Senior</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Radio.Group buttonStyle="solid">
                                <Space>
                                    <Radio.Button value="Fresher">Fresher</Radio.Button>
                                    <Radio.Button value="Junior">Junior</Radio.Button>
                                    <Radio.Button value="Senior">Senior</Radio.Button>
                                </Space>
                            </Radio.Group>
                        </Form.Item>

                        <Row>
                            <Col span={12} offset={4}>
                                <Space size={[30, 16]}>
                                    <Button style={{ width: '120%' }} onClick={handleSearch} type="primary" htmlType="submit" shape="round" icon={<SearchOutlined />}>Tìm</Button>
                                    <Button style={{ width: '120%' }} htmlType="submit" shape="round" icon={<CloseOutlined />}>Xóa Lọc</Button>
                                </Space>
                            </Col>
                        </Row>
                    </Sider>
                </Card>

                <Card style={{ width: 2000 }}>
                    <Content style={styleContent}>
                        <Card style={{ width: '100%', minHeight: 1000 }}>
                            <Space size={[16, 16]} wrap>

                                <CandidateResult />
                            </Space>
                        </Card>
                    </Content>
                </Card>
            </Layout>
        </Layout>
    );
}