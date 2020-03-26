import React from 'react'
import {Layout, Row, Col, Typography} from 'antd'
import {HomeOutlined} from '@ant-design/icons'

const Home = () => {
    const {Title} = Typography
    return (
        <Layout>
            <Title className="title-page">
                <HomeOutlined/>
                <span>Главная страница</span>
            </Title>
        </Layout>
    )
}

export default Home