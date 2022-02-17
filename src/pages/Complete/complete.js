import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './complete.css';
import { Menu, Row, Col, Progress, Modal, Card, Button, Checkbox, Space, Typography } from 'antd';
import { UserOutlined, SendOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import CandidateResult from "./candidateresult";

const { Option } = Select;
const { Text } = Typography;
const styleContent = { background: '#ffffff', padding: '25px 20px', minHeight: 1000, height: '100vh', overflow: 'auto' };
const styleHeader = { background: '#ffffff' }
const styleSider = { background: '#ffffff', padding: '20px 30px' }
const answerParticipant = (
    <Card>
        <Row justify="start">
            <Col span={3}>
                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu 1</Button>
            </Col>

            <Col span={12}>
                <Text>Khai báo 1 biến age với định dạng int có giá trị bằng 10:</Text>
                <p></p>
                <Radio.Group defaultValue={1}>
                    <Space direction="vertical">
                        <Radio value={1}><Text strong>A.</Text>var age int = 10</Radio>
                        <Radio value={2}><Text strong>B.</Text>age = 10 = int</Radio>
                        <Radio value={3}><Text strong>C.</Text>int age = 10</Radio>
                        <Radio value={4}><Text strong>D.</Text>var int age = 10</Radio>
                    </Space>
                </Radio.Group>
            </Col>
        </Row>
        <p></p>
        <Row justify="start">
            <Col span={3}>
                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu 2</Button>
            </Col>

            <Col span={12}>
                <Text>Câu lệnh sau in ra gì<br></br>
                    i:= 10<br></br>
                    j: = 20.8<br></br>
                    sum := i +int(j)<br></br>
                </Text>
                <p></p>
                <Radio.Group defaultValue={1}>
                    <Space direction="vertical">
                        <Radio value={1}><Text strong>A.</Text>sum = 30.8</Radio>
                        <Radio value={2}><Text strong>B.</Text>sum = 30</Radio>
                        <Radio value={3}><Text strong>C.</Text>erro</Radio>
                        <Radio value={4}><Text strong>D.</Text>20.8</Radio>
                    </Space>
                </Radio.Group>
            </Col>
        </Row>
    </Card>
)



const handleChange = (value) => {
    console.log(`selected ${value}`);
}

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export default function Complete() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                        <Form.Item name="Name" style={{ width: '90%' }}><p>Tên</p><Input placeholder="Nhập tên" prefix={<UserOutlined />} /></Form.Item>
                        <Form.Item name="Room" style={{ width: '90%' }}><p>Phòng ban</p>
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
                            <Select mode="tags" style={{ width: '90%' }} placeholder="Tags Mode" onChange={handleChange}>
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
                            <Col span={12} offset={4}>
                                <Space size={[30, 16]}>
                                    <Button style={{ width: '120%' }} type="primary" htmlType="submit" shape="round" icon={<SearchOutlined />}>Tìm</Button>
                                    <Button style={{ width: '120%' }} htmlType="submit" shape="round" icon={<PlusOutlined />}>Thêm</Button>
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