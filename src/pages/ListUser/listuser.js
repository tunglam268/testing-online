import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu, Row, Col, Popover, Switch, Card, Button, Tabs, Space, Typography } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, SearchOutlined, PlusOutlined, FileTextOutlined, CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { Form, Input, Select, DatePicker } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import CandidateBoard from './candidateboard';
import CandidateCalendar from './candidatecalendar';
import { createCandidate } from '../../slices/slicecandidate';




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



export default function ListUser() {
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
        <Form>
          <p>Tùy chọn gửi code</p>
          <Form.Item >
            <Select style={{ width: '95%' }}>
              <Option value="sms">Qua SMS</Option>
              <Option value="gmail">Qua Gmail</Option>
            </Select>
          </Form.Item>
          <Form.Item >
            <Text>Tự động trước 1 tiếng</Text><br></br>
            <Switch defaultChecked onChange={onChange} />
          </Form.Item>

        </Form>
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
      <Menu.Item key="6"  >Xóa ứng viên</Menu.Item>
    </Menu>
  )
  const initialCandidateState = {
    id: null,
    name: "",
    level: "",
    room: "",
    email: "",
    phone: "",
  };

  const [candidate, setCandidate] = useState([initialCandidateState]);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCandidate({ ...candidate, [name]: value });
  };

  const handleOptionChange = () => {
    setCandidate({ ...candidate })
  }

  const dispatch = useDispatch();

  const GetListCandidate = () => {
    axios.get('http://localhost:8080/staff/listcandidate')
      .then(function (response) {
        console.log("Get list candidate")
        setCandidate(response.data)
      })

      .catch(function (error) {
        console.log(error);
      });

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

  const newCandidate = () => {
    setCandidate(initialCandidateState);
    setSubmitted(false);
  }

  const DeleteCandiate = (id) => {
    var axios = require('axios');
    var config = {
      method: 'delete',
      url: `http://localhost:8080/staff/delete/${id}`,
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
            <h1><Avatar
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
              shape="square"
              size={64}
              icon={<FilterOutlined />}>
            </Avatar>Bộ Lọc</h1>
            <Form.Item style={{ width: '95%' }}><p>Tên</p>
              <Input
                name='name'
                value={candidate.name || ''}
                onChange={handleInputChange}
                placeholder="Nhập tên"
                prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item name="room" style={{ width: '95%' }}><p>Phòng ban</p>
              <Select
                onChange={handleOptionChange}
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
                onChange={handleOptionChange}
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
                      value={candidate.email || ''}
                      onChange={handleInputChange}
                      placeholder="Email"
                      style={{ width: '89%' }}
                      prefix={<MailOutlined />} />
                  </Form.Item>

                  <Form.Item>
                    <Input
                      name="phone"
                      value={candidate.phone || ''}
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
                      onClick={GetListCandidate}>Tìm</Button>
                    <Button
                      style={{ width: '120%' }}
                      htmlType="submit"
                      shape="round"
                      icon={<PlusOutlined />}
                      onClick={AddCandidate}>Thêm</Button>
                  </Space>
                </Col>
              </Row>

              {/* <Col offset={6}>
                <p></p>
                <Button danger style={{ width: '60%', background: '#fafafa' }} htmlType="reset" shape="round" icon={<CloseOutlined />} >Xóa</Button>
              </Col> */}


            </Form.Item>
          </Sider>
        </Card>

        <Card>
          <Content style={styleContent}>
            <h1><Avatar style={{ color: '#000000', backgroundColor: '#ffffff' }} shape="square" size={64} icon={<FileTextOutlined />}></Avatar>Danh Sách</h1>
            <Tabs defaultActiveKey="tabList" size={'large'} type="card" onChange={callback}>
              <TabPane tab="tabBoard" tab="Bảng" key="tabBoard">
                <Tabs defaultActiveKey="tabTimeline" size={'large'} type="card" onChange={callback}>
                  <TabPane tab="tabSoon" tab="Sắp tới" key="tabSoon">
                    <Row>

                    </Row>
                  </TabPane>

                  <TabPane tab="tabToday" tab="Hôm nay" key="tabToday">
                    <Row>
                      <CandidateBoard />
                    </Row>
                  </TabPane>

                  <TabPane tab="tabLate" tab="Quá hạn" key="tabLate">
                    <Row>
                      <CandidateBoard />
                    </Row>
                  </TabPane>
                </Tabs>
              </TabPane>

              <TabPane tab="tabCalendar" tab="Lịch" key="tabCalendar">
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