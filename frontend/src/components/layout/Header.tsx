import React from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { Menu as MenuIcon } from '@material-ui/icons'
import { ReactComponent as Logo } from '../../assets/images/layout/logo.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoCustomer1 } from '../../assets/images/layout/logoCustomer1.svg'
import { ReactComponent as LogoCustomer2 } from '../../assets/images/layout/logoCustomer2.svg'
import { ReactComponent as LogoCustomer3 } from '../../assets/images/layout/logoCustomer3.svg'

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
                <Col xs={0} sm={10} md={14} lg={16} xl={17} xxl={19}>
                    <Row gutter={[20, 0]} style={{marginTop: '-0.5%'}} justify="end">
                        <Col>
                            <LogoCustomer1/>
                        </Col>
                        <Col>
                            <LogoCustomer2/>
                        </Col>
                        <Col>
                            <LogoCustomer3 style={{ marginTop: '-10%'}}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}

export default Header