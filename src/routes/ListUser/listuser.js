import React from 'react';
import moment from 'moment';
import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu,Row,Col, Descriptions, Card ,TreeSelect, Button , Dropdown,Divider,Table ,Tag, Tabs, Space} from 'antd';
import { UserOutlined , MailOutlined ,SettingOutlined , EditOutlined, EllipsisOutlined, PhoneOutlined ,SearchOutlined , PlusOutlined , CloseOutlined} from '@ant-design/icons';
import { Form, Input,  Select , Radio , DatePicker} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';

const { Header, Sider } = Layout;
const dateFormat = 'YYYY-MM-DD';
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];
const menuContact = (
  
  <Row>
  <Col span={14} >
  <Form >
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
  </Form>
  </Col>
  </Row>
);


for (let i = 10; i < 36; i++) {
  children.push(<Option key={'i.toString(36) + i'}>{i.toString(36) + i}</Option>);
}


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
            <Divider>Tìm Kiếm Thông Tin</Divider>
            <Form.Item name="Name" label="Tên" style={{ width: '89%'}}><Input placeholder="Input Name" prefix={<UserOutlined />}/></Form.Item>

            <Form.Item name="Room" label="Phòng ban" style={{ width: '89%' }}><TreeSelect placeholder="Select an option"/></Form.Item>

            <Form.Item name="Position" label="Vị trí">
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
              <Form.Item >
                <Input placeholder="Gmail" style={{ width: '89%'}} prefix={<MailOutlined />}/>
              </Form.Item>

              <Form.Item>
                <Input placeholder="Phone" style={{ width: '89%'}} prefix={<PhoneOutlined />}/>
              </Form.Item>
              
            </Form.Item>
      
            <Form.Item >
              <Space>
                <Button type="primary" htmlType="submit" shape="round" icon={<SearchOutlined />}>Tìm kiếm</Button>
                <Button type="primary" htmlType="submit" shape="round" icon={<PlusOutlined />}>Thêm</Button>
                <Button type="primary" htmlType="submit" shape="round"icon={<CloseOutlined />}>Xóa</Button>
               </Space>
            </Form.Item>
      

      
            </Card>
          </Col>

          <Col span={18} pull={6}>
              
            <Tabs defaultActiveKey="tabBoard" size={'large'} type="card" onChange={callback}>
              <TabPane tab="tabBoard" tab="Board" key="tabBoard">
                <Tabs defaultActiveKey="tabSoon" size={'large'} type="card" onChange={callback}>
                  <TabPane tab="tabSoon" tab="Sắp tới" key="tabSoon">
                    <Row>
                      <Space>
                        <Card title="Nguyễn Văn A" actions={[
                            <EditOutlined key="edit" />,
                            <CloseOutlined key="exit" />,
                            ]} style={{ width: 400 }}>
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
                              <DatePicker/>
                              <p></p>
                              <Dropdown overlay={menuContact} placement="bottomLeft">
                                <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                              </Dropdown>
                            </Col>
                          </Row>
                        </Card>

                     <Card title="Nguyễn Văn B" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
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
                          <DatePicker/>
                          <p></p>
                          <Dropdown overlay={menuContact}  placement="bottomLeft">
                            <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                          </Dropdown>
                        </Col>
                      </Row>
                    </Card>

                    <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
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
                            <DatePicker/>
                            <p></p>
                            <Dropdown overlay={menuContact} placement="bottomLeft">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                    </Space>
                    </Row>

                  </TabPane>

                  <TabPane tab="tabToday" tab="Hôm nay" key="tabToday">
                  <Row>
                      <Space>
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
                                <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                              </Dropdown>
                            </Col>
                          </Row>
                        </Card>

                     <Card title="Nguyễn Văn B" actions={[
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
                            <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                          </Dropdown>
                        </Col>
                      </Row>
                    </Card>

                    <Card title="Nguyễn Văn C" actions={[
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
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                    </Space>
                    </Row>
                  </TabPane>

                  <TabPane tab="tabLate" tab="Quá hạn" key="tabLate">
                  <Row>
                      <Space>
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
                                <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                              </Dropdown>
                            </Col>
                          </Row>
                        </Card>

                     <Card title="Nguyễn Văn B" actions={[
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
                            <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                          </Dropdown>
                        </Col>
                      </Row>
                    </Card>

                    <Card title="Nguyễn Văn C" actions={[
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
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                    </Space>
                    </Row>
                  </TabPane>
                </Tabs>
              </TabPane>

              <TabPane tab="tabCalendar" tab="Lịch" key="tabCalendar">
                <Tabs defaultActiveKey="1" size={'large'} type="card" onChange={callback}>
                  
                  <TabPane tab="tabSoon" tab="Sắp tới" key="tabSoon">
                  <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
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
                            <DatePicker/>
                            <p></p>
                            <Dropdown overlay={menuContact} placement="bottomLeft">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                  </TabPane>

                  <TabPane tab="tabToday" tab="Hôm nay" key="tabToday">
                  <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
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
                            <DatePicker/>
                            <p></p>
                            <Dropdown overlay={menuContact} placement="bottomLeft">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
                  </TabPane>

                  <TabPane tab="tabLate" tab="Quá hạn" key="tabLate">
                  <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={{ width: 400 }}>
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
                            <DatePicker/>
                            <p></p>
                            <Dropdown overlay={menuContact} placement="bottomLeft">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Contact</Button>
                            </Dropdown>
                        </Col>
                      </Row>
                    </Card>
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