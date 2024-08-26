import { Form, Input, Modal, Table, message, Button } from 'antd'
import React, { useState } from 'react'

export const Edit = ({ isModalEditOpen, setIsModalEditOpen, categories, setCategories }) => {
    const [editingRow, setEditingRow] = useState({})
    const onFinish = async (values) => {
        try {
            await fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/update-category",
                {
                    method: "PUT",
                    body: JSON.stringify({ ...values, categoryId: editingRow._id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                })
            message.success("Category Successfully Updated!")
            setCategories(categories.map((item) => {
                if (item._id === editingRow._id) {
                    return { ...record, title: values.title }
                } else {
                    return record
                }
            }))
        } catch (err) {
            message.error("Something went wrong!")
            console.log(err);
        }
    }

    const deleteCategory = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                await fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/delete-category", {
                    method: "DELETE",
                    body: JSON.stringify({ categoryId: id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                })
                message.success("Category Deleted Successfully")
                setCategories(categories.filter((item) => item._id !== id))
            } catch (err) {
                message.error("Something went wrong!")
                console.log(err);
            }

        }
    }

    const columns = [
        {
            title: "Category Title",
            dataIndex: "title",
            render: (_, record) => {
                if (record._id === editingRow._id) {
                    return (
                        <Form.record className='mb-0' name="title">
                            <Input defaultValue={record.title} />
                        </Form.record>
                    )
                } else {
                    return <p>{record.title}</p>
                }
            }
        },
        {
            title: "Action",
            dataIndex: "Action",
            render: (_, record) => {
                return (
                    <div>
                        <Button type="link" onClick={() => setEditingRow(record)} className="pl-0">Edit</Button>
                        <Button type="link" htmlType="Submit" className="text-gray-500">Save</Button>
                        <Button type="link" danger onClick={() => deleteCategory(record._id)}>Delete</Button>
                    </div>
                )
            }
        }
    ]

    return (
        <Modal open={isModalEditOpen} onCancel={() => setIsModalEditOpen(false)} title="Category Operations" footer={false}>
            <Form onFinish={onFinish}>
                <Table bordered dataSource={categories} columns={columns} rowKey={"_id"} />
            </Form>
        </Modal>
    )
}
