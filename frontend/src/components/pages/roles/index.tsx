import React from 'react'
import {Col, Layout, Row, Typography} from 'antd'
import {UsergroupAddOutlined} from '@ant-design/icons'

const Roles = () => {
  const { Title } = Typography
  return (
      <Layout>
        <Row gutter={[10, 0]}>
          <Col>
            <UsergroupAddOutlined style={{fontSize: 32, fill: '#7F8391'}}/>
          </Col>
          <Col>
            <Title style={{fontSize: 30}}>Роли</Title>
          </Col>
        </Row>
      </Layout>
  )
}

export default Roles
