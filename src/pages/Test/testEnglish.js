import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './test.css';
import { Layout, Menu, Col, Row, Statistic, Avatar, Modal, Typography, Card, Button, message, Space, Radio, Input, Tabs } from 'antd';
import { UserOutlined, ClockCircleFilled } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';

const { TextArea } = Input;
const { TabPane } = Tabs;
const styleHeader = { background: '#ffffff', padding: '0 20px' };
const styleContent = { background: '#ffffff', minHeight: 1000 };
const styleCard = { minHeight: 1000 }
const { Header, Content } = Layout;
const { Countdown } = Statistic;
const { Text, Title } = Typography;


export default function TestEnglish() {
    const [isModalVisibleSubmit, setIsModalVisibleSubmit] = useState(false);
    const [test, setTest] = useState([]);


    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem("test"))
        setTest(getItem)
        console.log(test)
    }, []);

    const showModalSubmitTest = () => {
        setIsModalVisibleSubmit(true);
    };

    const handleOkSubmitTest = (e) => {
        console.log(e);
        message.success('Xác nhận nộp bài');
        window.location.href = '/result'
        setIsModalVisibleSubmit(false);
    };

    const handleCancelSubmitTest = (e) => {
        console.log(e);
        message.error('Hủy nộp bài');
        setIsModalVisibleSubmit(false);
    };
    return (
        <Layout>
            <Header style={styleHeader}>
                <Row>
                    <Col span={8}>
                        <Space size={[32, 8]} wrap>
                            <Avatar size="large" icon={<ClockCircleFilled />} />
                            <Countdown title="Thời gian làm bài" value={Date.now() + 600 * 6000} />
                            <Button style={{ width: '130%', background: '#595959', color: '#ffffff' }}
                                shape="round" htmlType="submit" onClick={showModalSubmitTest}>Nộp bài</Button>
                            <Modal title={<Title level={4}>Xác nhận nộp bài</Title>}
                                visible={isModalVisibleSubmit} onOk={handleOkSubmitTest} okText="Nộp" onCancel={handleCancelSubmitTest} cancelText="Hủy">
                                <Text>Khi nộp bài , bạn sẽ không thể quay lại để chỉnh sửa bài làm . Xác nhận nộp bài ?</Text>
                            </Modal>
                        </Space>
                    </Col>

                    <Col span={2} offset={13}>
                        <Menu style={styleHeader} mode="horizontal">
                            <SubMenu key="SubMenu" title="Tài khoản" icon={<UserOutlined />}>
                                <Menu.Item key="exit"><NavLink to="/" />Thoát</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
            <Layout>
                <Content style={styleContent}>
                    <Card style={styleCard}>
                        <Row >

                            {test.questions && test.questions.map(t => {
                                switch (t.type) {
                                    case 0:
                                        return (
                                            <div>
                                                <Col span={12}>
                                                    <Card style={{ width: 800 }}>
                                                        <Row justify="start">
                                                            <Col span={3}>
                                                                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu {t.id}</Button>
                                                            </Col>

                                                            <Col span={12}>
                                                                <Text>{t.content}</Text>
                                                                <p></p>
                                                                <Radio.Group defaultValue={1}>
                                                                    <Space direction="vertical">
                                                                        {t.multipleChoiceQuestions && t.multipleChoiceQuestions.map(mc => {
                                                                            return (
                                                                                <div>
                                                                                    <Radio value={1}><Text strong>Them ABCD. </Text>{mc.answer}</Radio>
                                                                                </div>
                                                                            )
                                                                        })}

                                                                    </Space>
                                                                </Radio.Group>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                    <p></p>
                                                </Col>
                                            </div>
                                        )
                                    case 1:
                                        return (
                                            <div>
                                                <Col span={12} >
                                                    <Card style={{ width: 800 }}>
                                                        <Row justify="space-between">
                                                            <Col span={1}>
                                                                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu {t.id}</Button>
                                                            </Col>

                                                            <Col >
                                                                <Text>{t.content}</Text>
                                                                <p></p>
                                                                <TextArea rows={4} style={{ width: 600 }} maxLength={1000} />
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                    <p></p>
                                                </Col>
                                            </div>
                                        )
                                }
                            })}

                        </Row>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    )
}