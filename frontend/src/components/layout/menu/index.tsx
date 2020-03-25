import React from 'react'
import { Menu } from 'antd'
import MenuList from './menu.json'
import {Link, useLocation} from 'react-router-dom'

interface IMenu {
    handleMenu: () => void
}

const MainMenu: React.FC<IMenu> = ({ handleMenu }) => {
    const location = useLocation()
    const getCurrentRouteIndex = () => {
        return String(MenuList.findIndex((item) => {
            return item.path === location.pathname
        }))
    }
    return (
        <Menu
            style={{height: '100vh', zIndex: 1000}}
            theme="light"
            mode="inline"
            selectedKeys={[getCurrentRouteIndex()]}
        >
            {MenuList.map((item, key) => (
                <Menu.Item key={key}>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default MainMenu