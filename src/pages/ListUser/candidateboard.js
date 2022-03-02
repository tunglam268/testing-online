import { useState } from "react";
import 'antd/dist/antd.css';
import './listuser.css';
import { Menu, Row, Col, Popover, Card, Button, Space, Switch, Typography, Avatar } from 'antd';
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Select, DatePicker } from 'antd';

import { NavLink } from 'react-router-dom';
const { Option } = Select;


const { Text } = Typography;
const styleCard = { background: '#fafafa', width: 400 }

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

const menuContact = (

    <Row gutter={[16, 16]}>
        <Col span={14}>
            <p>Liên hệ</p>
            <Form.Item >
                <Input style={{ width: '100%' }} placeholder="Gmail" prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item>
                <Input style={{ width: '100%' }} placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
            </Form.Item>
        </Col>

        <Col span={10}>
            <p>Tùy chọn gửi code</p>
            <Select style={{ width: '95%' }}>
                <Option value="sms">Qua SMS</Option>
                <Option value="gmail">Qua Gmail</Option>
            </Select>
            <br />
            <br />
            <Text>Tự động trước 1 tiếng</Text>
            <br />
            <Switch defaultChecked onChange={onChange} />
        </Col>

        <Col offset={20}>
            <Button type='primary' shape='round'  >Lưu</Button>
        </Col>
    </Row>

)

const PopoverReporter = (
    <Card style={{ width: 370 }}>
        <Row>
            <Col span={4}>
                <Avatar size={64} icon={<UserOutlined />}></Avatar>
            </Col>

            <Col span={18} offset={2}>
                <Text strong>Tùng Lâm</Text><br></br>
                <Text>Phòng CN Blockchain</Text><br></br>
                <Text>Email: <Text underline>tunglam@gmail.com</Text></Text>
            </Col>
        </Row>
    </Card>
)

const popoverCandidate = (
    <Menu >
        <Menu.Item key="1" >Chọn</Menu.Item>
        <Menu.Item key="2" >Gửi code</Menu.Item>
        <Popover content={menuContact} placement="bottom">
            <Menu.Item key="3">Xem liên hệ</Menu.Item>
        </Popover>
        <Menu.Item key="4" >Thiết lập bài test<NavLink to="/question" /></Menu.Item>
        <Menu.Item key="5" >Chỉnh sửa thông tin</Menu.Item>
        <Menu.Item key="6" >Xóa ứng viên</Menu.Item>
    </Menu>
)

const candidatesArray = [
    {
        nameCandidate: "Nguyễn Văn A",
        code: "BLC001",
        room: "P.CN Blockchain",
        position: "Java Developer",
        level: "Junior",
        reporter: "Tung Lam",
    },
    {
        nameCandidate: "Nguyễn Văn B",
        code: "BLC002",
        room: "P.CN Blockchain",
        position: "Java Developer",
        level: "Junior",
        reporter: "Tung Lam",
    },
    {
        nameCandidate: "Nguyễn Văn C",
        code: "BLC003",
        room: "P.CN Blockchain",
        position: "Java Developer",
        level: "Junior",
        reporter: "Tung Lam",
    },
];


const CandidateBoard = () => {
    const [candidates, setCandidates] = useState(candidatesArray); // Setting default value


    return (

        candidates.map((candidate, index) => (
            <Col span={8} >
                <p></p>
                <Popover content={popoverCandidate} placement="right" trigger="click">
                    <Card title={candidate.nameCandidate} style={styleCard}>
                        <Row>
                            <Col span={14}>
                                <Form key={index}>
                                    <Form.Item name="code" label={<Text strong>Code</Text>}>{candidate.code}</Form.Item>
                                    <Form.Item name="room" label={<Text strong>Phòng ban</Text>}>{candidate.room}</Form.Item>
                                    <Form.Item name="position" label={<Text strong>Vị trí</Text>}>{candidate.position}</Form.Item>
                                    <Form.Item name="level" label={<Text strong>Level</Text>}>{candidate.level}</Form.Item>
                                    <Form.Item name="reporter" label={<Text strong>Reporter</Text>}>
                                        <Popover content={PopoverReporter} trigger="hover" placement="bottom">
                                            <Text >{candidate.reporter}</Text>
                                        </Popover>
                                    </Form.Item>
                                </Form>
                            </Col>

                            <Col span={10}>
                                <DatePicker disabled />

                            </Col>
                        </Row>
                    </Card>
                </Popover>
            </Col>
        ))

    );
};

export default CandidateBoard;
