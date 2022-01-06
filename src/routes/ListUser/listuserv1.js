import React from 'react';
import moment from 'moment';
import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu, Descriptions, Card ,TreeSelect, Button , Dropdown,Divider,Table ,Tag, Tabs, Space} from 'antd';
import { UserOutlined , MailOutlined , PhoneOutlined ,SearchOutlined , PlusOutlined , CloseOutlined} from '@ant-design/icons';
import { Form, Input,  Select , Radio , DatePicker} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const dateFormat = 'YYYY-MM-DD';
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];
const menuContact = (
  <Form.Item >
    <Form.Item name="Contact" label="Contact">
        <Form.Item>
          <Input placeholder="Gmail" prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder="Phone" prefix={<PhoneOutlined />}/>
        </Form.Item>
      </Form.Item>
  </Form.Item>
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
      <Sider  width={500} theme="light" className="site-layout-background" >
      <Menu mode="inline">
      <Divider>Bộ lọc</Divider>
      
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
      <Form.Item>
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
      </Form.Item>
      
      <Form.Item >
        <Space>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>Search</Button>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>Add</Button>
          <Button type="primary" htmlType="submit" icon={<CloseOutlined />}>Delete</Button>
        </Space>
      </Form.Item>
      

      </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>

          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" tab="Board" key="1">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Sắp tới" key="soon">
                  {/* <Card>
                   <Descriptions theme="dark" bordered title="User Info">
                    <Descriptions.Item label="Code">BLC001</Descriptions.Item>
                    <Descriptions.Item label="Position">Blockchain</Descriptions.Item>
                    <Descriptions.Item label="Role">Java</Descriptions.Item>
                    <Descriptions.Item label="Level">Junior</Descriptions.Item>
                    <Descriptions.Item label="Reporter"> Lâm</Descriptions.Item>
                    <Descriptions.Item label="Date">
                      <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
                    </Descriptions.Item>

                    <Descriptions.Item >
                    <Dropdown overlay={menuContact} placement="bottomCenter">
                      <Button label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                    </Dropdown>
                    </Descriptions.Item>
                    </Descriptions> 
                  </Card> */}
                  <Table dataSource={data}>
                    <ColumnGroup title="Name">
                      <Column title="First Name" dataIndex="firstName" key="firstName" />
                      <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>

                      <Column title="Code" dataIndex="code" key="code" />
                      <Column title="Phòng ban" dataIndex="room" key="room" />
                      <Column title="Level" dataIndex="level" key="level" />

                    <ColumnGroup title="Liên lạc">
                      <Column title="Gmail" dataIndex="gmail" key="gmail" />
                      <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                    </ColumnGroup>
                      <Column title="Vị trí" dataIndex="tags" key="tags" render={tags => (<>{tags.map(tag => (
                        <Tag color="blue" key={tag}>{tag}</Tag>))}</>)}/>
                     <Column title="Chức năng" key="action" render={(text, record) => (
                      <Space size="middle">
                        <a>Edit</a>
                        <a>Delete</a>
                      </Space>)}/>
                      </Table>
                </TabPane>

                <TabPane tab="Hôm nay" key="today">
                <Table dataSource={data}>
                    <ColumnGroup title="Name">
                      <Column title="First Name" dataIndex="firstName" key="firstName" />
                      <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>

                      <Column title="Code" dataIndex="code" key="code" />
                      <Column title="Phòng ban" dataIndex="room" key="room" />
                      <Column title="Level" dataIndex="level" key="level" />

                    <ColumnGroup title="Liên lạc">
                      <Column title="Gmail" dataIndex="gmail" key="gmail" />
                      <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                    </ColumnGroup>
                      <Column title="Vị trí" dataIndex="tags" key="tags" render={tags => (<>{tags.map(tag => (
                        <Tag color="blue" key={tag}>{tag}</Tag>))}</>)}/>
                     <Column title="Chức năng" key="action" render={(text, record) => (
                      <Space size="middle">
                        <a>Edit</a>
                        <a>Delete</a>
                      </Space>)}/>
                      </Table>,
                </TabPane>
                  
                <TabPane tab="Quá hạn" key="late">
                <Table dataSource={data}>
                    <ColumnGroup title="Name">
                      <Column title="First Name" dataIndex="firstName" key="firstName" />
                      <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>

                      <Column title="Code" dataIndex="code" key="code" />
                      <Column title="Phòng ban" dataIndex="room" key="room" />
                      <Column title="Level" dataIndex="level" key="level" />

                    <ColumnGroup title="Liên lạc">
                      <Column title="Gmail" dataIndex="gmail" key="gmail" />
                      <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                    </ColumnGroup>
                      <Column title="Vị trí" dataIndex="tags" key="tags" render={tags => (<>{tags.map(tag => (
                        <Tag color="blue" key={tag}>{tag}</Tag>))}</>)}/>
                     <Column title="Chức năng" key="action" render={(text, record) => (
                      <Space size="middle">
                        <a>Edit</a>
                        <a>Delete</a>
                      </Space>)}/>
                      </Table>,
                </TabPane>
              </Tabs>
            </TabPane>

            <TabPane tab="Tab 1" tab="Calendar" key="2"> 
              <Tabs>
              <TabPane tab="Sắp tới" key="soon">
              <Table dataSource={data}>
                    <ColumnGroup title="Name">
                      <Column title="First Name" dataIndex="firstName" key="firstName" />
                      <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>

                      <Column title="Code" dataIndex="code" key="code" />
                      <Column title="Phòng ban" dataIndex="room" key="room" />
                      <Column title="Level" dataIndex="level" key="level" />

                    <ColumnGroup title="Liên lạc">
                      <Column title="Gmail" dataIndex="gmail" key="gmail" />
                      <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                    </ColumnGroup>
                      <Column title="Vị trí" dataIndex="tags" key="tags" render={tags => (<>{tags.map(tag => (
                        <Tag color="blue" key={tag}>{tag}</Tag>))}</>)}/>
                     <Column title="Chức năng" key="action" render={(text, record) => (
                      <Space size="middle">
                        <a>Edit</a>
                        <a>Delete</a>
                      </Space>)}/>
                      </Table>,
                </TabPane>

                <TabPane tab="Hôm nay" key="today">
                <Table dataSource={data}>
                    <ColumnGroup title="Name">
                      <Column title="First Name" dataIndex="firstName" key="firstName" />
                      <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>

                      <Column title="Code" dataIndex="code" key="code" />
                      <Column title="Phòng ban" dataIndex="room" key="room" />
                      <Column title="Level" dataIndex="level" key="level" />

                    <ColumnGroup title="Liên lạc">
                      <Column title="Gmail" dataIndex="gmail" key="gmail" />
                      <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                    </ColumnGroup>
                      <Column title="Vị trí" dataIndex="tags" key="tags" render={tags => (<>{tags.map(tag => (
                        <Tag color="blue" key={tag}>{tag}</Tag>))}</>)}/>
                     <Column title="Chức năng" key="action" render={(text, record) => (
                      <Space size="middle">
                        <a>Edit</a>
                        <a>Delete</a>
                      </Space>)}/>
                      </Table>,
                </TabPane>
                <TabPane tab="Quá hạn" key="late">
                <Table dataSource={data}>
                    <ColumnGroup title="Name">
                      <Column title="First Name" dataIndex="firstName" key="firstName" />
                      <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>

                      <Column title="Code" dataIndex="code" key="code" />
                      <Column title="Phòng ban" dataIndex="room" key="room" />
                      <Column title="Level" dataIndex="level" key="level" />

                    <ColumnGroup title="Liên lạc">
                      <Column title="Gmail" dataIndex="gmail" key="gmail" />
                      <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                    </ColumnGroup>
                      <Column title="Vị trí" dataIndex="tags" key="tags" render={tags => (<>{tags.map(tag => (
                        <Tag color="blue" key={tag}>{tag}</Tag>))}</>)}/>
                     <Column title="Chức năng" key="action" render={(text, record) => (
                      <Space size="middle">
                        <a>Edit</a>
                        <a>Delete</a>
                      </Space>)}/>
                      </Table>,
                </TabPane>
              </Tabs>
            </TabPane>
            
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}