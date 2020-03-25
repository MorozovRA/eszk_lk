import React from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { Menu as MenuIcon } from '@material-ui/icons'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

interface IHeader {
    handleMenu: () => void
}

const Header: React.FC<IHeader> = ({ handleMenu }) => {
    const { Header } = Layout
    const { Title } = Typography

    return (
        <Header style={{
            zIndex: 10,
            background: '#ffffff',
            position: 'fixed',
            padding: '0 30px',
            width: '100%',
            height: '80px',
            boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.05)'
        }}>
            <Row gutter={[20, 20]} style={{marginTop: 12}}>
                <Col>
                    <MenuIcon style={{cursor: 'pointer'}}
                              fontSize="large"
                              onClick={handleMenu}/>
                </Col>
                <Col style={{marginLeft: '1%'}}>
                    <Logo/>
                </Col>
                <Col>
                    <Title level={3}>Кабинет ЕСЗК</Title>
                </Col>
            </Row>
        </Header>
    )
}

export default Header