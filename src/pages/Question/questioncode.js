import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Layout, Menu, Row, Modal, Col, Image, Button, Card, Tabs, Space, Typography } from 'antd';
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




export default function QuestionCode() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [level, setLevel] = useState("");
  const [img, setImg] = useState("");

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
    setIsModalVisible(true);
  };

  const handleOk = () => {
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
  const handleSearchAllTest = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:8080/staff/getalltest',
     
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
    console.log(`selected ${value}`);
  }

  const callback = (key) => {
    console.log(key);
  }

  return (
    <Layout>
      <Header style={styleHeader} className="header">
        <Row>
          <Col span={8}>
            <Menu style={styleHeader} mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><NavLink to="/listuser" /><Text strong>L???ch test</Text></Menu.Item>
              <Menu.Item key="2"><NavLink to="/question" /><Text strong>B??? c??u h???i</Text></Menu.Item>
              <Menu.Item key="3"><NavLink to="/complete" /><Text strong>???? ho??n th??nh</Text></Menu.Item>
              <Menu.Item key="4"><NavLink to="/document" /><Text strong>T??i li???u</Text></Menu.Item>
            </Menu>
          </Col>

          <Col span={2} offset={14}>
            <Menu style={styleHeader} mode="horizontal">
              <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title={<Text strong>T??i kho???n</Text>}>
                <Menu.Item key="account" ><NavLink to="/manageaccount" />Qu???n l?? t??i kho???n</Menu.Item>
                <Menu.Item key="logout"><NavLink to="/" />????ng xu???t</Menu.Item>
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
                    <h1 level={1}>B??i test</h1>
                    <Select defaultValue="english" style={{ width: 150 }} onChange={handleChange}>
                      <Option value="english">Ti???ng Anh</Option>
                      <Option value="code">Code</Option>
                      <Option value="knowledger">Ki???n th???c chung</Option>
                    </Select>
                  </Space>

                  <p>
                    <Card style={{ background: '#fafafa' }}>
                      <Form.Item name="test"><p>T??n b??i test</p><Input placeholder="Nh???p t??n b??i test" /></Form.Item>
                      <Radio.Group buttonStyle="solid">

                        <Form.Item name="level">
                          <Row gutter={[16, 16]}>
                            <Col>
                              <Radio.Button size="large" value="B1">B1</Radio.Button>
                              <Radio.Button value="B2">B2</Radio.Button>
                              <Radio.Button value="B3">B3</Radio.Button>
                            </Col>

                            <Col>
                              <Button danger style={{ width: '150%', background: '#fafafa' }} shape="round" htmlType="submit" icon={<CloseOutlined />}>X??a l???c</Button>
                            </Col>
                          </Row>
                        </Form.Item>
                      </Radio.Group>
                    </Card>

                    <p></p>
                    <Row justify="center">
                      <Space>
                        <Col span={4} >
                          <Button shape="round" htmlType="submit" icon={<PlusOutlined />}>Th??m</Button>
                        </Col>

                        <Col span={4}>
                          <Button style={{ background: '#292929', color: '#ffffff' }} onClick={handleSearchAllTest} shape="round" htmlType="submit" icon={<SearchOutlined />}>T??m</Button>
                        </Col>
                      </Space>
                    </Row>
                  </p>

                  <Menu style={{ height: '50vh', overflow: 'auto' }}>
                    <Button size="large" style={styleCardTest} icon={<QuestionCircleTwoTone />}> Test-01</Button>
                    <Button size="large" style={styleCardTest} icon={<QuestionCircleTwoTone />}> Test-01</Button>
                    <Button size="large" style={styleCardTest} icon={<QuestionCircleTwoTone />}> Test-01</Button>
                    <Button size="large" style={styleCardTest} icon={<QuestionCircleTwoTone />}> Test-01</Button>
                    <Button size="large" style={styleCardTest} icon={<QuestionCircleTwoTone />}> Test-01</Button>
                    <Button size="large" style={styleCardTest} icon={<QuestionCircleTwoTone />}> Test-01</Button>
                  </Menu>
                </Card>
              </div>
            </Col>

            <Col className="question" span={6}>
              <div style={style}>
                <Card style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
                  <Space><h1 level={1}>C??u h???i</h1>
                    <Button style={{ color: '#000000' }} shape="round" onClick={showModal}>T???o c??u h???i</Button>
                    <Button style={{ color: '#000000' }} shape="round" onClick={handleSearchAllQuestion}>T??m</Button>
                  </Space>
                  <Modal title="T???o c??u h???i" visible={isModalVisible} okText={"T???o"} cancelText={"H???y"} onOk={handleOk} onCancel={handleCancel}>

                    <p>C??u h???i</p>

                    <Select defaultValue="1" style={{ width: 150 }} onChange={hanldeSubject}>
                      <Option value="1"> Ti???ng anh</Option>
                      <Option value="2"> Ki???n th???c chung</Option>
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
                    <p>N???i dung</p>
                    <Space>
                      <Input size='large' onChange={handleImg} />
                      <Input size='large' maxLength={1000} onChange={handleContent} />
                    </Space>

                    <Tabs defaultActiveKey="1" onChange={handleType}>
                      <TabPane tab="Tr???c nghi???m" key="0" >
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

                      <TabPane tab="T??? lu???n" key="1">
                        <TextArea width={100} height={100} maxLength={1000} onChange={onChange} />
                      </TabPane>
                    </Tabs>

                  </Modal>

                  <Card style={{ width: 380, background: '#fafafa' }} actions={[<PlusOutlined key="add" />, <EditOutlined key="edit" />, <CloseOutlined key="exit" />,]}>
                    <p> Which of the following numbers is fartherest from the number 1 on the number line ?</p>
                    <Radio.Group defaultActiveKey="1" onChange={callback}>
                      <Radio value={1}> A. -10</Radio>
                      <Radio value={2}>B. -1</Radio>
                      <Radio value={3}>C. 5</Radio>
                      <Radio value={4}>D. 0</Radio>
                    </Radio.Group>
                  </Card>


                  <Card style={{ width: 380, background: '#fafafa' }} actions={[<PlusOutlined key="add" />, <EditOutlined key="edit" />, <CloseOutlined key="exit" />,]}>
                    <p> Which of the following numbers is fartherest from the number 1 on the number line ?</p>
                    <Radio.Group defaultActiveKey="1" onChange={callback}>
                      <Radio value={1}> A. -10</Radio>
                      <Radio value={2}>B. -1</Radio>
                      <Radio value={3}>C. 5</Radio>
                      <Radio value={4}>D. 0</Radio>
                    </Radio.Group>
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
                      <p>T??n b??i test</p>
                      <Form.Item><Input style={{ width: 311 }} placeholder="Nh???p t??n b??i test" /></Form.Item>
                      <Row gutter={[48, 8]}>
                        <Col span={12}>
                          <Radio.Group size="middle" buttonStyle="solid">
                            <Radio.Button value="B1">B1</Radio.Button>
                            <Radio.Button value="B2">B2</Radio.Button>
                            <Radio.Button value="B3">B3</Radio.Button>
                          </Radio.Group>
                        </Col>

                        <Col span={12}>
                          <Input prefix={<FieldTimeOutlined />} style={{ width: 80, padding: '3px 5px' }}></Input>
                        </Col>
                      </Row>

                    </Col>

                    <Col span={12}>
                      <Form.Item name="Position">
                        <p>Tham gia test</p>
                        <Select mode="tags" style={{ width: '50%', minHeight: 50 }} placeholder="Tags Mode" onChange={handleChange}>
                          <Option value="1">0001</Option>
                          <Option value="2">0002</Option>
                          <Option value="3">0003</Option>
                          <Option value="4">0004</Option>
                          <Option value="5">0005</Option>
                          <Option value="6">0006</Option>
                        </Select>
                        <p></p>
                        <Button style={{ width: '50%', background: "#262626", color: "#ffffff" }} shape="round" type="primary" icon={<SaveOutlined />} htmlType="submit">L??u</Button>
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