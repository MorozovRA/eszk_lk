import React from 'react'
import {Button, Card, Col, Divider, Input, Layout, Row} from 'antd'

interface IEditCard {
    editPrivilege: any,
    setEditPrivilege: Function,
    savePrivilege: () => void
}

const EditCard: React.FC<IEditCard> =
    ({
         editPrivilege,
         setEditPrivilege,
         savePrivilege
    }) => {
    return (
        <Layout>
            {editPrivilege &&
            <Card title="Редактрование"
                  headStyle={{
                      background: 'rgb(250, 250, 250)'
                  }}
                  extra={'ID ' + editPrivilege.id}>
                <Input
                    value={editPrivilege.privileges}
                    onChange={(e) => {
                        setEditPrivilege({
                            ...editPrivilege,
                            privileges: e.target.value
                        })
                    }}
                />
                <Divider style={{marginBottom: 15}}/>
                <Row gutter={[10, 0]} justify="end">
                    <Col>
                        <Button
                            onClick={() => setEditPrivilege(null)}>
                            Отменить
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            onClick={savePrivilege}
                            type="primary">Сохранить</Button>
                    </Col>
                </Row>
            </Card>
            }
        </Layout>
    )
}

export default EditCard