//Add.jsx

import { Button, Form, Input, Modal, message } from 'antd'
import React, { useState } from 'react'

const Add = ({ isModalAddOpen, setIsModalAddOpen, categories, setCategories }) => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        try {
            const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
            fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/add-category", {
                method: "POST", body: JSON.stringify(values), headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json; charset=UTF-8" }
            })
            message.success("Category Succesfully Added.");
            form.resetFields()
            setCategories([...categories, {
                _id: Math.random(),
                title: values.title
            }])
            setIsModalAddOpen(false);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Modal title="Add New Category" open={isModalAddOpen} onCancel={() => setIsModalAddOpen(false)} footer={false}>
            <Form layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item name="title" label="Add Category" rules={[{ required: true, message: "Category Field Cannot Be Empty!", }]}>
                    <Input />
                </Form.Item>
                <Form.Item className="flex justify-end mb-0">
                    <Button type="primary" htmlType="submit" >Create</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Add