import React from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { Menu as MenuIcon } from '@material-ui/icons'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

interface IHeader {
    handleMenu: (action?: boolean) => void
}

const Header: React.FC<IHeader> = ({ handleMenu }) => {
    const { Header } = Layout
    const { Title } = Typography

    return (
        <Header className="header">
            <Row gutter={[20, 20]}>
                <Col>
                    <MenuIcon style={{cursor: 'pointer'}}
                              fontSize="large"
                              onClick={() => handleMenu(true)}/>
                </Col>
                <Col style={{marginLeft: '1%'}}>
                    <Logo/>
                </Col>
                <Col>
                    <Link to='/'>
                        <Title level={3}>Кабинет ЕСЗК</Title>
                    </Link>
                </Col>
            </Row>
        </Header>
    )
}

export default Header