import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from 'react';
import 'antd/dist/antd.css';
import './complete.css';
import {  Menu, Row, Col, Popover, Card, Button, Tabs, Space } from 'antd';
import { UserOutlined, MailOutlined, EditOutlined, PhoneOutlined, SearchOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio, DatePicker } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';

const { Option } = Select;

const styleSider = { background: '#ffffff', padding: '20px 30px' }

const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

export default function Complete(){
    return(
        <Layout>
            <Header className="header">
                <Row>
                    <Col span={8}>
                         <Menu mode="inline" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><NavLink to="/listuser" />Lịch test</Menu.Item>
                            <Menu.Item key="2"><NavLink to="/question" />Bộ câu hỏi</Menu.Item>
                            <Menu.Item key="3"><NavLink to="/complete" />Đã hoàn thành</Menu.Item>
                            <Menu.Item key="4"><NavLink to="/document" />Tài liệu</Menu.Item>
                        </Menu>
                    </Col>

                    <Col span={2} offset={14}>
                        <Menu mode="inline" theme="dark" mode="horizontal">
                            <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title="Tài khoản">
                                <Menu.Item key="account" >Quản lý tài khoản</Menu.Item>
                                <Menu.Item key="logout"><NavLink to="/" />Đăng xuất</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                     </Row>
            </Header>
            <Layout>
                <Sider width={500} theme="light" className="site-layout-background" style={styleSider}>
                    <Form.Item name="Name" style={{ width: '80%' }}><p>Tên</p><Input placeholder="Nhập tên" prefix={<UserOutlined />} /></Form.Item>
                    <Form.Item name="Room" style={{ width: '80%' }}><p>Phòng ban</p>
                        <Select placeholder="Lựa chọn" onChange={handleChange}>
                            <Option value="1">Java</Option>
                            <Option value="2">Python</Option>
                            <Option value="3">Golang</Option>
                            <Option value="4">JavaScript</Option>
                            <Option value="5">NodeJS</Option>
                            <Option value="6">MySQL</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="Position"><p>Vị trí</p>
                        <Select mode="tags" style={{ width: '80%' }} placeholder="Tags Mode" onChange={handleChange}>
                            <Option value="1">Fresher</Option>
                            <Option value="2">Junior</Option>
                            <Option value="3">Senior</Option>
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
                        <Col span={12} offset={6}>
                            <Space size={[32, 16]}>
                                <Button style={{ width: '120%' }} type="primary" htmlType="submit" shape="round" icon={<SearchOutlined />}>Tìm</Button>
                                <Button style={{ width: '120%' }} htmlType="submit" shape="round" icon={<PlusOutlined />}>Thêm</Button>
                            </Space>
                        </Col>
                    </Row>
                </Sider>

                <Content>
                    <Card>
                        
                    </Card>
                </Content>
            </Layout>
        </Layout>
    );
}