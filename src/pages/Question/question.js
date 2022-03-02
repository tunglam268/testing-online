import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Layout, Menu, Row, Modal, Col, DatePicker, Image, Button, Card, Tabs, Space, Typography } from 'antd';
import { SearchOutlined, QuestionOutlined, QuestionCircleTwoTone, SaveOutlined, FieldTimeOutlined, EditOutlined, PlusOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio, } from 'antd';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';


const { Text } = Typography;
const { Header, Content } = Layout;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;
const style = { background: '#ffffff', padding: '8px 0' };
const styleContent = { background: '#ffffff', padding: '0 20px' };
const styleCardTest = { background: '#fafafa', minHeight: 100, width: '100%' };
const styleHeader = { background: '#ffffff' }




export default function Question(props) {
  const initialQuestionState = {
    id: null,
    type: "",
    subject: "",
    content: "",
    level: "",
    img: "",
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [level, setLevel] = useState("");
  const [img, setImg] = useState("");
  const [dateTest, setDateTest] = useState("")
  const [codeTest, setCodeTest] = useState("");
  const [knowledgerType, setKnowledgerType] = useState('english');
  const [knowledgerLevel, setKnowledgerLevel] = useState({
    'english': ['B1', 'B2', 'B3', 'B4'],
    'code': ['fresher', 'junior', 'senior', 'master'],
    'knowledger': ['1', '2', '3', '4']


  })
  const [dataQuestion, setDataQuestion] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState([initialQuestionState])

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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const AddQuestion = () => {
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
  const SearchAllTest = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8080/staff/getalltest',

    };

    axios(config)
      .then(function (response) {
        setCurrentQuestion(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const SearchAllQuestion = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8080/staff/getallquestion',

    };

    axios(config)
      .then(function (response) {
        setCurrentQuestion(response.data)
        console.log(currentQuestion)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getQuestionById = id => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `http://localhost:8080/staff/getquestionbyid/${id}`, 
      headers: {
        "Content-type": "application/json"
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCurrentQuestion(response.data)
        console.log(currentQuestion)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  // useEffect(() => {
  //   getQuestionById(props.match.params.id)
  // }, [props.match.params.id]);

  const deleteQuestionById = (id) => {
    var axios = require('axios');

    var config = {
      method: 'delete',
      url: `http://localhost:8080/staff/deletequestion/${id}`, id: currentQuestion.id,
      headers: {
        "Content-type": "application/json"
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = e => {
    console.log('Change:', e.target.value);
  };

  const handleChange = (value) => {
    setKnowledgerType(value)
  }

  const handleCodeTest = (value) => {
    setCodeTest(value)
  }

  const callback = (key) => {
    console.log(key);
  }

  const handleDateTest = (date, dateString) => {
    setDateTest(date, dateString)
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
                  <Space>
                    <h1 level={1}>Bài test</h1>
                    <Select defaultValue="english" style={{ width: 150 }} onChange={handleChange}>
                      <Option value="english">Tiếng Anh</Option>
                      <Option value="code">Code</Option>
                      <Option value="knowledger">Kiến thức chung</Option>
                    </Select>
                  </Space>

                  <p>
                    <Card style={{ background: '#fafafa' }}>
                      <Form.Item name="test"><p>Tên bài test</p><Input placeholder="Nhập tên bài test" /></Form.Item>
                      <Radio.Group buttonStyle="solid">

                        <Form.Item name="level">
                          <Row gutter={[16, 16]}>
                            <Col>
                              {
                                knowledgerLevel['' + knowledgerType].map((show, value) => {
                                  return (
                                    <Radio.Button size="large" value={value} >{show}</Radio.Button>
                                  )
                                })
                              }
                            </Col>

                            <Col>
                              <Button
                                danger style={{ width: '150%', background: '#fafafa' }}
                                shape="round"
                                htmlType="submit"
                                icon={<CloseOutlined />}>Xóa lọc</Button>
                            </Col>
                          </Row>
                        </Form.Item>
                      </Radio.Group>
                    </Card>

                    <p></p>
                    <Row justify="center">
                      <Space>
                        <Col span={4} >
                          <Button shape="round" htmlType="submit" icon={<PlusOutlined />}>Thêm</Button>
                        </Col>

                        <Col span={4}>
                          <Button style={{ background: '#292929', color: '#ffffff' }}
                            onClick={SearchAllTest}
                            shape="round"
                            htmlType="submit"
                            icon={<SearchOutlined />}>Tìm</Button>
                        </Col>
                      </Space>
                    </Row>
                  </p>

                  <Menu style={{ height: '50vh', overflow: 'auto' }}>
                    <Button size="large" style={styleCardTest} icon={<QuestionCircleTwoTone />}> Test-01</Button>
                  </Menu>
                </Card>
              </div>
            </Col>

            <Col className="question" span={6}>
              <div style={style}>
                <Card style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
                  <Space><h1 level={1}>Câu hỏi</h1>
                    <Button style={{ color: '#000000' }} shape="round" onClick={showModal}>Tạo câu hỏi</Button>
                    <Button style={{ color: '#000000' }} shape="round" onClick={SearchAllQuestion}>Tìm</Button>
                  </Space>
                  <Modal title="Tạo câu hỏi"
                    visible={isModalVisible}
                    okText={"Tạo"}
                    cancelText={"Hủy"}
                    onOk={AddQuestion}
                    onCancel={handleCancel}>

                    <p>Câu hỏi</p>

                    <Select defaultValue="1" style={{ width: 150 }} onChange={hanldeSubject}>
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
                      <Image style={{ width: 100, height: 100 }} src="null"></Image>
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
                  {currentQuestion.map((question, index) => (
                  
                      <Card id={question.id} key={index}
                        style={{ width: 380, background: '#fafafa' }}
                        actions={[<PlusOutlined key="add" />,
                        <EditOutlined key="edit" />,
                        <CloseOutlined key="delete" onClick={deleteQuestionById} />,]}>

                        <Text>{question.content}</Text>
                        <br></br>
                        <Radio.Group defaultActiveKey="1" onChange={callback}>
                          <Radio value={1}> A. -10</Radio>
                          <Radio value={2}>B. -1</Radio>
                          <Radio value={3}>C. 5</Radio>
                          <Radio value={4}>D. 0</Radio>
                        </Radio.Group>
                      </Card>
                
                  ))
                  }

                  <Card style={{ width: 380, background: '#fafafa' }}
                    actions={[<PlusOutlined key="add" />,
                    <EditOutlined key="edit" />,
                    <CloseOutlined key="exit" />,]}>
                    <p> Which of the following numbers is fartherest from the number 1 on the number line ?</p>

                    <Input></Input>
                  </Card>

                </Card>
              </div>
            </Col>

            <Col className="demo" span={12}>
              <div style={style}>
                <Card style={{ height: '100vh', overflow: 'auto' }}>
                  <h1 level={1}>Demo</h1>
                  <Row gutter={[8, 8]}>
                    <Col span={12}>
                      <p>Tên bài test</p>
                      <Form.Item>
                        <Input style={{ width: 311 }}
                          placeholder="Nhập tên bài test" /></Form.Item>
                      <Row gutter={[48, 8]}>
                        <Col span={12}>
                          {
                            knowledgerLevel['' + knowledgerType].map((show, value) => {
                              return (
                                <Radio.Button size="large" value={value} >{show}</Radio.Button>

                              )
                            })
                          }
                          <DatePicker
                            onChange={handleDateTest} />
                        </Col>

                        <Col span={12} >
                          <Input
                            placeholder="Thời gian"
                            prefix={<FieldTimeOutlined />}
                            style={{ width: 92, padding: '3px 5px' }}></Input>
                          <p></p>
                          <Input
                            style={{ width: '50%' }}
                            placeholder="Nhập điểm"></Input>
                        </Col>
                      </Row>

                    </Col>

                    <Col span={12}>
                      <Form.Item name="Position">
                        <p>Code test</p>
                        <Select mode="tags" style={{ width: '50%', minHeight: 50 }}
                          placeholder="Tags Mode"
                          onChange={handleCodeTest}>

                          <Option value="BlC001">BlC001</Option>
                          <Option value="BlC002">BlC002</Option>
                          <Option value="BlC003">BlC003</Option>
                          <Option value="BlC004">BlC004</Option>
                          <Option value="BlC005">BlC005</Option>
                          <Option value="BlC006">BlC006</Option>
                        </Select>
                        <p></p>
                        <Button
                          style={{ width: '50%', background: "#262626", color: "#ffffff" }}
                          shape="round"
                          type="primary"
                          icon={<SaveOutlined />}
                          htmlType="submit">Lưu</Button>
                      </Form.Item>
                    </Col>

                    <p></p>
                    <Card style={{ width: 800, background: '#fafafa' }} actions={[<CloseOutlined key="exit" />,]}>
                      <p> The executives pointed to immigration ______ the biggest drivers of the domestic market</p>
                      <Radio.Group defaultActiveKey="1" onChange={callback}>
                        <Radio value={1}> A. Rather</Radio><br></br>
                        <Radio value={2}>B. As one of</Radio><br></br>
                        <Radio value={3}>C. Resulting in</Radio><br></br>
                        <Radio value={4}>D. As leading</Radio><br></br>
                      </Radio.Group>
                    </Card>

                    <Card style={{ width: 800, background: '#fafafa' }} actions={[<CloseOutlined key="exit" />,]}>

                      <Row>
                        <Col span={12}>
                          <p> The executives pointed to immigration ______ the biggest drivers of the domestic market</p>
                          <TextArea width={300} height={300} maxLength={1000} onChange={onChange} />
                        </Col>

                        <Col span={6} offset={4}>
                          <Image width={150} height={150} src="error" fallback="data:image/png;base64,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" />
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </Content>
      </Card>
    </Layout>
  );
}