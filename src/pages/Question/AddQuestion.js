import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Modal, Button, Card, Tabs, Space, Checkbox, Typography, Col } from 'antd';
import { EditOutlined, PlusOutlined, FormOutlined } from '@ant-design/icons';
import { Input, Select, Radio, } from 'antd';

const { TextArea } = Input;
const { Text } = Typography
const { TabPane } = Tabs;
const { Option } = Select;

export default function AddQuestion() {
    const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
    const [isModalVisibleAnswer, setIsModalVisibleAnswer] = useState(false);
    const [isModalVisibleAnswerE, setIsModalVisibleAnswerE] = useState(false);
    const [isModalQtoT, setIsModalQtoT] = useState(false);
    const [idAnswer, setIdAnswer] = useState("");
    const [mark, setMark] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [level, setLevel] = useState("");
    const [img, setImg] = useState("");
    const [listTest, setListTest] = useState([])
    const [question, setQuestion] = useState([])
    const [answer, setAnswer] = useState("")
    const [isTrue, setIsTrue] = useState("")
    const [valueT, setValueT] = useState()

    const onValueT = e => {
        setValueT(e)
        console.log(valueT)
    }

    const checkValue = e => {
        setIsTrue(e.target.value)
    }

    const checkIdAnswer = e => {
        setIdAnswer(e)
        console.log(idAnswer)
    }

    const inputAnswer = e => {
        setAnswer(e.target.value)
        console.log(answer)
    }

    const onMark = e => {
        setMark(e.target.value)
    }

    const hanldeSubject = (value) => {
        setSubject(value)
    }

    const handleType = (value) => {
        setType(value);
    }

    const handleContent = e => {
        setContent(e.target.value)
    }

    const handleLevel = (value) => {
        setLevel(value)
    }

    const handleImg = e => {
        setImg(e.target.value)
    }

    const showModal = () => {
        setIsModalVisibleAdd(true);
    };

    const showModalEdit = (id) => {
        setIsModalVisibleEdit(id)
        console.log(id)
    };

    const showModalAddAnswer = (id) => {
        setIsModalVisibleAnswer(id)
        console.log(id)

    }

    const showModalAddAnswerE = (id) => {
        setIsModalVisibleAnswerE(id)

    }

    const showModalQtoT = (id) => {
        setIsModalQtoT(id)
    }
    const handleCancel = () => {
        setIsModalVisibleAdd(false);
    };

    const handleCancelEdit = () => {
        setIsModalVisibleEdit(false);
    };

    const handleCancelAddAnswer = () => {
        setIsModalVisibleAnswer(false);
    };

    const handleCancelAddAnswerE = () => {
        setIsModalVisibleAnswerE(false);
    };

    const handleCancelQtoT = () => {
        setIsModalQtoT(false)
    }

    const handleAddAtoQ = (id) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "answer": answer,
            "isTrue": isTrue
        });

        var config = {
            method: 'post',
            url: `http://localhost:8080/staff/addmultiplechoiceanswer/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
        console.log(id)
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleEditEssay = (id) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "answer": answer
        });

        var config = {
            method: 'put',
            url: `http://localhost:8080/staff/updateessayanswer/${id}`,
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

    const handleEditMC = (id) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "answer": answer,
            "isTrue": isTrue
        });

        var config = {
            method: 'put',
            url: `http://localhost:8080/staff/updatemcanswer/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
        console.log(id,"---------------------")
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleAddEtoQ = (id) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "answer": answer,
            "mark": mark,
        });

        var config = {
            method: 'post',
            url: `http://localhost:8080/staff/addessayanswer/${id}`,
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
                if (error) {
                    alert("Đã có câu trả lời")
                }
            });

    }

    const handleSearchAllTest = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://localhost:8080/staff/getalltest',

        };

        axios(config)
            .then(function (response) {
                setListTest(response.data)
                console.log(response.data)

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
                // console.log(JSON.stringify(response.data));
                console.log("add question succes")
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
                // console.log(JSON.stringify(response.data));
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
            url: `http://localhost:8080/staff/addquestiontotest/${id}/${valueT}`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                if (error) {
                    alert("Cau hoi da ton tai trong test")
                }
            });

    }

    return (
        <Card style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
            <Space><h1 level={1}>Câu hỏi</h1>
                <Button
                    style={{ color: '#000000' }}
                    shape="round"
                    onClick={showModal}>Tạo câu hỏi</Button>
                <Button
                    style={{ color: '#000000' }}
                    shape="round"
                    onClick={handleSearchAllQuestion}>Danh sách</Button>
            </Space>
            <Modal
                title={<h1>Tạo câu hỏi</h1>}
                visible={isModalVisibleAdd}
                okText={"Tạo"}
                cancelText={"Hủy"}
                onOk={handleAdd}
                onCancel={handleCancel}>

                <p>Câu hỏi</p>

                <Select
                    placeholder="Lựa chọn"
                    style={{ width: 150 }}
                    onChange={hanldeSubject}>
                    <Option value="1"> Tiếng anh</Option>
                    <Option value="2"> Kiến thức chung</Option>
                    <Option value="3"> Code</Option>
                </Select>
                <p></p>
                <p>Level</p>
                <Select
                    style={{ width: 150 }}
                    placeholder="Level"
                    onChange={handleLevel} >
                    <Option value="1">Fresher</Option>
                    <Option value="2">Junior</Option>
                    <Option value="3">Senior</Option>
                </Select>
                <p></p>
                <p>Nội dung</p>
                <Space>
                    <Input size='large' maxLength={1000} onChange={handleContent} />
                </Space>

                <Tabs onChange={handleType}>
                    <TabPane tab="Trắc nghiệm" key="0" ></TabPane>
                    <TabPane tab="Tự luận" key="1"></TabPane>
                </Tabs>

            </Modal>

            {question && question.map((post) => {
                switch (post.type) {
                    case 0:
                        return (
                            <div>
                                <br></br>
                                <Card style={{ width: 380, background: '#fafafa' }}
                                    title={<div><h3>level {post.level} Subject {post.subject}</h3></div>}
                                    actions={
                                        [<PlusOutlined onClick={(e) => showModalQtoT(post.id, e)} />,
                                        <FormOutlined onClick={(e) => showModalAddAnswer(post.id, e)} />,
                                        <EditOutlined onClick={(e) => showModalEdit(post.id, e)} />,]}>
                                    <p> {post.content}</p>
                                    {question[currentQuestion].multipleChoiceQuestions.map((answer) => {
                                        return (
                                            <p>
                                                <Checkbox.Group onChange={checkIdAnswer}>
                                                    <Checkbox value={answer.id}>
                                                        <Col>
                                                            <TextArea style={{ width: 290 }}
                                                                onChange={inputAnswer}
                                                                placeholder={answer.answer}></TextArea>
                                                        </Col>
                                                        <p></p>
                                                        <Col>
                                                            <Radio.Group onChange={checkValue}>
                                                                <Radio value={"1"}>Đúng</Radio>
                                                                <Radio value={"0"}>Sai</Radio>
                                                            </Radio.Group>
                                                            <Button
                                                                shape='round'
                                                                type="primary"
                                                                danger
                                                                onClick={(e) => handleEditMC(idAnswer, e)}
                                                            >
                                                                Sửa câu trả lời
                                                            </Button>
                                                        </Col>
                                                    </Checkbox>
                                                </Checkbox.Group>
                                            </p>

                                        )
                                    })}

                                    <Modal
                                        title={<h1>Thêm câu hỏi vào test</h1>}
                                        visible={isModalQtoT === post.id}
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

                                    <Modal
                                        onCancel={handleCancelAddAnswer}
                                        cancelText={"Hủy"}
                                        okText={"Thêm"}
                                        onOk={(e) => handleAddAtoQ(post.id, e)}
                                        title={<h1>Thêm câu trả lời</h1>}
                                        visible={isModalVisibleAnswer === post.id}>
                                        <Input onChange={inputAnswer}
                                            placeholder="Nhập đán án"></Input>
                                        <p></p>
                                        <Radio.Group onChange={checkValue}>
                                            <Radio value={"1"}>Đúng</Radio>
                                            <Radio value={"0"}>Sai</Radio>
                                        </Radio.Group>
                                    </Modal>

                                    <Modal title={<h1>Sửa câu hỏi</h1>} visible={isModalVisibleEdit === post.id}
                                        footer={[
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
                                            <Input size='large' maxLength={1000} onChange={handleContent} placeholder={post.content} />
                                        </Space>

                                        <Tabs onChange={handleType}>
                                            <TabPane tab="Trắc nghiệm" key="0" ></TabPane>
                                            <TabPane tab="Tự luận" key="1"></TabPane>
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
                                    actions={[
                                        <PlusOutlined key="add" onClick={(e) => showModalQtoT(post.id, e)} />,
                                        <FormOutlined onClick={(e) => showModalAddAnswerE(post.id, e)} />,
                                        <EditOutlined key="edit" onClick={(e) => showModalEdit(post.id, e)} />,]}>
                                    <p> {post.content}</p>


                                    <div>
                                        <p>Câu trả lời : {post.essayQuestion.answer}</p>
                                    </div>


                                    <Modal
                                        title={<h1>Thêm câu hỏi vào test</h1>}
                                        visible={isModalQtoT === post.id}
                                        onCancel={handleCancelQtoT}
                                        onOk={(e) => handleAddQtoT(post.id, e)} >

                                        {listTest && listTest.map(postT => {
                                            return (
                                                <Checkbox.Group onChange={onValueT}>
                                                    <Checkbox value={postT.id}>
                                                        Name: {postT.name} Level: {postT.level} Subject: {postT.subject}</Checkbox>
                                                </Checkbox.Group>
                                            )
                                        })}

                                    </Modal>

                                    <Modal


                                        footer={[
                                            <Button
                                                key="submit"
                                                type="primary"
                                                onClick={(e) => handleAddEtoQ(post.id, e)}>
                                                Thêm câu trả lời
                                            </Button>,
                                            <Button
                                                type="primary"
                                                danger
                                                onClick={(e) => handleEditEssay(post.id, e)}
                                            >
                                                Sửa câu trả lời
                                            </Button>]}
                                        onCancel={handleCancelAddAnswerE}
                                        onOk={(e) => handleAddEtoQ(post.id, e)}
                                        title={<h1>Thêm câu trả lời</h1>}
                                        visible={isModalVisibleAnswerE === post.id}>

                                        <Input
                                            onChange={inputAnswer}
                                            placeholder="Nhập đán án">

                                        </Input>
                                        <p></p>
                                        <Input
                                            onChange={onMark}
                                            placeholder="Nhập điểm"></Input>

                                    </Modal>

                                    <Modal
                                        title={<h1>Sửa câu hỏi</h1>}
                                        visible={isModalVisibleEdit === post.id}
                                        footer={[
                                            <Button
                                                key="submit"
                                                type="primary"
                                                onClick={(e) => hanldeEditQuestion(post.id, e)}>
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

                                        <Select
                                            placeholder={post.type}
                                            style={{ width: 150 }}
                                            onChange={hanldeSubject}>
                                            <Option value="1"> Tiếng anh</Option>
                                            <Option value="2"> Kiến thức chung</Option>
                                            <Option value="3"> Code</Option>
                                        </Select>
                                        <p></p>
                                        <p>Level</p>
                                        <Select
                                            style={{ width: 150 }}
                                            placeholder={post.level}
                                            onChange={handleLevel} >
                                            <Option value="1">Fresher</Option>
                                            <Option value="2">Junior</Option>
                                            <Option value="3">Senior</Option>
                                        </Select>
                                        <p></p>
                                        <p>Nội dung</p>
                                        <Space>
                                            <Input
                                                size='large'
                                                onChange={handleImg} />
                                            <Input
                                                size='large'
                                                maxLength={1000}
                                                onChange={handleContent}
                                                placeholder={post.content} />
                                        </Space>

                                        <Tabs defaultActiveKey="1" onChange={handleType}>
                                            <TabPane tab="Trắc nghiệm" key="0" >

                                            </TabPane>

                                            <TabPane tab="Tự luận" key="1">

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