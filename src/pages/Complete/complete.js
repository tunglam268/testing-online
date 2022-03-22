import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './complete.css';
import { Menu, Row, Col, Card, Button, Space, Typography, Checkbox, Progress } from 'antd';
import { UserOutlined, SearchOutlined, CloseOutlined, SendOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import CandidateResult from "./candidateresult";
import axios from "axios";

const { Option } = Select;
const styleContent = { background: '#ffffff', padding: '25px 20px', minHeight: 1000, height: '100vh', overflow: 'auto' };
const styleHeader = { background: '#ffffff' }
const styleSider = { background: '#ffffff', padding: '20px 10px' }
const { Text, Title } = Typography;




export default function Complete() {
    const [candidate, setCandidate] = useState([]);
    const [markEnglish, setMarkE] = useState()
    const [markCode, setMarkC] = useState()
    const [markKnow, setMarkK] = useState()

    const onCode = (e) => {
        setMarkC(e.target.value)
        console.log(markCode)
    }

    const onEnglish = (e) => {
        setMarkE(e.target.value)
        console.log(markEnglish)
    }

    const onKnow = (e) => {
        setMarkK(e.target.value)
        console.log(markKnow)
    }
  
    const hanldeSearch = () => {

        axios.get('http://localhost:8080/staff/listcandidate')
            .then(function (response) {
                setCandidate(response.data)
                console.log("get list")
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleSetMark = (id) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "english_mark": markEnglish,
            "code_mark": markCode,
            "knowledge_mark": markKnow
        });

        var config = {
            method: 'put',
            url: `http://localhost:8080/staff/setmark/${id}`,
            headers: {
                'Content-Type': 'application/json',

            },
            data: data
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
                        <Form.Item name="Name" style={{ width: '80%' }}><p>Tên</p>
                            <Input placeholder="Nhập tên" prefix={<UserOutlined />} />
                        </Form.Item>
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
                                    <Button style={{ width: '120%' }} onClick={hanldeSearch} type="primary" htmlType="submit" shape="round" icon={<SearchOutlined />}>Tìm</Button>
                                    <Button style={{ width: '120%' }} htmlType="submit" shape="round" icon={<CloseOutlined />}>Xóa Lọc</Button>
                                </Space>
                            </Col>
                        </Row>
                    </Sider>
                </Card>

                <Card style={{ width: 2000 }}>
                    <Content style={styleContent}>
                        <Card style={{ width: '100%', minHeight: 1000 }}>

                            {candidate && candidate.map((candidate) => {
                                return (
                                    <div>
                                        <br></br>
                                        <Card style={{ background: "#fafafa", width: '100%', minHeight: 300 }}>
                                            <Row>
                                                <Col span={12} >
                                                    <Form>
                                                        <Title level={2}>{candidate.name}</Title>
                                                        <Row>
                                                            <Col span={6}>
                                                                <Form.Item name="code" label={<Text strong>Code</Text>}>{candidate.code}</Form.Item>
                                                                <Form.Item name="position" label={<Text strong>Vị trí</Text>}>{candidate.position}</Form.Item>
                                                                <Form.Item name="level" label={<Text strong>Level</Text>}>{candidate.level}</Form.Item>
                                                            </Col>
                                                            <Col span={12}>
                                                                <Form.Item>
                                                                    <Text strong>Điểm tiếng anh</Text><br></br>
                                                                    <Input onChange={onEnglish} style={{ width: '20%' }}></Input>
                                                                </Form.Item>
                                                                <Form.Item>
                                                                    <Text strong>Điểm coding</Text><br></br>
                                                                    <Input onChange={onCode} style={{ width: '20%' }}></Input>
                                                                </Form.Item>
                                                                <Form.Item>
                                                                    <Text strong>Điểm kiến thức chung</Text><br></br>
                                                                    <Input onChange={onKnow} style={{ width: '20%' }}></Input>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>



                                                    </Form>
                                                    <Button onClick={(e) => handleSetMark(candidate.id, e)}
                                                        icon={<SendOutlined />} style={{ width: '20%', }}>Chấm điểm</Button>
                                                </Col>

                                                <Col span={12}>
                                                    <Button style={{ width: '100%', minHeight: 300 }}>
                                                        <Text strong>Tiếng Anh</Text><br />
                                                        <Progress percent={candidate.englishMark} /><br />
                                                        <Text strong>Kiến thức chung</Text><br />
                                                        <Progress percent={candidate.knowledgeMark} /><br />
                                                        <Text strong>Coding</Text><br />
                                                        <Progress percent={candidate.codingMark} /><br />
                                                    </Button>
                                                    {/* <Modal title="Câu trả lời của thí sinh" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1100}>
                                                    {answerParticipant}
                                                </Modal> */}

                                                </Col>


                                            </Row>
                                        </Card>
                                    </div> 
                                )
                            })}

                        </Card>
                    </Content>
                </Card>
            </Layout>
        </Layout>
    );
}