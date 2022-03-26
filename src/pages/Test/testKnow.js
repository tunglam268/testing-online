import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './test.css';
import { Layout, Menu, Col, Row, Statistic, Image, Modal, Typography, Card, Radio, Button, message, Tabs, Space, Select } from 'antd';
import { UserOutlined, ClockCircleFilled, UndoOutlined } from '@ant-design/icons';
import { Input, Avatar } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const styleHeader = { background: '#ffffff', padding: '0 20px' };
const styleContent = { background: '#ffffff', minHeight: 1000 };
const styleCard = { minHeight: 1000 }
const { Header, Content } = Layout;
const { Countdown } = Statistic;
const { TabPane } = Tabs;
const { Text, Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function TestEnglish() {
    const [isModalVisibleRestart, setIsModalVisibleRestart] = useState(false);
    const [isModalVisibleSubmit, setIsModalVisibleSubmit] = useState(false);

    const showModalRestartTest = () => {
        setIsModalVisibleRestart(true);
    }

    const handleOkRestartTest = (e) => {
        console.log(e);
        message.success('Xác nhận làm lại');
        setIsModalVisibleRestart(false);
    };

    const handleCancelRestartTest = (e) => {
        console.log(e);
        message.error('Hủy làm lại');
        setIsModalVisibleRestart(false);
    };

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
                    </Card>
                </Content>
            </Layout>
        </Layout>
    )
}