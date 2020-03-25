import React from 'react'
import {Col, Layout, Row, Typography} from 'antd'
import {HomeOutlined} from '@ant-design/icons'

const Home = () => {
    const { Title } = Typography
    return (
        <Layout>
            <Row gutter={[10, 0]}>
                <Col>
                    <HomeOutlined style={{fontSize: 32, fill: '#7F8391'}}/>
                </Col>
                <Col>
                    <Title style={{fontSize: 30}}>Главная страница</Title>
                </Col>
            </Row>
        </Layout>
    )
}

export default Home