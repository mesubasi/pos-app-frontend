import { Form, Modal, Table } from 'antd'
import React from 'react'

export const Edit = ({ isModalEditOpen, setIsModalEditOpen }) => {
    return (
        <Modal open={isModalEditOpen} onCancel={() => setIsModalEditOpen = (false)} title="Category Operations" footer={false}>
            <Form>
                <Table bordered />
            </Form>
        </Modal>
    )
}
