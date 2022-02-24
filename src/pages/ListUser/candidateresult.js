
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './listuser';
import { Row, Col, Progress, Modal, Form, Card, Button, Checkbox, Space, Typography ,Avatar ,Popover} from 'antd';
import { SendOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Radio } from 'antd';

const { Text, Title } = Typography;
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
        level: "Fresher",
        reporter: "Tung Lam",
    },
];

const PopoverReporter = (
    <Card style={{width:370}}>
        <Row>
            <Col span={4}>
                <Avatar size={64} icon={<UserOutlined/>}></Avatar>
            </Col>

            <Col span={18} offset={2}>
                <Text strong>Tùng Lâm</Text><br></br>
                <Text>Phòng CN Blockchain</Text><br></br>
                <Text>Email: <Text underline>tunglam@gmail.com</Text></Text>
            </Col>
        </Row>
    </Card>
)

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




const CandidateResult = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [candidates, setCandidates] = useState(candidatesArray);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        candidates.map((candidate, index) => (
            <div>
                <br></br>
                <Card style={{ background: "#fafafa", width: '195%', minHeight: 300 }}>
                    <Row>
                        <Col span={8} >
                            <Form key={index}>
                                <Title level={2}>{candidate.nameCandidate}</Title>
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
                            <Space>
                                <Text strong>Điểm</Text>
                                <Input style={{ width: '30%' }}></Input>
                            </Space>
                        </Col>

                        <Col span={16} >
                            <Button onClick={showModal} style={{ width: '100%', minHeight: 300 }}>
                                <Text strong>Tiếng Anh</Text><br />
                                <Progress percent={80} /><br />
                                <Text strong>Kiến thức chung</Text><br />
                                <Progress percent={90} /><br />
                                <Text strong>Coding</Text><br />
                                <Progress percent={40} /><br />
                            </Button>
                            <Modal title="Câu trả lời của thí sinh" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1100}>
                                {answerParticipant}
                            </Modal>
                        </Col>

                        <Col span={6}>
                            <br />
                            <Checkbox onChange={onChange}>Email</Checkbox>
                            <Checkbox onChange={onChange}>SMS</Checkbox>
                            <Button icon={<SendOutlined />} style={{ width: '50%', }}>Gửi điểm</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        ))

    );
}

export default CandidateResult;