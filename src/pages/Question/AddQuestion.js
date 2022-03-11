import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Modal, Button, Card, Tabs, Space, Form } from 'antd';
import { EditOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Select, Radio, } from 'antd';
import { NavLink, Route } from 'react-router-dom';

const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;


export default function AddQuestion() {
    const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [level, setLevel] = useState("");
    const [img, setImg] = useState("");
    const [question, setQuestion] = useState([])

    const hanldeSubject = (value) => {
        setSubject(value)
    }

    const handleType = (value) => {
        setType(value);
    }

    const handleContent = e => {
        console.log(e.target.value)
        setContent(e.target.value)
    }

    const handleLevel = (value) => {
        setLevel(value)
    }

    const handleImg = e => {
        console.log(e.target.value)
        setImg(e.target.value)
    }

    const showModal = () => {
        setIsModalVisibleAdd(true);
    };

    const showModalEdit = () => {
        setIsModalVisibleEdit(true)
    };

    const handleCancel = () => {
        setIsModalVisibleAdd(false);
    };

    const handleCancelEdit = () => {
        setIsModalVisibleEdit(false);
    };

    const onChange = e => {
        console.log('Change:', e.target.value);
    };

    const callback = (key) => {
        console.log(key);
    }

    const handleAdd = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "type": type,
            "subject": subject,
            "content": content,
            "level": level,
            "img": img
        });

        var config = {
            method: 'post',
            url: 'http://localhost:8080/staff/addquestion',
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
    };

    const handleSearchAllQuestion = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://localhost:8080/staff/getallquestion',

        };

        axios(config)
            .then(function (response) {
                setQuestion(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleDeleteQuestion = (id) => {
        var axios = require('axios');

        var config = {
            method: 'delete',
            url: `http://localhost:8080/staff/deletequestion/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const post = question.filter(item => item.id !== id)
        setQuestion(post)
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleGetQuestionById = (id) => {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: `http://localhost:8080/staff/getquestionbyid/${id}`,
            headers: {
                'Content-Type': 'application/json',

            },

        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        handleGetQuestionById(question.id);
    }, [question.id]);

    const hanldeEditQuestion = (id) => {
        var data = JSON.stringify({
            "type": type,
            "subject": subject,
            "content": content,
            "level": level,
            "img": img
        });
        console.log(id,"----------------")
        var axios = require('axios')
        var config = {
            method: 'PUT',
            url: `http://localhost:8080/staff/editquestion/${id}`,
            headers: {
                'Content-Type': 'application/json',

            },
            data: data
        }
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Card style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
            <Space><h1 level={1}>Câu hỏi</h1>
                <Button style={{ color: '#000000' }} shape="round" onClick={showModal}>Tạo câu hỏi</Button>
                <Button style={{ color: '#000000' }} shape="round" onClick={handleSearchAllQuestion}>Tìm</Button>
            </Space>
            <Modal title="Tạo câu hỏi" visible={isModalVisibleAdd}
                okText={"Tạo"} cancelText={"Hủy"} onOk={handleAdd} onCancel={handleCancel}>

                <p>Câu hỏi</p>

                <Select placeholder="Lựa chọn" style={{ width: 150 }} onChange={hanldeSubject}>
                    <Option value="1"> Tiếng anh</Option>
                    <Option value="2"> Kiến thức chung</Option>
                    <Option value="3"> Code</Option>
                </Select>
                <p></p>
                <p>Level</p>
                <Select style={{ width: 150 }} placeholder="Level" onChange={handleLevel} >
                    <Option value="1">Fresher</Option>
                    <Option value="2">Junior</Option>
                    <Option value="3">Senior</Option>
                </Select>
                <p></p>
                <p>Nội dung</p>
                <Space>
                    <Input size='large' onChange={handleImg} />
                    <Input size='large' maxLength={1000} onChange={handleContent} />
                </Space>

                <Tabs defaultActiveKey="1" onChange={handleType}>
                    <TabPane tab="Trắc nghiệm" key="0" >
                        <Radio.Group>
                            <Radio value={1}>A
                                <Input></Input>
                            </Radio>
                            <br></br>

                            <Radio value={2}>B
                                <Input></Input>
                            </Radio>
                            <br></br>

                            <Radio value={3}>C
                                <Input></Input>
                            </Radio>
                            <br></br>

                            <Radio value={4}>D
                                <Input></Input>
                            </Radio>
                            <br></br>

                        </Radio.Group>
                    </TabPane>

                    <TabPane tab="Tự luận" key="1">
                        <TextArea width={100} height={100} maxLength={1000} onChange={onChange} />
                    </TabPane>
                </Tabs>

            </Modal>

            {question.map((post, index) => {
                return (
                    
                    <Card style={{ width: 380, background: '#fafafa' }}
                        actions={[<PlusOutlined key="add" />,
                        <EditOutlined key="edit" onClick={(e) => showModalEdit(post.id, e)} />,
                        <CloseOutlined key="delete" onClick={(e) => handleDeleteQuestion(post.id, e)} />,]}>
                        <p> {post.content}</p>

                        <Radio.Group defaultActiveKey="1" onChange={callback}>
                            <Radio value={1}> A. -10</Radio>
                            <Radio value={2}>B. -1</Radio>
                            <Radio value={3}>C. 5</Radio>
                            <Radio value={4}>D. 0</Radio>
                        </Radio.Group>

                        <Modal title="Sửa câu hỏi" visible={isModalVisibleEdit}
                            okText={"Sửa"} cancelText={"Hủy"} onOk={(p) => hanldeEditQuestion(post.id, p)} onCancel={handleCancelEdit}>

                            <p>Câu hỏi</p>

                            <Select placeholder="Lựa chọn" style={{ width: 150 }} onChange={hanldeSubject}>
                                <Option value="1"> Tiếng anh</Option>
                                <Option value="2"> Kiến thức chung</Option>
                                <Option value="3"> Code</Option>
                            </Select>
                            <p></p>
                            <p>Level</p>
                            <Select style={{ width: 150 }} placeholder="Level" onChange={handleLevel} >
                                <Option value="1">Fresher</Option>
                                <Option value="2">Junior</Option>
                                <Option value="3">Senior</Option>
                            </Select>
                            <p></p>
                            <p>Nội dung</p>
                            <Space>
                                <Input size='large' onChange={handleImg} />
                                <Input size='large' maxLength={1000} onChange={handleContent} />
                            </Space>

                            <Tabs defaultActiveKey="1" onChange={handleType}>
                                <TabPane tab="Trắc nghiệm" key="0" >
                                    {/* <Radio.Group>
                                        <Radio value={1}>A
                                            <Input></Input>
                                        </Radio>
                                        <br></br>

                                        <Radio value={2}>B
                                            <Input></Input>
                                        </Radio>
                                        <br></br>

                                        <Radio value={3}>C
                                            <Input></Input>
                                        </Radio>
                                        <br></br>

                                        <Radio value={4}>D
                                            <Input></Input>
                                        </Radio>
                                        <br></br>

                                    </Radio.Group> */}
                                </TabPane>

                                <TabPane tab="Tự luận" key="1">
                                    {/* <TextArea width={100} height={100} maxLength={1000} onChange={onChange} /> */}
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Card>
                )
            })
            }
        </Card>
    )
}