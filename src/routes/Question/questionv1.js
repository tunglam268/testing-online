import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Layout, Menu, Row, Modal ,Col,Image, Button , Divider, Card ,Tabs, Space} from 'antd';
import {  SearchOutlined , PlusOutlined ,UserOutlined, CloseOutlined} from '@ant-design/icons';
import { Form, Input,  Select , Radio , } from 'antd';
import { Link } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';



const { Header, Content, Sider } = Layout;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];


for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function callback(key) {
  console.log(key);
}

export default function Questionv1() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = e => {
    console.log('Change:', e.target.value);
  };

  
  return (
    <Layout>
      <Header className="header">
      <div className="logo" />
      <Menu mode="inline" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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
      
      <Divider>Bài test</Divider>
      <Menu>
        <Card >
        <div > Chọn bài test
        <p></p>
        <Select defaultValue="english"  style={{ width: 150 }} onChange={handleChange}>
          <Option value="english"> Tiếng anh</Option>
          <Option value="knowledger"> Kiến thức chung</Option>
          <Option value="code"> Code</Option>
        </Select> 
        </div>

        <p></p>
        <Form.Item name="test" label="Tên bài test"><Input placeholder="Place holder"/></Form.Item>
        
        <Form.Item label="Level">
        <Radio.Group buttonStyle="solid">
          <Space>
          <Radio.Button value="B1">B1</Radio.Button>
          <Radio.Button value="B2">B2</Radio.Button>
          <Radio.Button value="B3">B3</Radio.Button>
          <Button type="primary" htmlType="submit" icon={<CloseOutlined />}>Delete</Button>
          </Space>
        </Radio.Group>
        
      </Form.Item>
      </Card>
      
      <p></p>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>Add</Button>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>Search</Button>
        </Space>
      </Form.Item>

      <Form.Item>
        
          <Button style={{ width: '50%' }}> Test-01</Button><br></br>
          <Button style={{ width: '50%' }}> Test-01</Button><br></br>
          <Button style={{ width: '50%' }}> Test-01</Button><br></br>
          <Button style={{ width: '50%' }}> Test-01</Button><br></br>
          <Button style={{ width: '50%' }}> Test-01</Button><br></br>
        
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
          
          <Row>
            
            <Col span={12}><Space>Câu hỏi
            <Button type="primary" onClick={showModal}>Tạo câu hỏi</Button>
            </Space>
              <Modal title="Tạo câu hỏi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Menu>
                <p>Câu hỏi</p>
                
                <Select defaultValue="english"  style={{ width: 150 }} onChange={handleChange}>
                  <Option value="english"> Tiếng anh</Option>
                  <Option value="knowledger"> Kiến thức chung</Option>
                  <Option value="code"> Code</Option>
                  <Space></Space>
                </Select> 
                <p></p>
                <p>Level</p>
                  
                    <Radio.Group buttonStyle="solid">
                      <Space>
                      <Radio.Button value="B1">B1</Radio.Button>
                      <Radio.Button value="B2">B2</Radio.Button>
                      <Radio.Button value="B3">B3</Radio.Button>
                      </Space>
                    </Radio.Group>
                  
                  
                  <p></p>
                  <p>Nội dung</p>
                  <Space>
                  <Image width={100} height={100} src="error" fallback="data:image/png;base64,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"/>
                  <TextArea width={100} height={100} maxLength={1000} onChange={onChange} />
                  </Space>

                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Trắc nghiệm" key="1">
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
                    
                    <TabPane tab="Tự luận" key="2">
                      <TextArea width={100} height={100} maxLength={1000} onChange={onChange} />
                    </TabPane>
                  </Tabs>
                </Menu>
               </Modal>
              <Card>

              </Card>
            </Col>
            

            
            <Col span={12}>Demo<p></p>
            <Card>
              <p>
                <p>Tên bài test</p>
              </p>
              <Input style={{ width: '50%' }} maxLength={100} onChange={onChange} />
              <p></p>
              <Radio.Group buttonStyle="solid">
                      <Space>
                      <Radio.Button value="B1">B1</Radio.Button>
                      <Radio.Button value="B2">B2</Radio.Button>
                      <Radio.Button value="B3">B3</Radio.Button>
                      </Space>
              </Radio.Group>

              <p></p>
              <Form.Item name="Position" label="Tham gia test">
                
                <Select mode="tags" style={{ width: '50%' }} placeholder="Tags Mode" onChange={handleChange}>{children}</Select>
                  <Button type="primary" htmlType="submit">Lưu</Button>  
              </Form.Item>
              <Card title="Câu hỏi 1" extra={<a href="#">Delete</a>} style={{ width: 300 }}>
              <Radio.Group>
                      <Radio value={1}>A
                  
                      </Radio>
                      <br></br>

                      <Radio value={2}>B
                    
                      </Radio>
                      <br></br>
                      
                      <Radio value={3}>C
                      
                      </Radio>
                      <br></br>
                      
                      <Radio value={4}>D
            
                      </Radio>
                      <br></br>

                    </Radio.Group>
              </Card>
             
              </Card>
            </Col>
            
          </Row>
          
          {/* <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" tab="Câu hỏi" key="1">
              
              <Button type="primary" onClick={showModal}>Tạo câu hỏi</Button>
              <Modal title="Tạo câu hỏi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Menu>
                <p>Câu hỏi</p>
                
                <Select defaultValue="english"  style={{ width: 150 }} onChange={handleChange}>
                  <Option value="english"> Tiếng anh</Option>
                  <Option value="knowledger"> Kiến thức chung</Option>
                  <Option value="code"> Code</Option>
                  <Space></Space>
                </Select> 
                <p></p>
                <p>Level</p>
                  
                    <Radio.Group buttonStyle="solid">
                      <Space>
                      <Radio.Button value="B1">B1</Radio.Button>
                      <Radio.Button value="B2">B2</Radio.Button>
                      <Radio.Button value="B3">B3</Radio.Button>
                      </Space>
                    </Radio.Group>
                  
                  
                  <p></p>
                  <p>Nội dung</p>
                  <Space>
                  <Image width={100} height={100} src="error" fallback="data:image/png;base64,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"/>
                  <TextArea width={100} height={100} maxLength={1000} onChange={onChange} />
                  </Space>

                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Trắc nghiệm" key="1">
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
                    
                    <TabPane tab="Tự luận" key="2">
                      <TextArea width={100} height={100} maxLength={1000} onChange={onChange} />
                    </TabPane>
                  </Tabs>
                </Menu>
               </Modal>
            </TabPane>
            
            <TabPane tab="Tab 1" tab="Demo" key="2"> 
              <Card style={{ width: '45%' }}>
              <p>Tên bài test</p>
              <Input style={{ width: '50%' }} maxLength={100} onChange={onChange} />
              <p></p>
              <Radio.Group buttonStyle="solid">
                      <Space>
                      <Radio.Button value="B1">B1</Radio.Button>
                      <Radio.Button value="B2">B2</Radio.Button>
                      <Radio.Button value="B3">B3</Radio.Button>
                      </Space>
              </Radio.Group>

              <p></p>
              <Form.Item name="Position" label="Position">
                <Select mode="tags" style={{ width: '50%' }} placeholder="Tags Mode" onChange={handleChange}>{children}</Select>
              </Form.Item>
              
              <Button type="primary" htmlType="submit">Lưu</Button>
              </Card>

             
                
                <Card title="Câu 1" extra={<a href="#">Delete</a>} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
               
              
            </TabPane>
            
          </Tabs> */}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
}