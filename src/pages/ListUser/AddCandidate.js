import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Button, Space } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, SearchOutlined, PlusOutlined,  FilterOutlined } from '@ant-design/icons';
import { Form, Input, Select, DatePicker } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { createCandidate, deleteCandidate } from '../../slices/slicecandidate';


const { Option } = Select;
const styleSider = { background: '#ffffff', padding: '0 0  ' }

export default function AddCandidate(props) {
    const initialCandidateState = {
        id: null,
        name: "",
        level: "",
        room: "",
        email: "",
        phone: "",
    };

    const [candidate, setCandidate] = useState([initialCandidateState]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCandidate({ ...candidate, [name]: value });

    };

    const handleOptionChange = (params, key) => {
        setCandidate({ ...candidate, [key]: params })
        console.log(candidate)

    }

    const AddCandidate = () => {
        const { name, level, room, phone, email } = candidate;
        dispatch(createCandidate({ name, level, room, phone, email }))
            .unwrap()
            .then(data => {
                console.log(data)
                setCandidate({
                    id: data.id,
                    name: data.name,
                    level: data.level,
                    phone: data.phone,
                    email: data.email,
                    position: data.position
                });
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e)
            })

    }


    const DeleteCandidate = () => {
        dispatch(deleteCandidate({ id: candidate.id }))
            .then(() => {
                props.history.push("/listuser");
            })
            .catch(e => {
                console.log(e);
            });

    }
    return (
        <Card>
            <Sider width={500} theme="light" className="site-layout-background" style={styleSider}>
                <br></br>
                <h1><Avatar
                    style={{ color: '#000000', backgroundColor: '#ffffff' }}
                    shape="square"
                    size={64}
                    icon={<FilterOutlined />}>
                </Avatar>Bộ Lọc</h1>
                <Form.Item style={{ width: '95%' }}><p>Tên</p>
                    <Input
                        name='name'
                        value={candidate.name}
                        onChange={handleInputChange}
                        placeholder="Nhập tên"
                        prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item name="room" style={{ width: '95%' }}><p>Phòng ban</p>
                    <Select
                        onChange={(params) => handleOptionChange(params.target, "room")}
                        placeholder="Lựa chọn" >
                        <Option value="Java">Java</Option>
                        <Option value="Python">Python</Option>
                        <Option value="Golang">Golang</Option>
                        <Option value="JavaScript">JavaScript</Option>
                        <Option value="NodeJS">NodeJS</Option>
                        <Option value="MySQL">MySQL</Option>
                    </Select>

                </Form.Item>

                <Form.Item name="level"><p>Level</p>
                    <Select
                        onChange={(params) => handleOptionChange(params, "level")}
                        style={{ width: '95%' }}
                        placeholder="level" >
                        <Option value="1">Fresher</Option>
                        <Option value="2">Junior</Option>
                        <Option value="3">Senior</Option>
                    </Select>
                </Form.Item>

                <Row gutter={[8, 8]}>
                    <Col span={12}>
                        <p>Lịch</p>
                        <Form.Item name="DatePicker">
                            <DatePicker />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <p>Liên lạc</p>
                        <Form.Item name="Contact">
                            <Form.Item >
                                <Input
                                    name="email"
                                    value={candidate.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    style={{ width: '89%' }}
                                    prefix={<MailOutlined />} />
                            </Form.Item>

                            <Form.Item>
                                <Input
                                    name="phone"
                                    value={candidate.phone}
                                    onChange={handleInputChange}
                                    placeholder="Số điện thoại"
                                    style={{ width: '89%' }}
                                    prefix={<PhoneOutlined />} />
                            </Form.Item>

                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Row>
                        <Col span={12} offset={6}>
                            <Space size={[32, 16]}>
                                <Button
                                    style={{ width: '120%', background: '#bfbfbf' }}
                                    htmlType="submit" shape="round"
                                    icon={<SearchOutlined />}
                                    onClick={() => { }}>Tìm</Button>
                                <Button
                                    style={{ width: '120%' }}
                                    htmlType="submit"
                                    shape="round"
                                    icon={<PlusOutlined />}
                                    onClick={AddCandidate}>Thêm</Button>

                            </Space>
                        </Col>
                    </Row>
                </Form.Item>
            </Sider>
        </Card>
    )
}