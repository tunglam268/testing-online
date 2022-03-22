import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Layout, Menu, Row, Modal, Col, Button, Card, Space, Typography, DatePicker, Checkbox } from 'antd';
import { SearchOutlined, SaveOutlined, UserOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio, } from 'antd';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import AddQuestion from './AddQuestion';


const { Text } = Typography;
const { Header, Content } = Layout;
const { Option } = Select;
const style = { background: '#ffffff', padding: '8px 0' };
const styleContent = { background: '#ffffff', padding: '0 20px' };

const styleTest = { background: '#fafafa', minHeight: 1000, width: '100%' };
const styleHeader = { background: '#ffffff' }




export default function Question() {

  const [date, SetDate] = useState("")
  const [subject, setSubject] = useState("")
  const [level, setLevel] = useState("")
  const [time, setTime] = useState("")
  const [nameTest, setNameTest] = useState("")
  const [codeTest, setCodeTest] = useState("")
  const [listTest, setListTest] = useState([])
  const [candidate, setCandidate] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAddTtoC, setisModalAddTtoC] = useState(false);
  const [valueC, setValueC] = useState()

  const onValueC = e => {
    setValueC(e)
    console.log(valueC)
  }

  const showModal = (id) => {
    setIsModalVisible(id);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModalQtoT = (id) => {
    setisModalAddTtoC(id);
  };

  const handleCancelQtoT = () => {
    setisModalAddTtoC(false);
  };

  const onChangeCodeTest = (e) => {
    setCodeTest(e.target.value)
  }

  const onChangeNameTest = (e) => {
    setNameTest(e.target.value)
  }

  const onChangeLevel = (e) => {
    setLevel(e.target.value)
    console.log(level)
  }

  const onChangeTime = (e) => {
    setTime(e.format("HH:mm:ss"))
  }

  const onChangeSubject = (e) => {
    setSubject(e)
    console.log(subject)
  }

  const onChangeDate = (value) => {
    SetDate(value.format("yyyy-MM-DD HH:mm:ss"))
    console.log(date)
  }

  const handleSearchAllTest = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8080/staff/getalltest',

    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data), "Test");
        setListTest(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const hanldeSearchAll = () => {
    var axios = require('axios');
    axios.get('http://localhost:8080/staff/listcandidate')
      .then(function (response) {
        setCandidate(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  useEffect(() => {
    setCandidate(hanldeSearchAll())
  }, []);

  const handleEditTest = (id) => {
    var data = JSON.stringify({
      "subject": subject,
      "level": level,
      "times": time,
      "dates": date,
      "name": nameTest,
      "codeTest": codeTest,
      "isDone": "0",
      "marks": "100"
    });
    console.log(data)
    var axios = require('axios')
    var config = {
      method: 'PUT',
      url: `http://localhost:8080/staff/updatetest/${id}`,
      headers: {
        'Content-Type': 'application/json',

      },
      data: data
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(id)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleDeleteTest = (id) => {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `http://localhost:8080/staff/deletetest/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const post = listTest.filter(item => item.id !== id)
    setListTest(post)
    console.log(id)
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        alert("delete succes" + id)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const AddTest = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "subject": subject,
      "level": level,
      "times": time,
      "dates": date,
      "name": nameTest,
      "codeTest": codeTest,
      "isDone": "0",
      "marks": "100"
    });
    var config = {
      method: 'post',
      url: 'http://localhost:8080/staff/addtest',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };

    console.log(data, "data")
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.status === "OK") {
          alert("Them thanh cong")
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const addQtoT = (id) => {
    var axios = require('axios');

    var config = {
      method: 'put',
      url: `http://localhost:8080/staff/addtestforcandidate/${id}/${valueC}`,
    };
    
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log("Them bai test cho candidate thanh cong")
      })
      .catch(function (error) {
        if (error = "Request failed with status code 500") {
          return alert("Ứng viên bị trùng bài test")
        }
      });

  }

  return (
    <Layout>
      <Header style={styleHeader} className="header">
        <Row>
          <Col span={8}>
            <Menu style={styleHeader} mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><NavLink to="/listuser" /><Text strong>Lịch test</Text></Menu.Item>
              <Menu.Item key="2"><NavLink to="/question" /><Text strong>Bộ câu hỏi</Text></Menu.Item>
              <Menu.Item key="3"><NavLink to="/complete" /><Text strong>Đã hoàn thành</Text></Menu.Item>
              <Menu.Item key="4"><NavLink to="/document" /><Text strong>Tài liệu</Text></Menu.Item>
            </Menu>
          </Col>

          <Col span={2} offset={14}>
            <Menu style={styleHeader} mode="horizontal">
              <SubMenu icon={<UserOutlined />} title={<Text strong>Tài khoản</Text>}>
                <Menu.Item key="account" ><NavLink to="/manageaccount" />Quản lý tài khoản</Menu.Item>
                <Menu.Item key="logout"><NavLink to="/" />Đăng xuất</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Header>

      <Card style={{ width: '100%' }}>
        <Content style={styleContent}>
          <Row gutter={16}>
            <Col className="test" span={6}>
              < div style={style}>
                <Card>
                  <h1 level={1}>Bài test</h1>
                  <p>
                    <Card style={{ background: '#fafafa' }}>
                      <Form.Item name="test"><p>Tên bài test</p><Input placeholder="Nhập tên bài test" /></Form.Item>
                      <Radio.Group buttonStyle="solid">

                      </Radio.Group>

                    </Card>

                    <p></p>
                    <Row justify="center">
                      <Space>
                        <Col span={4}>
                          <Button
                            style={{ background: '#292929', color: '#ffffff' }}
                            onClick={handleSearchAllTest}
                            shape="round"
                            htmlType="submit"
                            icon={<SearchOutlined />}>Danh sách</Button>
                        </Col>
                      </Space>
                    </Row>
                  </p>

                  <Form style={{ height: '50vh', overflow: 'auto' }}>
                    {listTest.map((q) => {
                      return (
                        <div>
                          <br></br>
                          <Card style={{ width: 370, background: '#fafafa' }}
                            title={q.name}
                            actions={
                              [<PlusOutlined key="add" onClick={(p) => showModalQtoT(q.id, p)} />,
                              <EditOutlined key="edit" onClick={(p) => showModal(q.id, p)} />,]}>
                            <Row>
                              <Col span={12}>
                                <h3>Level : {q.level}</h3>
                              </Col>
                              <Col span={12}>
                                <h3>Subject : {q.subject}</h3>
                              </Col>
                            </Row>

                          </Card>
                          <Modal
                            title={<h3>Thêm câu hỏi cho ứng viên {q.name}</h3>}
                            visible={isModalAddTtoC === q.id}
                            onOk={(e) => addQtoT(q.id, e)} okText={"Thêm"}
                            onCancel={handleCancelQtoT} cancelText={"Hủy"}>

                            {candidate && candidate.map(post => {
                              return (
                                <Checkbox.Group onChange={onValueC}>
                                  <Checkbox value={post.id}>
                                    Name: {post.name} Level: {post.level}</Checkbox>
                                </Checkbox.Group>
                              )
                            })}
                          </Modal>
                        </div>

                      )
                    })}
                    {listTest.map((q) => {
                      return (
                        <Modal footer={[
                          <Button key="submit"
                            type="primary" onClick={(e) => handleEditTest(q.id, e)}>
                            Sửa
                          </Button>,

                          <Button
                            danger
                            type="primary"
                            onClick={(e) => handleDeleteTest(q.id, e)}
                          >
                            Xóa
                          </Button>,]}
                          title="Test"
                          visible={isModalVisible === q.id}
                          onCancel={handleCancel}>

                          <Row gutter={[8, 8]}>
                            <Col span={12}>
                              <Form.Item>
                                <Input onChange={onChangeNameTest}
                                  style={{ width: 150 }} placeholder={q.name} />
                              </Form.Item>
                              <DatePicker
                                placeholder={q.date}
                                onChange={onChangeDate} /><p></p>
                              <DatePicker
                                style={{ width: 150 }}
                                placeholder={q.time}
                                onChange={onChangeTime}
                                picker="time" />

                              <p></p>
                            </Col>


                            <Col span={12}>
                              <Form.Item name="Position">
                                <Input onChange={onChangeCodeTest}
                                  style={{ width: 150 }} placeholder={q.codeTest} />
                              </Form.Item>
                              <Form.Item>
                                <Select style={{ width: 150 }} onChange={onChangeSubject}>
                                  <Option value="1">Tiếng Anh</Option>
                                  <Option value="2">Code</Option>
                                  <Option value="3">Kiến thức chung</Option>
                                </Select>
                              </Form.Item>

                              <Form.Item>
                                <Radio.Group size="middle" onChange={onChangeLevel} buttonStyle="solid">
                                  <Radio.Button value="1">Fresher</Radio.Button>
                                  <Radio.Button value="2">Junior</Radio.Button>
                                  <Radio.Button value="3">Senior</Radio.Button>
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                          </Row>

                        </Modal>
                      )
                    })}
                  </Form>
                </Card>
              </div>
            </Col>

            <Col className="question" span={6}>
              <div style={style}>

                <AddQuestion />

              </div>
            </Col>

            <Col className="demo" span={12}>
              <div style={style}>
                <Card style={{ height: '100vh', overflow: 'auto' }}>
                  <h1 level={1}>Demo</h1>
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <Form.Item><Input onChange={onChangeNameTest}
                        style={{ width: 311 }} placeholder="Nhập tên bài test" /></Form.Item>
                      <Row>
                        <Col span={10}>
                          <DatePicker onChange={onChangeDate} /><p></p>
                          <DatePicker onChange={onChangeTime} picker="time" />
                        </Col>
                        <Col span={14}>
                          <Radio.Group size="middle" onChange={onChangeLevel} buttonStyle="solid">
                            <Radio.Button value="1">Fresher</Radio.Button>
                            <Radio.Button value="2">Junior</Radio.Button>
                            <Radio.Button value="3">Senior</Radio.Button>
                          </Radio.Group>
                          <p></p>
                          <Select defaultValue="english" style={{ width: 150 }} onChange={onChangeSubject}>
                            <Option value="1">Tiếng Anh</Option>
                            <Option value="2">Code</Option>
                            <Option value="3">Kiến thức chung</Option>
                          </Select>
                        </Col>
                      </Row>

                    </Col>


                    <Col span={12}>
                      <Form.Item name="Position">
                        <Input onChange={onChangeCodeTest}
                          style={{ width: 311 }} placeholder="Nhập code test" />
                        <p></p>
                        <Button style={{ width: '50%', background: "#262626", color: "#ffffff" }}
                          shape="round" onClick={AddTest} type="primary" icon={<SaveOutlined />} htmlType="submit">Lưu</Button>
                      </Form.Item>
                    </Col>

                    <Card style={styleTest}>

                    </Card>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </Content>
      </Card >
    </Layout >
  );
}