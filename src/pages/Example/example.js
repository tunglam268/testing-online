import { useState } from "react";
import './example.css';
import { Layout, Menu, Row, Col, Popover, Card, Button, Tabs, Space, Switch, Typography } from 'antd';
import { UserOutlined, MailOutlined, EditOutlined, PhoneOutlined, SearchOutlined, PlusOutlined, FileTextOutlined, CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio, DatePicker } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import MenuContext from 'antd/lib/menu/MenuContext';


const { Text } = Typography;
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const styleContent = { width: 1300, background: '#ffffff', padding: '25px 20px', minHeight: 1000 };
const styleCard = { background: '#fafafa', width: 400 }
const styleSider = { background: '#ffffff', padding: '0 0  ' }
const styleHeader = { background: '#ffffff' }
const dateFormat = 'YYYY-MM-DD';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

const candidatesArray = [
    {
        tenungvien: "Nguyễn Văn A",
        code: "BLC001",
        phongban: "P.CN Blockchain",
        vitri: "Java Developer",
        level: "Junior",
        reporter: "Tung Lam",
    },
    {
        tenungvien: "Nguyễn Văn B",
        phongban: "P.CN Blockchain",
        vitri: "Golang Developer",
        level: "Fresher",
        reporter: "Hoang Yen",
    },
    {
        tenungvien: "Nguyễn Văn C",
        phongban: "P.CN Blockchain",
        vitri: "Python Developer",
        level: "Junior",
        reporter: "Nhat Linh",
    },
];


const Exmaple = () => {
    const [candidates, setCandidates] = useState(candidatesArray); // Setting default value


    return (

        candidates.map((candidate, index) => (
            <Popover placement="right" trigger="click">
                <Card title={candidate.tenungvien} style={styleCard}>
                    <Row>
                        <Col span={14}>
                            <Form key={index}>
                                <Form.Item name="code" label={<Text strong>Code</Text>}>{candidate.code}</Form.Item>
                                <Form.Item name="room" label={<Text strong>Phòng ban</Text>}>{candidate.phongban}</Form.Item>
                                <Form.Item name="position" label={<Text strong>Vị trí</Text>}>{candidate.vitri}</Form.Item>
                                <Form.Item name="level" label={<Text strong>Level</Text>}>{candidate.level}</Form.Item>
                                <Form.Item name="reporter" label={<Text strong>Reporter</Text>}>{candidate.reporter}</Form.Item>
                            </Form>
                        </Col>

                        <Col span={10}>
                            <DatePicker />

                        </Col>
                    </Row>
                </Card>
            </Popover>
        ))

    );
};

export default Exmaple;
