import { Form, Input, Modal, Table, message, Button } from 'antd'
import React, { useState } from 'react'

export const Edit = ({ isModalEditOpen, setIsModalEditOpen, categories, setCategories }) => {
    const [editingRow, setEditingRow] = useState({})
    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/categories/update-category",
                {
                    method: "PUT",
                    body: JSON.stringify({ ...values, categoryId: editingRow._id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                })
            message.success("Kategori Başarıyla Güncellendi!")
            setCategories(categories.map((item) => {
                if (item._id === editingRow._id) {
                    return { ...item, title: values.title }
                } else {
                    return item
                }
            }))
        } catch (err) {
            message.success("Bir Şeyler Yanlış Gitti!")
            console.log(err);
        }
    }

    const columns = [
        {
            title: "Category Title",
            dataIndex: "title",
            render: (_, item) => {
                if (item._id === editingRow._id) {
                    return (
                        <Form.Item className='mb-0' name="title">
                            <Input defaultValue={item.title} />
                        </Form.Item>
                    )
                } else {
                    return <p>{item.title}</p>
                }
            }
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: (text, item) => {
                return (
                    <div>
                        <Button type="link" onClick={() => setEditingRow(item)} className="pl-0">Edit</Button>
                        <Button type="link" htmlType="Submit" className="text-gray-500" >Save</Button>
                        <Button type="link" danger>Delete</Button>
                    </div>
                )
            }
        }
    ]

    return (
        <Modal open={isModalEditOpen} onCancel={() => setIsModalEditOpen = (false)} title="Category Operations" footer={false}>
            <Form onFinish={onFinish}>
                <Table bordered dataSource={categories} columns={columns} rowKey={"_id"} />
            </Form>
        </Modal>
    )
}
