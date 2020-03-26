import React, {useState} from 'react'
import router from '../router'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import Menu from './layout/menu'
import '../assets/styles/App.scss'
import { Header, Content } from './layout'

const App: React.FC = () => {
    const { Sider } = Layout
    let [showMenu, setShowMenu] = useState(true)
    const handleMenu = () => setShowMenu(!showMenu)
    return (
        <Layout>
            <Sider theme="light"
                   collapsed={showMenu}
                   collapsedWidth={0}>
                <Menu showMenu={showMenu} handleMenu={handleMenu}/>
            </Sider>
            <Layout>
                <Header handleMenu={handleMenu}/>
                <Content>
                    {renderRoutes(router)}
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
