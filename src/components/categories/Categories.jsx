//Categories.jsx

import { PlusOutlined } from "@ant-design/icons"
import { useState } from "react";
import { Button, Form, Input, Modal, message } from 'antd';
import "./style.css"


const Categories = ({ categories, setCategories }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/categories/add-category", {
                method: "POST", body: JSON.stringify(values), headers: { "Content-type": "application/json; charset=UTF-8" }
            })
            message.success("Category Succesfully Added.");
            form.resetFields()
            setCategories([...categories, values])
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ul className="flex md:flex-col gap-4 text-lg">
            {categories.map((item) => (
                <li key={item._id} className="bg-green-700 text-white hover:bg-pink-700 transition-all px-6 py-10 cursor-pointer text-center min-w-[145px]">
                    <span>{item.title}</span>
                </li>
            ))}
            <li
                className="category-item !bg-purple-800 hover:opacity-90"
                onClick={() => setIsModalOpen(true)}>
                <PlusOutlined className="md:text-2xl" />
            </li>
            <Modal title="Add New Category" open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={false}>
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item name="title" label="Add Category" rules={[{ required: true, message: "Category Field Cannot Be Empty!", }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="flex justify-end mb-0">
                        <Button type="primary" htmlType="submit" >Create</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </ul>
    )
}

export default Categories