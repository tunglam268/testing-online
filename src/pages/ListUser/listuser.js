import React from 'react';
import moment from 'moment';

import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu, Row, Col, Popover, Card, Button, Tabs, Space ,Switch ,Typography } from 'antd';
import { UserOutlined, MailOutlined, EditOutlined, PhoneOutlined, SearchOutlined, PlusOutlined, FileTextOutlined, CloseOutlined, FilterOutlined } from '@ant-design/icons';
import { Form, Input, Select, Radio, DatePicker } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';
import Avatar from 'antd/lib/avatar/avatar';
import MenuContext from 'antd/lib/menu/MenuContext';

const { Text} = Typography;
const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const styleContent = { width: 1300,background: '#ffffff', padding: '25px 20px', minHeight: 1000 };
const styleCard = { background: '#fafafa', width: 400}
const styleSider = { background: '#ffffff', padding: '0 0  ' }
const styleHeader ={background: '#ffffff'}
const dateFormat = 'YYYY-MM-DD';


 const menuContact = (

  <Row gutter={[16, 16]}>
    <Col span={14}>   
     <p>Liên hệ</p>
        <Form.Item >
          <Input style={{width:'100%'}} placeholder="Gmail" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item>
          <Input style={{width:'100%'}} placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
        </Form.Item>
    </Col>

    <Col span={10}>
    <p>Tùy chọn gửi code</p>
      <Select style={{ width: '95%' }}>
        <Option value="sms">Qua SMS</Option>
        <Option value="gmail">Qua Gmail</Option>
      </Select>
      <br/>
      <br/>
      <Text>Tự động trước 1 tiếng</Text>
      <br/>
      <Switch defaultChecked onChange={onChange} />
    </Col>

    <Col offset={20}>
      <Button type='primary' shape='round'  >Lưu</Button>
    </Col>
  </Row>

)

const popoverCandidate = (
  <Menu >
    <Menu.Item key="1" >Chọn</Menu.Item>
    <Menu.Item key="2" >Gửi code</Menu.Item>
    <Popover content={menuContact}  placement="bottom">
      <Menu.Item key="3">Xem liên hệ</Menu.Item>
    </Popover>
    <Menu.Item key="4" >Thiết lập bài test<NavLink to="/question" /></Menu.Item>
    <Menu.Item key="5" >Chỉnh sửa thông tin</Menu.Item>
    <Menu.Item key="6" >Xóa ứng viên</Menu.Item>
</Menu>
)
  


const detailCandidate = (
  <Popover content={popoverCandidate} placement="right" trigger="click">
  <Card title="Nguyễn Văn A"  style={styleCard}>
    <Row>
      <Col span={14}>
        <Form>
          <Form.Item name="code" label={<Text strong>Code</Text>}>BLC001</Form.Item>
          <Form.Item name="room" label={<Text strong>Phòng ban</Text>}>P.CN Blockchain</Form.Item>
          <Form.Item name="position" label={<Text strong>Vị trí</Text>}>Java Developer</Form.Item>
          <Form.Item name="level" label={<Text strong>Level</Text>}>Junior</Form.Item>
          <Form.Item name="reporter" label={<Text strong>Reporter</Text>}>Tung Lam</Form.Item>
        </Form>
      </Col>

      <Col span={10}>
        <DatePicker />
        
      </Col>
    </Row>
  </Card>
 </Popover>
  
)

const detailCandidateCalendar = (
  <Col span={8}>
    <h2><DatePicker defaultValue={moment('2022-01-09', dateFormat)} disabled /></h2>
    <Card title="Nguyễn Văn C" actions={[<EditOutlined key="edit" />, <CloseOutlined key="exit" />,]} style={styleCard}>
      <Row>
        <Col span={12}>
          <Form>
            <Form.Item name="code" label="Code"></Form.Item>
            <Form.Item name="room" label="Phòng ban"></Form.Item>
            <Form.Item name="position" label="Vị trí"></Form.Item>
            <Form.Item name="level" label="Level"></Form.Item>
            <Form.Item name="reporter" label="Reporter"></Form.Item>
          </Form>
        </Col>

        <Col span={12}>
          <DatePicker />
          <p></p>
          <Popover content={menuContact} placement="bottom">
            <Button style={{ background: '#bfbfbf' }} shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
          </Popover>
        </Col>
      </Row>
    </Card>
  </Col>
)

const handleChange = (value) => {
  console.log(`selected ${value}`);
}

const callback = (key) => {
  console.log(key);
}

// function handleClick(e) {
//   console.log('Click', e)
// }

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export default function ListUser() {

  return (
    <Layout>
      <Header style={styleHeader} className="header">
        <Row>
          <Col span={8}>
            <Menu style={styleHeader} mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><NavLink to="/listuser" />Lịch test</Menu.Item>
              <Menu.Item key="2"><NavLink to="/question" />Bộ câu hỏi</Menu.Item>
              <Menu.Item key="3"><NavLink to="/complete" />Đã hoàn thành</Menu.Item>
              <Menu.Item key="4"><NavLink to="/document" />Tài liệu</Menu.Item>
            </Menu>
          </Col>

          <Col span={2} offset={14}>
            <Menu style={styleHeader} mode="horizontal">
              <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title="Tài khoản">
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
            <Form.Item name="Name" style={{ width: '95%' }}><p>Tên</p><Input placeholder="Nhập tên" prefix={<UserOutlined />} /></Form.Item>

            <Form.Item name="Room" style={{ width: '95%' }}><p>Phòng ban</p>
              <Select placeholder="Lựa chọn" onChange={handleChange}>
                <Option value="1">Java</Option>
                <Option value="2">Python</Option>
                <Option value="3">Golang</Option>
                <Option value="4">JavaScript</Option>
                <Option value="5">NodeJS</Option>
                <Option value="6">MySQL</Option>
              </Select>
            </Form.Item>

            <Form.Item name="Position"><p>Vị trí</p>
              <Select mode="tags" style={{ width: '95%' }} placeholder="Tags Mode" onChange={handleChange}>
                <Option value="1">Fresher</Option>
                <Option value="2">Junior</Option>
                <Option value="3">Senior</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Radio.Group buttonStyle="solid">
                <Space>
                  <Radio.Button value="Fresher">Fresher</Radio.Button>
                  <Radio.Button value="Junior">Junior</Radio.Button>
                  <Radio.Button value="Senior">Senior</Radio.Button>
                </Space>
              </Radio.Group>
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
                    <Input placeholder="Gmail" style={{ width: '89%' }} prefix={<MailOutlined />} />
                  </Form.Item>

                  <Form.Item>
                    <Input placeholder="Số điện thoại" style={{ width: '89%' }} prefix={<PhoneOutlined />} />
                  </Form.Item>

                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Row>
                <Col span={12} offset={6}>
                  <Space size={[32, 16]}>
                    <Button style={{ width: '120%', background: '#bfbfbf' }} htmlType="submit" shape="round" icon={<SearchOutlined />}>Tìm</Button>
                    <Button style={{ width: '120%' }} htmlType="submit" shape="round" icon={<PlusOutlined />}>Thêm</Button>
                  </Space>
                </Col>
              </Row>

              <Col offset={6}>
                <p></p>
                <Button danger style={{ width: '60%', background: '#fafafa' }} htmlType="submit" shape="round" icon={<CloseOutlined />}>Xóa</Button>
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
                    <Space>
                      {detailCandidate}
                      
                    </Space>
                  </Row>
                </TabPane>

                <TabPane tab="tabToday" tab="Hôm nay" key="tabToday">
                  <Row>
                    <Space>
                      
                      
                    </Space>
                  </Row>
                </TabPane>

                <TabPane tab="tabLate" tab="Quá hạn" key="tabLate">
                  <Row>
                    <Space>
                     
                    </Space>
                  </Row>
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab="tabCalendar" tab="Lịch" key="tabCalendar">
              <Row span={8}>
                <Content>
                  <Row gutter={[8, 8]}>
                    {detailCandidateCalendar}
                    

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