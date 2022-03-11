import React, { useState } from 'react';

import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu, Row, Col, Card, Button, Tabs, Space, Typography } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, SearchOutlined, PlusOutlined, FileTextOutlined, CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { Form, Input, Select, Switch, Popover, DatePicker } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import CandidateCalendar from './candidatecalendar';



const { Text } = Typography;
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const styleContent = { width: 1303, background: '#ffffff', padding: '25px 20px', minHeight: 1000 };
const styleSider = { background: '#ffffff', padding: '0 0  ' }
const styleHeader = { background: '#ffffff' }
const axios = require('axios');
const styleCard = { background: '#fafafa', width: 400 }

function onChange(checked) {
  console.log(`switch to ${checked}`);
}



const callback = (key) => {
  console.log(key);
}

const menuContact = (

  <Row gutter={[16, 16]}>
    <Col span={14}>
      <p>Liên hệ</p>
      <Form.Item >
        <Input style={{ width: '100%' }} placeholder="Gmail" prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item>
        <Input style={{ width: '100%' }} placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
      </Form.Item>
    </Col>

    <Col span={10}>
      <p>Tùy chọn gửi code</p>
      <Select style={{ width: '95%' }}>
        <Option value="sms">Qua SMS</Option>
        <Option value="gmail">Qua Gmail</Option>
      </Select>
      <br />
      <br />
      <Text>Tự động trước 1 tiếng</Text>
      <br />
      <Switch defaultChecked onChange={onChange} />
    </Col>

    <Col offset={20}>
      <Button type='primary' shape='round'  >Lưu</Button>
    </Col>
  </Row>

)

const PopoverReporter = (
  <Card style={{ width: 370 }}>
    <Row>
      <Col span={4}>
        <Avatar size={64} icon={<UserOutlined />}></Avatar>
      </Col>

      <Col span={18} offset={2}>
        <Text strong>Tùng Lâm</Text><br></br>
        <Text>Phòng CN Blockchain</Text><br></br>
        <Text>Email: <Text underline>tunglam@gmail.com</Text></Text>
      </Col>
    </Row>
  </Card>
)

const popoverCandidate = (
  <Menu >
    <Menu.Item key="1" >Chọn</Menu.Item>
    <Menu.Item key="2" >Gửi code</Menu.Item>
    <Popover content={menuContact} placement="bottom">
      <Menu.Item key="3">Xem liên hệ</Menu.Item>
    </Popover>
    <Menu.Item key="4" >Thiết lập bài test<NavLink to="/question" /></Menu.Item>
    <Menu.Item key="5" >Chỉnh sửa thông tin</Menu.Item>
    <Menu.Item key="6" >Xóa ứng viên</Menu.Item>
  </Menu>
)

export default function ListUser() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [candidate, setCandidate] = useState([]);


  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeRoom = (room) => {
    setRoom(room)

  };

  const onChangeLevel = (level) => {
    setLevel(level)

  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };



  const hanldeSearchAll = () => {

    axios.get('http://localhost:8080/staff/listcandidate')
      .then(function (response) {
        setCandidate(response.data)
        console.log("get list")
        console.log(candidate)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handleAdd = () => {
    var data = JSON.stringify({
      "name": name,
      "level": level,
      "phone": phone,
      "email": email,
      "position": room,
    });

    var config = {
      method: 'post',
      url: 'http://localhost:8080/staff/addcandidate',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("add success")
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  const handleDelete = (id) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "name": "lam",
      "level": 1,
      "phone": "091231231",
      "email": "abc@gmail.com",
      "position": "java"
    });

    var config = {
      method: 'delete',
      url: `http://localhost:8080/staff/delete/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
    const post = candidate.filter(item => item.id !== id)
    setCandidate(post)
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
            <Menu style={styleHeader} mode="horizontal" defaultSelectedKeys={['1']}>
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

      <Layout>
        <Card>
          <Sider width={500} theme="light" className="site-layout-background" style={styleSider}>
            <br></br>
            <h1><Avatar style={{ color: '#000000', backgroundColor: '#ffffff' }} shape="square" size={64} icon={<FilterOutlined />}></Avatar>Bộ Lọc</h1>
            <Form.Item style={{ width: '95%' }}><p>Tên</p>
              <Input value={name} onChange={onChangeName} placeholder="Nhập tên" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item name="Room" style={{ width: '95%' }}><p>Phòng ban</p>
              <Select onChange={onChangeRoom} placeholder="Lựa chọn" >
                <Option value="Java">Java</Option>
                <Option value="Python">Python</Option>
                <Option value="Golang">Golang</Option>
                <Option value="JavaScript">JavaScript</Option>
                <Option value="NodeJS">NodeJS</Option>
                <Option value="MySQL">MySQL</Option>
              </Select>

            </Form.Item>

            <Form.Item name="Level"><p>Level</p>
              <Select onChange={onChangeLevel} style={{ width: '95%' }} placeholder="level" >
                <Option value="1">Fresher</Option>
                <Option value="2">Junior</Option>
                <Option value="3">Senior</Option>
              </Select>
            </Form.Item>

            <Row gutter={[8, 8]}>
              <Col span={12}>
                <p>Liên lạc</p>
                <Form.Item >
                  <Input value={email} onChange={onChangeEmail}
                    placeholder="Email" style={{ width: '89%' }} prefix={<MailOutlined />} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <p></p>
               <br></br>            
                  <Form.Item>
                    <Input value={phone} onChange={onChangePhone}
                      placeholder="Số điện thoại" style={{ width: '89%' }} prefix={<PhoneOutlined />} />
                  </Form.Item>           
              </Col>
            </Row>

            <Form.Item>
              <Form>
                <Form.Item><Button style={{ width: '60%', background: '#bfbfbf' }}
                  htmlType="submit" shape="round" icon={<SearchOutlined />}
                  onClick={hanldeSearchAll}>Danh sach ung vien</Button></Form.Item>
                <Form.Item>
                  <Button style={{ width: '60%' }} htmlType="submit" shape="round" icon={<PlusOutlined />}
                    onClick={handleAdd}>Thêm</Button>
                </Form.Item>

                <Form.Item>
                  <Button danger style={{ width: '60%', background: '#fafafa' }}
                    htmlType="reset" shape="round" icon={<CloseOutlined />} >Xóa</Button>
                </Form.Item>
              </Form>


            </Form.Item>
          </Sider>
        </Card>

        <Card>
          <Content style={styleContent}>
            <h1><Avatar style={{ color: '#000000', backgroundColor: '#ffffff' }} shape="square" size={64} icon={<FileTextOutlined />}></Avatar>Danh Sách</h1>
            <Tabs defaultActiveKey="tabList" size={'large'} type="card" onChange={callback}>
              <TabPane tab="Bảng" key="tabBoard">

                {candidate.map((post, index) => {
                  return (
                    <Space>
                      <Col span={8} >
                        <p></p>
                        <Popover placement="right" trigger="click">
                          <Card title={post.name} style={styleCard}>
                            <Row>
                              <Col span={14}>
                                <Form key={index}>
                                  <Form.Item name="code" label={<Text strong>Code</Text>}>{candidate.code}</Form.Item>
                                  <Form.Item name="position" label={<Text strong>Vị trí</Text>}>{post.position}</Form.Item>
                                  <Form.Item name="level" label={<Text strong>Level</Text>}>{post.level}</Form.Item>
                                  <Form.Item name="email" label={<Text strong>Email</Text>}>{post.email}</Form.Item>
                                  <Form.Item name="phone" label={<Text strong>Phone</Text>}>{post.phone}</Form.Item>
                                  <Form.Item name="reporter" label={<Text strong>Reporter</Text>}>
                                    <Popover content={PopoverReporter} trigger="hover" placement="bottom">
                                      <Text >Tung Lam</Text>
                                    </Popover>
                                  </Form.Item>
                                </Form>
                              </Col>

                              <Col span={10}>
                                <DatePicker disabled /><p></p>
                                <Button danger
                                  style={{ width: '60%', background: '#fafafa' }}
                                  htmlType="reset"
                                  shape="round"
                                  onClick={(e) => handleDelete(post.id, e)}
                                  icon={<CloseOutlined />} >Xóa</Button>
                              </Col>
                            </Row>
                          </Card>
                        </Popover>
                      </Col>
                    </Space>
                  )
                })
                }

              </TabPane>

              <TabPane tab="Lịch" key="tabCalendar">
                <Row>
                  <Content>
                    <Row >
                      <CandidateCalendar />
                    </Row>
                  </Content>
                </Row>
              </TabPane>
            </Tabs>
          </Content>
        </Card>
      </Layout>
    </Layout>

  );
}