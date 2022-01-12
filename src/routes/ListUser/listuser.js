import React from 'react';
import moment from 'moment';

import 'antd/dist/antd.css';
import './listuser.css';
import { Layout, Menu,Row,Col,Popover ,Card , Button , Tabs, Space} from 'antd';
import { UserOutlined , MailOutlined  , EditOutlined, PhoneOutlined ,SearchOutlined , PlusOutlined , CloseOutlined} from '@ant-design/icons';
import { Form, Input,  Select , Radio , DatePicker} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';

const { Header, Sider ,Content} = Layout;
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];
const styleContent = { background: '#ffffff', padding: '30px 20px' };
const styleCard ={background: '#fafafa',  width:400  }

const dateFormat = 'YYYY-MM-DD';
const menuContact = (
  <Form >
    <Form.Item style={{ width: '100%' , padding: '0px 0px'}}  >
      <Form.Item  name="Contact" label="Contact">
        <Form.Item >
          <Input placeholder="Gmail" prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder="Phone" prefix={<PhoneOutlined />}/>
        </Form.Item>
        
        
        <Form.Item>
          <p>Tùy chọn gửi code</p>
          <Select style={{ width: '95%'}}>
            <Option value="sms">Qua SMS</Option>
            <Option value="gmail">Qua Gmail</Option>
          </Select>
          <p></p>
          <Button>Gửi</Button>
          <Button key="exit" icon={<CloseOutlined />}></Button>
        </Form.Item>
      </Form.Item>
    </Form.Item>
  </Form >
);

for (let i = 10; i < 36; i++) {
  children.push(<Option key={'i.toString(36) + i'}>{i.toString(36) + i}</Option>);
}


export default function ListUser() {

  const handleChange =(value) => {
    console.log(`selected ${value}`);
  }
  
  const callback =(key) =>{
    console.log(key);
  }
  return (
    <Layout>
      <Header className="header">
      <div className="logo" />
      <Menu mode="inline" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to ="/listuser"/>Lịch test</Menu.Item>   
        <Menu.Item key="2"><Link to ="/question"/>Bộ câu hỏi</Menu.Item>
        <Menu.Item key="3">Đã hoàn thành</Menu.Item>
        <Menu.Item key="4">Tài liệu</Menu.Item>

        <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title ="Tài khoản">
          <Menu.Item key="account" >Quản lý tài khoản</Menu.Item>
          <Menu.Item key="logout"><Link to ="/"/>Đăng xuất</Menu.Item>
        </SubMenu>
        
      </Menu>
    </Header>

    <Layout>
      <Sider  width={500} theme="light" className="site-layout-background" >
        <Card>
            <h1>Bộ Lọc</h1>
            <Form.Item name="Name" style={{ width: '95%'}}><p>Tên</p><Input placeholder="Input Name" prefix={<UserOutlined />}/></Form.Item>

            <Form.Item name="Room" style={{ width: '95%' }}><p>Phòng ban</p>
              <Select placeholder="Select an option">
                <Option value="">a1</Option>
                <Option value="">a2</Option>
                <Option value="">a3</Option>
                <Option value="">a4</Option>
                <Option value="">a5</Option>
                <Option value="">a6</Option>
              </Select>
            </Form.Item>

            <Form.Item name="Position"><p>Vị trí</p>
              <Select mode="tags" style={{ width: '95%' }} placeholder="Tags Mode" onChange={handleChange}>{children}</Select>
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
                <Form.Item  name ="DatePicker">
                  <DatePicker />
                </Form.Item>
              </Col>

              <Col span={12}>
                <p>Liên lạc</p>
                <Form.Item name="Contact">
                  <Form.Item >
                    <Input placeholder="Gmail" style={{ width: '89%'}} prefix={<MailOutlined />}/>
                  </Form.Item>

                  <Form.Item>
                    <Input placeholder="Phone" style={{ width: '89%'}} prefix={<PhoneOutlined />}/>
                  </Form.Item>
            
                </Form.Item>
              </Col>
            </Row>
          <Form.Item >
              <Space>
                <Button type="primary" htmlType="submit" shape="round" icon={<SearchOutlined />}>Tìm</Button>
                <Button type="primary" htmlType="submit" shape="round" icon={<PlusOutlined />}>Thêm</Button>
                <Button style={{ width: '200%' }} type="primary" htmlType="submit" shape="round"icon={<CloseOutlined />}>Xóa</Button>
               </Space>
          </Form.Item>
        </Card>
      </Sider>
    

      <Content style={styleContent}>
          <h1>Danh Sách</h1>
          <Tabs defaultActiveKey="tabList" size={'large'} type="card" onChange={callback}>
              <TabPane tab="tabBoard" tab="Board" key="tabBoard">
                <Tabs defaultActiveKey="tabTimeline" size={'large'} type="card" onChange={callback}>
                  <TabPane tab="tabSoon" tab="Sắp tới" key="tabSoon">
                    <Row>
                      <Space>
                        <Card title="Nguyễn Văn A" actions={[
                            <EditOutlined key="edit" />,
                            <CloseOutlined key="exit" />,
                            ]} style={ styleCard }>
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
                              <Popover content={menuContact} placement="bottom">
                                <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                              </Popover>
                            </Col>
                          </Row>
                        </Card>

                     <Card title="Nguyễn Văn B" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={styleCard }>
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
                          <Popover content={menuContact} placement="bottom">
                            <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                          </Popover>
                        </Col>
                      </Row>
                    </Card>

                    <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={ styleCard }>
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
                            <Popover content={menuContact} placement="bottom">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                            </Popover>
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
                            ]} style={styleCard }>
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
                              <Popover content={menuContact} placement="bottom">
                                <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                              </Popover>
                            </Col>
                          </Row>
                        </Card>

                     <Card title="Nguyễn Văn B" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={ styleCard }>
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
                          <Popover content={menuContact} placement="bottom">
                            <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                          </Popover>
                        </Col>
                      </Row>
                    </Card>

                    <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={ styleCard }>
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
                            <Popover content={menuContact} placement="bottom">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                            </Popover>
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
                            ]} style={ styleCard }>
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
                              <Popover content={menuContact} placement="bottom">
                                <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                              </Popover>
                            </Col>
                          </Row>
                        </Card>

                     <Card title="Nguyễn Văn B" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={ styleCard }>
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
                          <Popover content={menuContact} placement="bottom">
                            <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                          </Popover>
                        </Col>
                      </Row>
                    </Card>

                    <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={styleCard }>
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
                            <Popover content={menuContact} placement="bottom">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                            </Popover>
                        </Col>
                      </Row>
                    </Card>
                    </Space>
                    </Row>
                  </TabPane>
                </Tabs>
              </TabPane>
              
              <TabPane tab="tabCalendar" tab="Lịch" key="tabCalendar">
              <Row span={8}>
                <Content>
                  <Row gutter={[8, 8]}>
                    <Col span={8}>
                    <Card>
                      <h2><DatePicker defaultValue={moment('2022-01-09', dateFormat)} disabled /></h2>
                      <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={styleCard }>
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
                            <Popover content={menuContact} placement="bottom">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                            </Popover>
                          </Col> 
                        </Row>
                      </Card> 
                    </Card>
                    </Col>
                    
                    <Col span={8}>
                    <Card>
                      <h2><DatePicker defaultValue={moment('2022-01-09', dateFormat)} disabled /></h2>
                      <Card title="Nguyễn Văn C" actions={[
                          <EditOutlined key="edit" />,
                          <CloseOutlined key="exit" />,
                          ]} style={ styleCard }>
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
                            <Popover content={menuContact} placement="bottom">
                              <Button type ="primary" shape="round" label="Liên hệ" icon={<MailOutlined />}>Liên hệ</Button>
                            </Popover>
                          </Col> 
                        </Row>
                      </Card> 
                    </Card>
                    </Col>
                  </Row>
                </Content>
              </Row>     
            </TabPane>
          </Tabs>
      </Content>
    </Layout>
  </Layout>
  );
}