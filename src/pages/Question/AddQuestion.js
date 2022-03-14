import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Modal, Button, Card, Tabs, Space, Form, Checkbox } from 'antd';
import { EditOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Select, Radio, } from 'antd';
import { NavLink, Route } from 'react-router-dom';
import Title from 'antd/lib/skeleton/Title';

const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;

export default function AddQuestion() {
    const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
    const [isModalQtoT, setIsModalQtoT] = useState(false);
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [level, setLevel] = useState("");
    const [img, setImg] = useState("");
    const [listTest, setListTest] = useState([])
    const [question, setQuestion] = useState([])
    const [valueT, setValueT] = useState()

    const onValueT = e => {
        setValueT(e)
        console.log(valueT)
    }
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

    const showModalEdit = (id) => {

        setIsModalVisibleEdit(id)
        console.log(id)
    };
    const showModalQtoT = (id) => {
        setIsModalQtoT(id)
    }
    const handleCancel = () => {
        setIsModalVisibleAdd(false);
    };

    const handleCancelEdit = () => {
        setIsModalVisibleEdit(false);
    };

    const handleCancelQtoT = () => {
        setIsModalQtoT(false)
    }
    const onChange = e => {
        console.log('Change:', e.target.value);
    };



    const handleSearchAllTest = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://localhost:8080/staff/getalltest',

        };

        axios(config)
            .then(function (response) {
                setListTest(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        setListTest(handleSearchAllTest())
    }, []);


    function handleAdd() {
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
    }

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

    const hanldeEditQuestion = (id) => {
        var data = JSON.stringify({
            "type": type,
            "subject": subject,
            "content": content,
            "level": level,
            "img": img
        });
        console.log(id, "----------------")
        var axios = require('axios')
        var config = {
            method: 'PUT',
            url: `http://localhost:8080/staff/editquestion/${id}`,
            headers: {
                'Content-Type': 'application/json',

            },
            data: data
        }
        const post = question.filter(item => item.id !== id)
        setQuestion(post)
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddQtoT = (id) => {
        var axios = require('axios');

        var config = {
            method: 'put',
            url: `http://localhost:8080/staff/addquestiontotest/${valueT}/${id}`,
            headers: {}
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
        <Card style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
            <Space><h1 level={1}>Câu hỏi</h1>
                <Button style={{ color: '#000000' }} shape="round" onClick={showModal}>Tạo câu hỏi</Button>
                <Button style={{ color: '#000000' }} shape="round" onClick={handleSearchAllQuestion}>Danh sách</Button>
            </Space>
            <Modal title={<h1>Tạo câu hỏi</h1>} visible={isModalVisibleAdd}
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

                <Tabs onChange={handleType}>
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

            {question.map((post) => {
                switch (post.type) {
                    case 0:
                        return (
                            <div>
                                <br></br>
                                <Card style={{ width: 380, background: '#fafafa' }}
                                    title={<div><h3>level {post.level} Subject {post.subject}</h3></div>}
                                    actions={
                                        [<PlusOutlined key="add" onClick={(e) => showModalQtoT(post.id, e)} />,
                                        <EditOutlined key="edit" onClick={(e) => showModalEdit(post.id, e)} />,]}>
                                    <p> {post.content}</p>

                                    <Radio.Group>
                                        <Radio value={1}> A. -10</Radio>
                                        <Radio value={2}>B. -1</Radio>
                                        <Radio value={3}>C. 5</Radio>
                                        <Radio value={4}>D. 0</Radio>
                                    </Radio.Group>
                                    <Modal title={<h1>Thêm câu hỏi vào test</h1>} visible={isModalQtoT === post.id}
                                        onCancel={handleCancelQtoT}
                                        onOk={() => handleAddQtoT(post.id)} >

                                        {listTest && listTest.map(postT => {
                                            return (
                                                <Checkbox.Group onChange={onValueT}>
                                                    <Checkbox value={postT.id}>
                                                        Name: {postT.name} Level: {postT.level} Subject: {postT.subject}</Checkbox>
                                                </Checkbox.Group>
                                            )
                                        })}

                                    </Modal>


                                    <Modal title={<h1>Sửa câu hỏi</h1>} visible={isModalVisibleEdit === post.id}
                                        footer={[
                                            <Button key="back" onClick={handleCancelEdit}>
                                                Quay lại
                                            </Button>,
                                            <Button key="submit"
                                                type="primary" onClick={(e) => hanldeEditQuestion(post.id, e)}>
                                                Sửa
                                            </Button>,
                                            <Button
                                                type="primary"
                                                danger
                                                onClick={(e) => handleDeleteQuestion(post.id, e)}>
                                                Xóa
                                            </Button>]} onCancel={handleCancelEdit}>
                                        <p>Câu hỏi</p>

                                        <Select placeholder={post.type} style={{ width: 150 }} onChange={hanldeSubject}>
                                            <Option value="1"> Tiếng anh</Option>
                                            <Option value="2"> Kiến thức chung</Option>
                                            <Option value="3"> Code</Option>
                                        </Select>
                                        <p></p>
                                        <p>Level</p>
                                        <Select placeholder={post.level} style={{ width: 150 }} onChange={handleLevel} >
                                            <Option value="1">Fresher</Option>
                                            <Option value="2">Junior</Option>
                                            <Option value="3">Senior</Option>
                                        </Select>
                                        <p></p>
                                        <p>Nội dung</p>
                                        <Space>
                                            <Input size='large' onChange={handleImg} />
                                            <Input size='large' maxLength={1000} onChange={handleContent} placeholder={post.content} />
                                        </Space>

                                        <Tabs onChange={handleType}>
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
                            </div>
                        )
                    case 1:
                        return (
                            <div>
                                <br></br>
                                <Card
                                    title={<div><h3>level {post.level} Subject {post.subject}</h3></div>}
                                    style={{ width: 380, background: '#fafafa' }}
                                    actions={[<PlusOutlined key="add" />,
                                    <EditOutlined key="edit" onClick={(e) => showModalEdit(post.id, e)} />,]}>
                                    <p> {post.content}</p>

                                    <TextArea width={100} height={100} maxLength={1000} onChange={onChange} />
                                    <Modal title={<h1>Sửa câu hỏi</h1>} visible={isModalVisibleEdit === post.id}
                                        footer={[<Button key="back" onClick={handleCancelEdit}>
                                            Quay lại
                                        </Button>,
                                        <Button key="submit"
                                            type="primary" onClick={(e) => hanldeEditQuestion(post.id, e)}>
                                            Sửa
                                        </Button>,
                                        <Button
                                            type="primary"
                                            danger
                                            onClick={(e) => handleDeleteQuestion(post.id, e)}
                                        >
                                            Xóa
                                        </Button>]} onCancel={handleCancelEdit}>

                                        <p>Câu hỏi</p>

                                        <Select placeholder={post.type} style={{ width: 150 }} onChange={hanldeSubject}>
                                            <Option value="1"> Tiếng anh</Option>
                                            <Option value="2"> Kiến thức chung</Option>
                                            <Option value="3"> Code</Option>
                                        </Select>
                                        <p></p>
                                        <p>Level</p>
                                        <Select style={{ width: 150 }} placeholder={post.level} onChange={handleLevel} >
                                            <Option value="1">Fresher</Option>
                                            <Option value="2">Junior</Option>
                                            <Option value="3">Senior</Option>
                                        </Select>
                                        <p></p>
                                        <p>Nội dung</p>
                                        <Space>
                                            <Input size='large' onChange={handleImg} />
                                            <Input size='large' maxLength={1000} onChange={handleContent} placeholder={post.content} />
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
                            </div>
                        )
                }
            })}
        </Card >
    )
}