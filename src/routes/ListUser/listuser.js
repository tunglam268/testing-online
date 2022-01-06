import React from 'react';
import moment from 'moment';
import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu,Row,Col, Descriptions, Card ,TreeSelect, Button , Dropdown,Divider,Table ,Tag, Tabs, Space} from 'antd';
import { UserOutlined , MailOutlined ,SettingOutlined , EditOutlined, EllipsisOutlined, PhoneOutlined ,SearchOutlined , PlusOutlined , CloseOutlined} from '@ant-design/icons';
import { Form, Input,  Select , Radio , DatePicker} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const dateFormat = 'YYYY-MM-DD';
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];
const menuContact = (
  <Card  style={{ width: '99%'}}>
  <Row>
    <Col span={14} >
  <Form.Item style={{ width: '150%'}}  >
    <Form.Item name="Contact" label="Contact">
        <Form.Item>
          <Input placeholder="Gmail" prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder="Phone" prefix={<PhoneOutlined />}/>
        </Form.Item>
        
        
        <Form.Item>
          <p>Tùy chọn gửi code</p>
          <Select>
            <Option value="sms">Qua SMS</Option>
            <Option value="gmail">Qua Gmail</Option>
          </Select>
          <p></p>
          <Button>Gửi</Button>
        </Form.Item>
      </Form.Item>
  </Form.Item>
    </Col>
  </Row>
  </Card>
);

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'Nguyen',
    lastName: 'Van A',
    code: 'BLC001',
    room: 'P.CN. BLOCKCHAIN',
    level: 'Java developer',
    tags: ['junior','freshser'],
    gmail:'abc@gmail.com',
    phone: 123456,
  },
  {
    key: '2',
    firstName: 'Nguyen',
    lastName: 'Van A',
    code: 'BLC001',
    room: 'P.CN. BLOCKCHAIN',
    level: 'Java developer',
    tags: ['junior','freshser'],
    gmail:'abc@gmail.com',
    phone: 123456,
  },
  {
    key: '3',
    firstName: 'Nguyen',
    lastName: 'Van A',
    code: 'BLC001',
    room: 'P.CN. BLOCKCHAIN',
    level: 'Java developer',
    tags: ['junior','freshser'],
    gmail:'abc@gmail.com',
    phone: 123456,
  },
];


function handleChange(value) {
  console.log(`selected ${value}`);
}

function callback(key) {
  console.log(key);
}

export default function ListUser() {


  return (
    <Layout>
      <Header className="header">
      <div className="logo" />
      <Menu mode="inline" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to ="/listuser"/>Lịch test</Menu.Item>   
        <Menu.Item key="2"><Link to ="/question"/>Bộ câu hỏi</Menu.Item>
        <Menu.Item key="3">Đã hoàn thành</Menu.Item>
        <Menu.Item key="4">Tài liệu</Menu.Item>
          <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title ="Account">
            <Menu.Item key="account" >Quản lý tài khoản</Menu.Item>
            <Menu.Item key="logout"><Link to ="/"/>Đăng xuất</Menu.Item>
          </SubMenu>
        
      </Menu>
    </Header>

    <Layout>
      <Sider  width={1852} theme="light" className="site-layout-background" >
        <Row>
          <Col span={6} push={18}>  
            <Card>
            <Form.Item name="Name" label="Name" style={{ width: '89%'}}><Input placeholder="Input Name" prefix={<UserOutlined />}/></Form.Item>

            <Form.Item name="Room" label="Room" style={{ width: '89%' }}><TreeSelect placeholder="Select an option"/></Form.Item>

            <Form.Item name="Position" label="Position">
              <Select mode="tags" style={{ width: '89%' }} placeholder="Tags Mode" onChange={handleChange}>{children}</Select>
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

            
             <Form.Item  name ="DatePicker" label="DatePicker" >
              <DatePicker />
            </Form.Item>

            <Form.Item name="Contact" label="Contact">
              <Form.Item>
                <Input placeholder="Gmail" style={{ width: '89%'}} prefix={<MailOutlined />}/>
              </Form.Item>

              <Form.Item>
                <Input placeholder="Phone" style={{ width: '89%'}} prefix={<PhoneOutlined />}/>
              </Form.Item>
              
            </Form.Item>
      
            <Form.Item >
              <Space>
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>Search</Button>
                <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>Add</Button>
                <Button type="primary" htmlType="submit" icon={<CloseOutlined />}>Delete</Button>
               </Space>
            </Form.Item>
      

      
            </Card>
          </Col>

          <Col span={18} pull={6}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="board" tab="Board" key="board">
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Soon" tab="Sắp tới" key="soon">
                    <Menu>
                    <Card title="Nguyễn Văn A" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
                      <Row>
                        <Col span={12}>
                          <p>Code: BLC001</p>
                          <p>Phòng Ban: Blockchain</p>
                          <p>Vị trí: Java developer</p>
                          <p>Level: Junior</p>
                          <p>Reporter: Tung Lam</p>
                        </Col>

                        <Col span={12}>
                            <DatePicker/>
                            <p></p>
                            <Dropdown overlay={menuContact} placement="bottomLeft">
                              <Button type ="primary" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                    
                    </Menu>
                    
                  </TabPane>

                  <TabPane tab="Today" tab="Hôm nay" key="today">
                  <Menu>
                    <Card title="Nguyễn Văn A" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
                      <Row>
                        <Col span={12}>
                          <p>Code: BLC001</p>
                          <p>Phòng Ban: Blockchain</p>
                          <p>Vị trí: Java developer</p>
                          <p>Level: Junior</p>
                          <p>Reporter: Tung Lam</p>
                        </Col>

                        <Col span={12}>
                            <DatePicker/>
                            <p></p>
                            <Dropdown overlay={menuContact} placement="bottomLeft">
                              <Button type ="primary" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                    
                    </Menu>
                  </TabPane>

                  <TabPane tab="Late" tab="Quá hạn" key="late">
                  <Menu>
                    <Card title="Nguyễn Văn A" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
                      <Row>
                        <Col span={12}>
                          <p>Code: BLC001</p>
                          <p>Phòng Ban: Blockchain</p>
                          <p>Vị trí: Java developer</p>
                          <p>Level: Junior</p>
                          <p>Reporter: Tung Lam</p>
                        </Col>

                        <Col span={12}>
                            <DatePicker/>
                            <p></p>
                            <Dropdown overlay={menuContact} placement="bottomLeft">
                              <Button type ="primary" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                    
                    </Menu>
                  </TabPane>
                </Tabs>
              </TabPane>

              <TabPane tab="Tab 2" tab="Lịch" key="2">
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="Soon" tab="Sắp tới" key="soon">
                        
                  </TabPane>

                  <TabPane tab="Today" tab="Hôm nay" key="today">

                  </TabPane>

                  <TabPane tab="Late" tab="Quá hạn" key="late">

                  </TabPane>
                </Tabs>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Sider>
    </Layout>
  </Layout>
  );
}