import React, {useEffect, useState, useRef} from 'react'
import ReactDDM from 'react-dom'
import {Layout, Row, Col, Typography, Card, Table} from 'antd'
import headerPrivileges from './headerPrivileges.json'
import headerAlias from './headerAlias.json'
import { LockOpen } from '@material-ui/icons'
import EditCard from './EditCard'
import '../../../assets/styles/privileges.scss'

const Privileges: React.FC = () => {
    const { Title } = Typography

    let [editPrivilege, setEditPrivilege] =
        useState<any>(null)

    const editCard = useRef(null)

    const actionColumn = {
        title: 'Действие',
        dataIndex: 'id',
        render: (id: number, row: number, index: number) =>
            <a onClick={() => {
                setEditPrivilege(dataPrivileges[index])
            }}>
                Редактировать
            </a>
    }
    useEffect(() => {
        headerPrivileges.push(actionColumn)
        return () => {
            headerPrivileges.splice(-1,1)
        }
    }, [actionColumn])

    useEffect(() => {
        const editCardElement =
            ReactDDM.findDOMNode(editCard.current)
        if (editPrivilege && editCardElement instanceof Element) {
            editCardElement.className = 'editCard openEditCard'
        } else if (editCardElement instanceof Element){
            editCardElement.className = 'editCard closeEditCard'
        }
    }, [editPrivilege])

    const dataPrivileges = [
        {
            id: 1,
            privileges: 'Карточка сотрудника - Таблица - Чтение',
            alias: 'cards_table_read'
        }
    ]
    const dataAlias = [
        {
            id: 1,
            time: '01-01-2020 23:48:49',
            action: 'Удаление ID 4',
            author: 'silantyev1-ia',
            ip: '192.0.0.1',
        }
    ]
    return (
        <Layout>
            <Title className="title-page">
                <LockOpen/>
                <span>Привелегии</span>
            </Title>
            <Row>
                <Col span={16}>
                    <Card bodyStyle={{padding: 0}} style={{zIndex: 1}}>
                        <Table columns={headerPrivileges}
                               dataSource={dataPrivileges}
                               rowKey="id"
                               style={{
                                   minHeight: 211
                               }}
                               pagination={
                                   {
                                       pageSize: 10,
                                       showSizeChanger: true
                                   }
                               }/>
                    </Card>
                </Col>
                <Col ref={editCard}
                     span={6}>
                    <EditCard editPrivilege={editPrivilege}
                              setEditPrivilege={setEditPrivilege}
                              savePrivilege={() => setEditPrivilege(null)}/>
                </Col>
            </Row>
            <Title className="title-page">
                <span>Аудит</span>
            </Title>
            <Row>
                <Col span={16}>
                    <Card bodyStyle={{padding: 0}}>
                        <Table columns={headerAlias}
                               dataSource={dataAlias}
                               rowKey="id"
                               pagination={
                                   {
                                       pageSize: 10,
                                       showSizeChanger: true
                                   }
                               }/>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}

export default Privileges