import React from 'react'
import {Button, Input, Card, Divider} from 'antd'

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
        <div>
            {editPrivilege &&
                <Card title="Редактрование" 
                        size="small"
                        extra={'ID ' + editPrivilege.id}>
                    <Input
                        placeholder="Привелегия"
                        value={editPrivilege.privileges}
                        onChange={(e) => {
                            setEditPrivilege({
                                ...editPrivilege,
                                privileges: e.target.value
                            })
                        }}
                    />
                    <div className="ant-modal-footer mt-2">
                        <Button
                            onClick={() => setEditPrivilege(null)}>
                            Отменить
                        </Button>
                        <Button
                            onClick={savePrivilege}
                            type="primary">
                                Сохранить
                        </Button>
                    </div>
                </Card>
            }
        </div>
    )
}

export default EditCard