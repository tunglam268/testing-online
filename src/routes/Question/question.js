import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './question.css';
import { Layout, Menu, Row, Modal ,Col,Image, Button , Card ,Tabs, Space} from 'antd';
import {  SearchOutlined,QuestionOutlined ,SaveOutlined, FieldTimeOutlined,EditOutlined ,PlusOutlined ,UserOutlined, CloseOutlined} from '@ant-design/icons';
import { Form, Input,  Select , Radio , } from 'antd';
import { Link } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';



const { Header, Content } = Layout;
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];
const style = { background: '#ffffff', padding: '8px 0' };
const styleContent = { background: '#ffffff', padding: '8px 0' };

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}



export default function Question() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [value, setValue] = React.useState(1);

  const onChangeMultiple = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

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
        <Menu mode="inline" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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

      <Content style={styleContent}>
        <Row gutter={16}>
          <Col className="test" span={6}>
            < div style={style}>
              <Card>
              
                <Space>
                <h1>Bài test</h1>
                <Select defaultValue="english"  style={{ width: 150 }} onChange={handleChange}>
                  <Option value="english">Tiếng Anh</Option>
                  <Option value="code">Code</Option>
                  <Option value="knowledger">Kiến thức chung</Option>
                </Select>
                </Space>
              

              <p>
                <Card>
                  <Form.Item name="test" label="Tên bài test"><Input placeholder="Nhập tên bài test"/></Form.Item>
                  <Radio.Group buttonStyle="solid">
                  <Form.Item name="level" label="Level">
                      <Radio.Button value="B1">B1</Radio.Button>
                      <Radio.Button value="B2">B2</Radio.Button>
                      <Space>
                        <Radio.Button value="B3">B3</Radio.Button>
                        <Button type="primary" shape="round" htmlType="submit" icon={<CloseOutlined />}>Xóa lọc</Button>
                      </Space>
                  </Form.Item>
                  </Radio.Group>
                </Card>

                <p></p>
                <Row justify="center">
                  <Space>
                    <Col span={4} >
                      <Button type="primary"  shape="round" htmlType="submit" icon={<PlusOutlined />}>Thêm</Button>
                    </Col>

                    <Col span={4}>
                      <Button type="primary" shape="round" htmlType="submit" icon={<SearchOutlined />}>Tìm kiếm</Button>
                    </Col>
                  </Space>
                </Row>
              </p>

            <Menu>
              <Button size ="large"  style={{ width: '100%' }}> Test-01</Button><br></br>
              <Button size ="large"  style={{ width: '100%' }}> Test-01</Button><br></br>
              <Button size ="large"  style={{ width: '100%' }}> Test-01</Button><br></br>
              <Button size ="large"  style={{ width: '100%' }}> Test-01</Button><br></br>
              <Button size ="large"  style={{ width: '100%' }}> Test-01</Button><br></br>
            </Menu>
            </Card>
            </div>
          </Col>

          <Col className="question" span={6}>
            <div style={style}>
            <Card>
            <Space><h1>Câu hỏi</h1>
            <Button type="primary" shape="round" icon={<QuestionOutlined />} onClick={showModal}>Tạo câu hỏi</Button>
            </Space>
              <Modal title="Tạo câu hỏi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Menu>
                <p>Câu hỏi</p>
                
                <Select defaultValue="english"  style={{ width: 150 }} onChange={handleChange}>
                  <Option value="english"> Tiếng anh</Option>
                  <Option value="knowledger"> Kiến thức chung</Option>
                  <Option value="code"> Code</Option>
                  
                </Select> 
                <p></p>
                <p>Level</p>
                  
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value="B1">B1</Radio.Button>
                      <Radio.Button value="B2">B2</Radio.Button>
                      <Radio.Button value="B3">B3</Radio.Button>
                    </Radio.Group>
                  
                  
                  <p></p>
                  <p>Nội dung</p>
                  <Space>
                  <Image width={70} height={70} src="error" fallback="data:image/png;base64,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"/>
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
               
              <p></p>
               
               <Card style={{ width: 400 }} actions={[<PlusOutlined key="add" />,<EditOutlined key="edit" />,<CloseOutlined key="exit" />,]}>
                <p> Which of the following numbers is fartherest from the number 1 on the number line ?</p>
                  <Radio.Group onChange={onChangeMultiple} value={value}>
                    <Radio value="A"> A. -10</Radio>
                    <Radio value="B">B. -1</Radio>
                    <Radio value="C">C. 5</Radio>
                    <Radio value="D">D. 0</Radio>
                  </Radio.Group>
               </Card>
               <p></p>
            </Card>
            </div>
          </Col>

          <Col className="demo" span={12}>
            <div style={style}>
              <Card>
              <h1>Demo</h1>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <p>Tên bài test</p>
                  <Form.Item><Input style={{ width: 330 }} placeholder="Nhập tên bài test"/></Form.Item>
                  <Row gutter={[48, 8]}>
                    <Col span={12}>
                      <Radio.Group buttonStyle="solid">
                        <Radio.Button value="B1">B1</Radio.Button>
                        <Radio.Button value="B2">B2</Radio.Button>
                        <Radio.Button value="B3">B3</Radio.Button>
                      </Radio.Group>
                    </Col>
                    
                    <Col span={12}>
                      <Input prefix ={<FieldTimeOutlined />} style={{ width: 80}}></Input>
                    </Col>
                  </Row>
                
                </Col>

                <Col span={12}>
                  <Form.Item name="Position" label="Tham gia test">
                    <Select mode="tags" style={{ width: '50%' }} placeholder="Tags Mode" onChange={handleChange}>{children}</Select>
                    <p></p>
                    <Button style={{ width: '50%' }} shape="round" type="primary" icon={<SaveOutlined />} htmlType="submit">Lưu</Button>  
                  </Form.Item>
                </Col>

                <p></p>
                <Card style={{ width: 800 }} actions={[<CloseOutlined key="exit" />,]}>
                  <p> The executives pointed to immigration ______ the biggest drivers of the domestic market</p>
                  <Radio.Group onChange={onChangeMultiple} value={value}>
                    <Radio value="A"> A. Rather</Radio><br></br>
                    <Radio value="B">B. As one of</Radio><br></br>
                    <Radio value="C">C. Resulting in</Radio><br></br>
                    <Radio value="D">D. As leading</Radio><br></br>
                  </Radio.Group>
                </Card>
              </Row>
              </Card>
            </div>
          </Col>
      </Row>
    </Content>
  </Layout>
  );
}