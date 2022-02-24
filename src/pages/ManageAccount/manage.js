import React from 'react';
import 'antd/dist/antd.css';
import './manage.css';
import { Layout, Menu, Col, Row, Typography, Card, Button, Space, Avatar } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const styleHeader = { background: '#ffffff' }

export default function ManageAccounnt() {

    return (
        <Layout>
            <Header style={styleHeader} >
                <Row>
                    <Col span={8}>
                        <Menu style={styleHeader} mode="horizontal" >
                            <Menu.Item key="1"><NavLink to="/listuser" /><Text strong>Lịch test</Text></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/question" /><Text strong>Bộ câu hỏi</Text></Menu.Item>
                            {/* <Menu.Item key="3"><NavLink to="/complete" /><Text strong>Đã hoàn thành</Text></Menu.Item> */}
                            <Menu.Item key="4"><NavLink to="/document" /><Text strong>Tài liệu</Text></Menu.Item>
                        </Menu>
                    </Col>

                    <Col span={2} offset={14}>
                        <Menu defaultSelectedKeys={'manage'} style={styleHeader} mode="horizontal">
                            <SubMenu icon={<UserOutlined />} title={<Text strong>Tài khoản</Text>}>
                                <Menu.Item key="manage" ><NavLink to="/manageaccount" />Quản lý tài khoản</Menu.Item>
                                <Menu.Item key="logout"><NavLink to="/" />Đăng xuất</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>

            <Content >
                <Row>
                    <Col span={12}>
                        <Card style={{ minHeight: 1000 }}>
                            <Title level={2}>Quản lý tài khoản</Title>
                            <Row gutter={[16, 16]}>
                                <Col span={12} offset={10}>
                                    <Avatar size={120} icon={<UserOutlined />} />
                                    <p></p>
                                    <Title level={4}>Hoang Yen <EditOutlined /></Title>
                                    <Row>
                                        <Col span={6} pull={6}>
                                            <Text>Mật khẩu: </Text><br></br>
                                            <Text>Gmail: </Text><br></br>
                                            <Text>Phòng ban: </Text>
                                        </Col>

                                        <Col span={12} pull={5} >
                                            <Text underline>Đổi mật khẩu</Text><br></br>
                                            <Text >hoangyen@gmail.com <EditOutlined /></Text><br></br>
                                            <Text>Phòng công nghệ blockchain</Text>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col span={12} offset={10}>
                                    <Button shape='round' style={{ width: 100 }}>Lưu</Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card>
                            <Col span={12} offset={16}>
                                <Title level={2}>Hoạt động quản lý</Title>
                            </Col>
                            <Card style={{ width: 880, minHeight: 1000 }}>
                                <Title level={4}>Nguyễn Văn A</Title>
                                <Text strong>Code: </Text><Text>BLC001</Text>
                                <p></p>
                                <Card>
                                    <Row>
                                        <Col span={12}>
                                            <Avatar size={45} icon={<UserOutlined />}></Avatar>
                                        </Col>

                                        <Col span={12} pull={10}>
                                            <Text strong>Tùng Lâm</Text>
                                            <br></br>
                                            <Text>2h</Text>
                                        </Col>
                                    </Row>
                                    <p></p>
                                    <Text type="danger">Muốn chỉnh sửa cho ứng viên này?</Text><p></p>
                                    <Space>
                                        <Button style={{ width: '100%', background: '#fafafa' }} shape="round" >Bỏ qua</Button>
                                        <Button style={{ width: '100%' }} type="primary" shape="round" >Chấp nhận</Button>
                                    </Space>
                                    <p></p>

                                    <Row>
                                        <Col span={12}>
                                            <Avatar size={45} icon={<UserOutlined />}></Avatar>
                                        </Col>

                                        <Col span={12} pull={10}>
                                            <Text strong>Tùng Lâm</Text>
                                            <br></br>
                                            <Text>2h</Text>
                                        </Col>
                                    </Row>
                                    <p></p>
                                    <Text type="danger">Muốn chỉnh sửa cho ứng viên này?</Text><p></p>
                                    <Space>
                                        <Button style={{ width: '100%', background: '#fafafa' }} shape="round" >Bỏ qua</Button>
                                        <Button style={{ width: '100%' }} type="primary" shape="round" >Chấp nhận</Button>
                                    </Space>
                                </Card>


                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>

    );
}

