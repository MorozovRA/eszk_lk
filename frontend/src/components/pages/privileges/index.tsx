import React from 'react'
import {Layout, Row, Col, Typography} from 'antd'
import { LockOpen } from '@material-ui/icons'

const Privileges = () => {
    const { Title } = Typography
    return (
        <Layout>
            <Title className="title-page">
                <LockOpen/>
                <span>Привелегии</span>
            </Title>
        </Layout>
    )
}

export default Privileges