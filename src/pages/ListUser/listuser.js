import React, { useState } from 'react';

import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu, Row, Col, Card, Button, Tabs, Space, Typography } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, SearchOutlined, PlusOutlined, FileTextOutlined, CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio, DatePicker } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import CandidateBoard from './candidateboard';
import CandidateCalendar from './candidatecalendar';
import axios from 'axios'

const { Text } = Typography;
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const styleContent = { width: 1514, background: '#ffffff', padding: '25px 20px', minHeight: 1000 };
const styleSider = { background: '#ffffff', padding: '0 0  ' }
const styleHeader = { background: '#ffffff' }





const callback = (key) => {
  console.log(key);
}

// function handleClick(e) {
//   console.log('Click', e)
// }


export default function ListUser() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [position, setPosition] = useState("");
  const [calendar, setCalendar] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeRoom = (selectObj) => {
    const room = selectObj.value;
    setRoom(room);
  };

  const onChangePosition = (selectObj) => {
    const position = selectObj.value;
    setPosition(position);
  };

  const onChangeCalendar = (e) => {
    const calendar = e.target.value;
    setCalendar(calendar);
  };

  const onChangeGmail = (e) => {
    const gmail = e.target.value;
    setGmail(gmail);
  };

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const hanldeSearchAll = () => {
    var axios = require('axios');
    axios.get('http://localhost:8080/staff/listcandidate')
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

              <Input value={name} onChange={onChangeName} placeholder="Nhập tên" prefix={<UserOutlined />} /></Form.Item>

            <Form.Item name="Room" style={{ width: '95%' }}><p>Phòng ban</p>
              <Select onChange={onChangeRoom} placeholder="Lựa chọn" >
                <Option value="1">Java</Option>
                <Option value="2">Python</Option>
                <Option value="3">Golang</Option>
                <Option value="4">JavaScript</Option>
                <Option value="5">NodeJS</Option>
                <Option value="6">MySQL</Option>
              </Select>
            </Form.Item>

            <Form.Item name="Position"><p>Vị trí</p>
              <Select onChange={onChangePosition} mode="tags" style={{ width: '95%' }} placeholder="Tags Mode" >
                <Option value="Fresher">Fresher</Option>
                <Option value="Junior">Junior</Option>
                <Option value="Senior">Senior</Option>
              </Select>
            </Form.Item>

            {/* <Form.Item>
                <Radio.Group buttonStyle="solid">
                  <Space>
                    <Radio.Button value="Fresher">Fresher</Radio.Button>
                    <Radio.Button value="Junior">Junior</Radio.Button>
                    <Radio.Button value="Senior">Senior</Radio.Button>
                  </Space>
                </Radio.Group>
              </Form.Item> */}

            <Row gutter={[8, 8]}>
              <Col span={12}>
                <p>Lịch</p>
                <Form.Item name="DatePicker">
                  <DatePicker onChange={onChangeCalendar} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <p>Liên lạc</p>
                <Form.Item name="Contact">
                  <Form.Item >
                    <Input onChange={onChangeGmail} placeholder="Gmail" style={{ width: '89%' }} prefix={<MailOutlined />} />
                  </Form.Item>

                  <Form.Item>
                    <Input onChange={onChangePhone} placeholder="Số điện thoại" style={{ width: '89%' }} prefix={<PhoneOutlined />} />
                  </Form.Item>

                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Row>
                <Col span={12} offset={6}>
                  <Space size={[32, 16]}>
                    <Button style={{ width: '120%', background: '#bfbfbf' }} htmlType="submit" shape="round" icon={<SearchOutlined />} onClick={hanldeSearchAll}>Tìm</Button>
                    <Button style={{ width: '120%' }} htmlType="submit" shape="round" icon={<PlusOutlined />} >Thêm</Button>
                  </Space>
                </Col>
              </Row>

              <Col offset={6}>
                <p></p>
                <Button danger style={{ width: '60%', background: '#fafafa' }} htmlType="submit" shape="round" icon={<CloseOutlined />} >Xóa</Button>
              </Col>


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
                      <CandidateBoard />
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