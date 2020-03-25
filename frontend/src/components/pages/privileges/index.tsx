import React from 'react'
import {Layout, Row, Col, Typography} from 'antd'
import { LockOpen } from '@material-ui/icons'

const Privileges = () => {
    const { Title } = Typography
    return (
        <Layout>
            <Row gutter={[10, 0]}>
                <Col>
                    <LockOpen style={{fontSize: 32, fill: '#7F8391'}}/>
                </Col>
                <Col>
                    <Title style={{fontSize: 30}}>Привелегии</Title>
                </Col>
            </Row>
        </Layout>
    )
}

export default Privileges