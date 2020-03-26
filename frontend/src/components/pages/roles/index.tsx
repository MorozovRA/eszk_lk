import React from 'react'
import {Layout, Row, Col, Typography} from 'antd'
import {UsergroupAddOutlined} from '@ant-design/icons'

const Roles: React.FC = () => {
    const {Title} = Typography
    return (
        <Layout>
            <Title className="title-page">
                <UsergroupAddOutlined/>
                <span>Роли</span>
            </Title>
        </Layout>
    )
}

export default Roles
