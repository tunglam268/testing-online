// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import './example.css';
// import { Layout, Menu, Row, Col, Card, Button, Tabs, Space, Typography, Avatar } from 'antd';
// import { UserOutlined, MailOutlined, PhoneOutlined, SearchOutlined, PlusOutlined, FileTextOutlined, CloseOutlined, FilterOutlined } from '@ant-design/icons';
// import { Form, Input, Select, DatePicker } from 'antd';
// import SubMenu from 'antd/lib/menu/SubMenu';
// import { NavLink } from 'react-router-dom';
// import Service from "../../services/service";


// const { Text } = Typography;
// const { Header, Sider, Content } = Layout;
// const { TabPane } = Tabs;
// const { Option } = Select;
// const styleContent = { width: 1303, background: '#ffffff', padding: '25px 20px', minHeight: 1000 };
// const styleSider = { background: '#ffffff', padding: '0 0  ' }
// const styleHeader = { background: '#ffffff' }
// const axios = require('axios');

// const  Example = () => {
//     const initialCandidateState = {
//         id: null,
//         name: "",
//         level: "",
//         phone: "",
//         email: "",
//         position: "",

//     };

//     const [candidate, setCandidate] = useState(initialCandidateState);
//     // const [submitted, setSubmitted] = useState(false);

//     const dispatch = useDispatch();

//     const handleInputChange = event => {
//         const { name, value } = event.target;
//         setCandidate({ ...candidate, [name]: value });
//     }

//     const createCandidate = () => {
//         const { name, level, phone, email, position } = candidate;
//         dispatch(createCandidate({ name, level, phone, email, position }))
//             .unwrap()
//             .then(data => {
//                 console.log(data)
//                 setCandidate({
//                     id: data.id,
//                     name: data.name,
//                     level: data.level,
//                     phone: data.phone,
//                     email: data.email,
//                     position: data.position,
//                 });
//                 // setSubmitted(true);
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     }
//     return (
//         <Layout>
//             <Header style={styleHeader} className="header">
//                 <Row>
//                     <Col span={8}>
//                         <Menu style={styleHeader} mode="horizontal" defaultSelectedKeys={['1']}>
//                             <Menu.Item key="1"><Text strong>Lịch test</Text></Menu.Item>
//                             <Menu.Item key="2"><NavLink to="/question" /><Text strong>Bộ câu hỏi</Text></Menu.Item>
//                             <Menu.Item key="3"><NavLink to="/complete" /><Text strong>Đã hoàn thành</Text></Menu.Item>
//                             <Menu.Item key="4"><NavLink to="/document" /><Text strong>Tài liệu</Text></Menu.Item>
//                         </Menu>
//                     </Col>

//                     <Col span={2} offset={14}>
//                         <Menu style={styleHeader} mode="horizontal">
//                             <SubMenu defaultActiveKey="1" icon={<UserOutlined />} title={<Text strong>Tài khoản</Text>}>
//                                 <Menu.Item key="account" ><NavLink to="/manageaccount" />Quản lý tài khoản</Menu.Item>
//                                 <Menu.Item key="logout"><NavLink to="/" />Đăng xuất</Menu.Item>
//                             </SubMenu>
//                         </Menu>
//                     </Col>
//                 </Row>
//             </Header>

//             <Layout>
//                 <Card>
//                     <Sider width={500} theme="light" className="site-layout-background" style={styleSider}>
//                         <br></br>
//                         <h1><Avatar style={{ color: '#000000', backgroundColor: '#ffffff' }}
//                             shape="square" size={64} icon={<FilterOutlined />}></Avatar>Bộ Lọc</h1>

//                         <Form.Item style={{ width: '95%' }}><p>Tên</p>
//                             <Input
//                                 placeholder="Nhập tên"
//                                 prefix={<UserOutlined />}
//                                 value={candidate.name || ''}
//                                 onChange={handleInputChange}
//                                 name="name"
//                             />
//                         </Form.Item>

//                         <Form.Item name="Room" style={{ width: '95%' }}><p>Phòng ban</p>
//                             <Select placeholder="Lựa chọn"
//                                 value={candidate.position || ''}
//                                 onChange={handleInputChange}
//                                 name="position"
//                             >
//                                 <Option value="Java">Java</Option>
//                                 <Option value="Python">Python</Option>
//                                 <Option value="Golang">Golang</Option>
//                                 <Option value="JavaScript">JavaScript</Option>
//                                 <Option value="NodeJS">NodeJS</Option>
//                                 <Option value="MySQL">MySQL</Option>
//                             </Select>

//                         </Form.Item>

//                         <Form.Item name="Level"><p>Level</p>
//                             <Select style={{ width: '95%' }}
//                                 placeholder="level"
//                                 value={candidate.level || ''}
//                                 onChange={handleInputChange}
//                                 name="level"
//                             >
//                                 <Option value="1">Fresher</Option>
//                                 <Option value="2">Junior</Option>
//                                 <Option value="3">Senior</Option>
//                             </Select>
//                         </Form.Item>

//                         <Row gutter={[8, 8]}>
//                             <Col span={12}>
//                                 <p>Lịch</p>
//                                 <Form.Item name="DatePicker">
//                                     <DatePicker />
//                                 </Form.Item>
//                             </Col>

//                             <Col span={12}>
//                                 <p>Liên lạc</p>
//                                 <Form.Item name="Contact">
//                                     <Form.Item >
//                                         <Input placeholder="Email"
//                                             style={{ width: '89%' }} prefix={<MailOutlined />}
//                                             value={candidate.email || ''}
//                                             onChange={handleInputChange}
//                                             name="email"
//                                         />
//                                     </Form.Item>

//                                     <Form.Item>
//                                         <Input placeholder="Số điện thoại"
//                                             style={{ width: '89%' }}
//                                             prefix={<PhoneOutlined />}
//                                             value={candidate.phone || ''}
//                                             onChange={handleInputChange}
//                                             name="phone"
//                                         />
//                                     </Form.Item>

//                                 </Form.Item>
//                             </Col>
//                         </Row>

//                         <Form.Item>
//                             <Row>
//                                 <Col span={12} offset={6}>
//                                     <Space size={[32, 16]}>
//                                         <Button style={{ width: '120%', background: '#bfbfbf' }}
//                                             htmlType="submit"
//                                             shape="round"
//                                             icon={<SearchOutlined />}
//                                         >Tìm</Button>

//                                         <Button style={{ width: '120%' }}
//                                             htmlType="submit"
//                                             shape="round"
//                                             icon={<PlusOutlined />}
//                                             onClick={createCandidate}
//                                         >Thêm</Button>
//                                     </Space>
//                                 </Col>
//                             </Row>

//                             <Col offset={6}>
//                                 <p></p>
//                                 <Button danger style={{ width: '60%', background: '#fafafa' }}
//                                     htmlType="reset" shape="round" icon={<CloseOutlined />} >Xóa</Button>
//                             </Col>


//                         </Form.Item>
//                     </Sider>
//                 </Card>

//                 <Card>
//                     <Content style={styleContent}>
//                         <h1><Avatar style={{ color: '#000000', backgroundColor: '#ffffff' }} shape="square" size={64} icon={<FileTextOutlined />}></Avatar>Danh Sách</h1>
//                         <Tabs defaultActiveKey="tabList" size={'large'} type="card" >
//                             <TabPane tab="tabBoard" tab="Bảng" key="tabBoard">
//                                 <Tabs defaultActiveKey="tabTimeline" size={'large'} type="card" >
//                                     <TabPane tab="tabSoon" tab="Sắp tới" key="tabSoon">
//                                         <Row>

//                                         </Row>
//                                     </TabPane>

//                                     <TabPane tab="tabToday" tab="Hôm nay" key="tabToday">
//                                         <Row>

//                                         </Row>
//                                     </TabPane>

//                                     <TabPane tab="tabLate" tab="Quá hạn" key="tabLate">
//                                         <Row>

//                                         </Row>
//                                     </TabPane>
//                                 </Tabs>
//                             </TabPane>

//                             <TabPane tab="tabCalendar" tab="Lịch" key="tabCalendar">
//                                 <Row>
//                                     <Content>
//                                         <Row >

//                                         </Row>
//                                     </Content>
//                                 </Row>
//                             </TabPane>
//                         </Tabs>
//                     </Content>
//                 </Card>
//             </Layout>
//         </Layout>
//     )
// }

// export default Example;

