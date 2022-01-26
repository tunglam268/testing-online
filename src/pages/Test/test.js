import React from 'react';
import 'antd/dist/antd.css';
import './test.css';
import { Layout, Menu, Col, Row, TimePicker,Statistic, Image, Typography, Card, Radio, Button, message, Tabs, Space, Select, Popconfirm } from 'antd';
import { UserOutlined, ClockCircleFilled, UndoOutlined } from '@ant-design/icons';
import { Input, Avatar } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NavLink } from 'react-router-dom';

const { Countdown } = Statistic;
const { TabPane } = Tabs;
const { Text, Title } = Typography;
const { Header, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const tittleText = "There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are"
const exampleText = (
    <Text>n = 7 <br />
        ar = [1,2,1,2,1,3,2]<br />
        There is one pair of color 1 and one of color 2. There are three odd socks left , one of each color. The number of pairs is 2.</Text>
)

const functionDescriptionText = (
    <Text>Complete the sockMerchant function in the editor below. sockMerchant has the following parameters(s):<br />
        <ul>
            <li>int n : the number of socks in the pile</li>
            <li> int ar[n]: the colors of each sock</li>
        </ul>
    </Text>
)

const returnText = (
    <ul>
        <li>int : the number of pairs</li>
    </ul>
)

const inputFormatText = (
    <Text>The first line contains an integer n, the number of socks represented in arr.<br />
        The second line contains n space-separated integers, ar[i] the colors of the socks in the pile
    </Text>
)

const constraintsText = (
    <ul>
        <li> n in (1,100)</li>
        <li> ar[i] in (1,100) where i in (0,n) </li>
    </ul>
)

const sampleInputText = (
    <Card style={{ background: '#bfbfbf' }}>
        <Row>
            <Col span={12}>
                <Text>STDIN</Text><br />
                <Text>--------------------</Text>
            </Col>

            <Col span={12}>
                <Text>Function</Text><br />
                <Text>--------------------</Text>
            </Col>
        </Row>
    </Card>
)

const sampleOutputText = (
    <Card style={{ background: '#bfbfbf' }}>
        <Text>3</Text>
    </Card>
)

const explanationText = (
    <Image
        width={200}
        height={200}
        src="error"
        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
    />
)

const styleHeader = { background: '#ffffff', padding: '0 20px' };
const styleContent = { background: '#ffffff', minHeight: 1000 };
const styleCard = { minHeight: 1000 }

function onChange(time, timeString) {
    console.log(time, timeString);
}

function callback(key) {
    console.log(key);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    message.error('Click on No');
}

export default function Test() {
    return (
        <Layout>
            <Header style={styleHeader}>
                <Row>
                    <Col span={8}>
                        <Space size={[32, 8]} wrap>
                            <Avatar size="large" icon={<ClockCircleFilled />} />
                            <Countdown title="Thời gian làm bài" value={Date.now() + 600 * 6000 } onChange={onChange} />
                            <Button style={{ width: '130%', background: '#595959', color: '#ffffff' }} shape="round" htmlType="submit">Nộp bài</Button>
                        </Space>
                    </Col>

                    <Col span={2} offset={14}>
                        <Menu style={styleHeader} mode="horizontal" defaultSelectedKeys={['1']}>
                            <SubMenu key="SubMenu" title="Tài khoản" icon={<UserOutlined />}>
                                <Menu.Item key="exit"><NavLink to="/" />Thoát</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>

            <Layout>
                <Content style={styleContent}>
                    <Card style={styleCard}>
                        <Tabs onChange={callback} defaultActiveKey="1" centered type="card" size="large">
                            <TabPane style={{ width: 2000, minHeight: 1000, padding: '30px 500px' }} tab="Tiếng anh" key="1">
                                <Space size={[16, 16]} wrap>
                                    <Card style={{ width: 1000, minHeight: 300 }}>
                                        <Row justify="space-between">
                                            <Col span={1}>
                                                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu 1</Button>
                                            </Col>

                                            <Col span={14}>
                                                <Text>The executives pointed to immigration ______ the biggest drivers of the domestic market</Text>
                                                <p></p>
                                                <TextArea rows={4} style={{ width: 600 }} maxLength={1000} />
                                            </Col>

                                            <Col span={6}>
                                                <Image.PreviewGroup>
                                                    <Image width={200} height={200} src="error" fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="></Image>
                                                </Image.PreviewGroup>
                                            </Col>
                                        </Row>
                                    </Card>

                                    <Card style={{ width: 1000, minHeight: 300 }}>
                                        <Row justify="start">
                                            <Col span={3}>
                                                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu 2</Button>
                                            </Col>

                                            <Col span={12}>
                                                <Text>Khai báo 1 biến age với định dạng int có giá trị bằng 10:</Text>
                                                <p></p>
                                                <Radio.Group defaultValue={1}>
                                                    <Space direction="vertical">
                                                        <Radio value={1}><Text strong>A.</Text>var age int = 10</Radio>
                                                        <Radio value={2}><Text strong>B.</Text>age = 10 = int</Radio>
                                                        <Radio value={3}><Text strong>C.</Text>int age = 10</Radio>
                                                        <Radio value={4}><Text strong>D.</Text>var int age = 10</Radio>
                                                    </Space>
                                                </Radio.Group>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Space>
                            </TabPane>

                            <TabPane style={{ width: 2000, minHeight: 300, padding: '30px 500px' }} tab="Kiến thức chung" key="2">
                                <Space size={[16, 16]} wrap>
                                    <Card style={{ width: 1000, minHeight: 300 }}>
                                        <Row justify="start">
                                            <Col span={3}>
                                                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu 1</Button>
                                            </Col>

                                            <Col span={12}>
                                                <Text>Khai báo 1 biến age với định dạng int có giá trị bằng 10:</Text>
                                                <p></p>
                                                <Radio.Group defaultValue={1}>
                                                    <Space direction="vertical">
                                                        <Radio value={1}><Text strong>A.</Text>var age int = 10</Radio>
                                                        <Radio value={2}><Text strong>B.</Text>age = 10 = int</Radio>
                                                        <Radio value={3}><Text strong>C.</Text>int age = 10</Radio>
                                                        <Radio value={4}><Text strong>D.</Text>var int age = 10</Radio>
                                                    </Space>
                                                </Radio.Group>
                                            </Col>
                                        </Row>
                                    </Card>

                                    <Card style={{ width: 1000, minHeight: 300 }}>
                                        <Row justify="start">
                                            <Col span={3}>
                                                <Button type="text" shape="round" style={{ background: '#595959', color: '#ffffff' }}>Câu 2</Button>
                                            </Col>

                                            <Col span={12}>
                                                <Text>Câu lệnh sau in ra gì<br></br>
                                                    i:= 10<br></br>
                                                    j: = 20.8<br></br>
                                                    sum := i +int(j)<br></br>
                                                </Text>
                                                <p></p>
                                                <Radio.Group defaultValue={1}>
                                                    <Space direction="vertical">
                                                        <Radio value={1}><Text strong>A.</Text>sum = 30.8</Radio>
                                                        <Radio value={2}><Text strong>B.</Text>sum = 30</Radio>
                                                        <Radio value={3}><Text strong>C.</Text>erro</Radio>
                                                        <Radio value={4}><Text strong>D.</Text>20.8</Radio>
                                                    </Space>
                                                </Radio.Group>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Space>
                            </TabPane>

                            <TabPane tab="Code" key="3">
                                <Row gutter={[16, 16]}>
                                    <Col span={8}>
                                        <Card style={{  padding: '0 0' }}>
                                            <Title level={2}>Problem</Title>
                                            <Card>
                                                <Text>{tittleText}</Text>
                                                <Title level={4}>Example</Title>
                                                <Text>{exampleText}</Text>
                                                <Title level={4}>Function Description</Title>
                                                <Text>{functionDescriptionText}</Text>
                                                <Title level={4}>Returns</Title>
                                                <Text>{returnText}</Text>
                                                <Title level={4}>InputFormat</Title>
                                                <Text>{inputFormatText}</Text>
                                                <Title level={4}>Constraints</Title>
                                                <Text>{constraintsText}</Text>
                                                <Title level={4}>Sample Input</Title>
                                                <Text>{sampleInputText}</Text>
                                                <Title level={4}>Sample Ouput</Title>
                                                <Text>{sampleOutputText}</Text>
                                                <Title level={4}>Explanation</Title>
                                                <Text>{explanationText}</Text>
                                            </Card>
                                        </Card>
                                    </Col>

                                    <Col span={16}>
                                        <Card Card style={{  padding: '0 20px' }}>
                                            <Col span={8} offset={18}>
                                                <Space>
                                                    <Select defaultValue="go" style={{ width: 200 }} onChange={handleChange}>
                                                        <Option value="go">Go</Option>
                                                        <Option value="c">C</Option>
                                                        <Option value="c#">C#</Option>
                                                        <Option value="python">Python</Option>
                                                        <Option value="javascript">Javascript</Option>
                                                        <Option value="perl">Perl</Option>
                                                    </Select>

                                                    <Popconfirm title="This will reset the code in the editor to the original problem statement. Would you like to continue"
                                                        placement="bottomLeft" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                                                        <Button shape="circle" icon={<UndoOutlined />} size="large"></Button>
                                                    </Popconfirm>
                                                </Space>
                                            </Col>

                                            <p></p>
                                            <Card style={{ width: 1100, minHeight: 800 }}>
                                                <Text>Code here</Text>
                                            </Card>

                                            <p></p>
                                            <Col span={8} offset={17}>
                                                <Space>
                                                    <Button size="large" type="primary">Run Code</Button>
                                                    <Button size="large" >Submit Code</Button>
                                                </Space>
                                            </Col>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </Card>
                </Content>

            </Layout>
        </Layout>
    );
}