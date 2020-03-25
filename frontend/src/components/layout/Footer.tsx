import React from 'react'
import {Layout} from 'antd'

const Footer: React.FC = () => {
    const { Footer } = Layout
    return (
        <Footer style={{ textAlign: 'center', width: '100%' }}>
            Личный кабинет сотрудника ЕСЗК ©2020 Created by Sberbank dream team
        </Footer>
    )
}

export default Footer