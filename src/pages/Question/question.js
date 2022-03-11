import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Layout, Menu, Row, Modal, Col, Button, Card, Space, Typography, DatePicker } from 'antd';
import { SearchOutlined, QuestionCircleTwoTone, SaveOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio, } from 'antd';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import AddQuestion from './AddQuestion';


const { Text } = Typography;
const { Header, Content } = Layout;
const { Option } = Select;
const style = { background: '#ffffff', padding: '8px 0' };
const styleContent = { background: '#ffffff', padding: '0 20px' };
const styleCardTest = { background: '#fafafa', minHeight: 100, width: '100%' };
const styleHeader = { background: '#ffffff' }




export default function Question() {

  const [date, SetDate] = useState("")
  const [subject, setSubject] = useState("")
  const [level, setLevel] = useState("")
  const [time, setTime] = useState("")
  const [nameTest, setNameTest] = useState("")
  const [codeTest, setCodeTest] = useState("")
  const [listTest, setListTest] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeCodeTest = (e) => {
    setCodeTest(e.target.value)
  }

  const onChangeNameTest = (e) => {
    setNameTest(e.target.value)
  }

  const onChangeLevel = (e) => {
    setLevel(e.target.value)
  }

  const onChangeTime = (e) => {
    setTime(e.format("HH:mm:ss"))
  }

  const onChangeSubject = (e) => {
    setSubject(e)
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
        console.log(response.data)
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
        console.log(JSON.stringify(response.data));
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
      })
      .catch(function (error) {
        console.log(error);
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
              <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title={<Text strong>Tài khoản</Text>}>
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
                          <Button style={{ background: '#292929', color: '#ffffff' }}
                            onClick={handleSearchAllTest}
                            shape="round" htmlType="submit" icon={<SearchOutlined />}>Tìm</Button>
                        </Col>
                      </Space>
                    </Row>
                  </p>

                  <Form style={{ height: '50vh', overflow: 'auto' }}>
                    {listTest.map((q, index) => {
                      return (

                        <Button onClick={(e) => showModal(q.id, e)} size="large"
                          style={styleCardTest} icon={<QuestionCircleTwoTone />}>{q.name}
                        </Button>

                      )
                    })}
                    {listTest.map((q, index) => {
                      return (
                        <Modal footer={[
                          <Button key="back" onClick={handleCancel}>
                            Hủy
                          </Button>,
                          <Button key="submit"
                            type="primary" onClick={(e) => handleEditTest(q.id, e)}>
                            Sửa
                          </Button>,
                          <Button
                            onClick={(e) => handleDeleteTest(q.id, e)}
                          >
                            Xóa
                          </Button>,]}
                          title="Test"
                          visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                          <Row gutter={[8, 8]}>
                            <Col span={12}>
                              <Form.Item><Input onChange={onChangeNameTest}
                                style={{ width: 150 }} placeholder={q.name} /></Form.Item>
                              <DatePicker placeholder={q.date} onChange={onChangeDate}></DatePicker><p></p>
                              <DatePicker style={{ width: 150 }} placeholder={q.time} onChange={onChangeTime} picker="time"></DatePicker>

                              <p></p>
                            </Col>


                            <Col span={12}>
                              <Form.Item name="Position">
                                <Input onChange={onChangeCodeTest}
                                  style={{ width: 150 }} placeholder={q.codeTest} />
                              </Form.Item>
                              <Form.Item>
                                <Select defaultValue={q.subject} style={{ width: 150 }} onChange={onChangeSubject}>
                                  <Option value="1">Tiếng Anh</Option>
                                  <Option value="2">Code</Option>
                                  <Option value="3">Kiến thức chung</Option>
                                </Select>
                              </Form.Item>

                              <Form.Item>
                                <Radio.Group defaultValue={q.level} size="middle" onChange={onChangeLevel} buttonStyle="solid">
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
                          <DatePicker onChange={onChangeDate}></DatePicker><p></p>
                          <DatePicker onChange={onChangeTime} picker="time"></DatePicker>
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

                    {/* <p></p>
                    <Card style={{ width: 800, background: '#fafafa' }} actions={[<CloseOutlined key="exit" />,]}>
                      <p> The executives pointed to immigration ______ the biggest drivers of the domestic market</p>
                      <Radio.Group defaultActiveKey="1" onChange={callback}>
                        <Radio value={1}> A. Rather</Radio><br></br>
                        <Radio value={2}>B. As one of</Radio><br></br>
                        <Radio value={3}>C. Resulting in</Radio><br></br>
                        <Radio value={4}>D. As leading</Radio><br></br>
                      </Radio.Group>
                    </Card> */}

                    {/* <Card style={{ width: 800, background: '#fafafa' }} actions={[<CloseOutlined key="exit" />,]}>

                      <Row>
                        <Col span={12}>
                          <p> The executives pointed to immigration ______ the biggest drivers of the domestic market</p>
                          <TextArea width={300} height={300} maxLength={1000} onChange={onChange} />
                        </Col>

                        <Col span={6} offset={4}>
                          <Image width={150} height={150} src="error" fallback="data:image/png;base64,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" />
                        </Col>
                      </Row>
                    </Card> */}
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