//Add.jsx

import { Button, Form, Input, Modal, Select, message } from 'antd'
import React from 'react'

const Add = ({ isModalAddOpen, setIsModalAddOpen, categories, products, setProducts }) => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        try {
            fetch("http://localhost:5000/api/products/add-product", {
                method: "POST", body: JSON.stringify(values), headers: { "Content-type": "application/json; charset=UTF-8" }
            })
            message.success("Product Succesfully Added.");
            form.resetFields()
            setProducts([...products,
            {
                ...values,
                _id: Math.random(),
                price: Number(values.price)
            }])
            setIsModalAddOpen(false)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Modal title="Add New Product" open={isModalAddOpen} onCancel={() => setIsModalAddOpen(false)} footer={false}>
            <Form layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item name="title" label="Add Product Name" rules={[{ required: true, message: "Product Field Cannot Be Empty!", }]}>
                    <Input placeholder='Enter Product Name.' />
                </Form.Item>
                <Form.Item name="img" label="Add Product Image" rules={[{ required: true, message: "Product Image Field Cannot Be Empty!", }]}>
                    <Input placeholder='Enter Product Iamge.' />
                </Form.Item>
                <Form.Item name="price" label="Add Product Price" rules={[{ required: true, message: "Product Price Field Cannot Be Empty!", }]}>
                    <Input placeholder='Enter Product Price.' />
                </Form.Item>
                <Form.Item name="category" label="Select Product Category" rules={[{ required: true, message: "Product Category Field Cannot Be Empty!", }]}>
                    <Select
                        showSearch
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.title ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.title ?? '').toLowerCase().localeCompare((optionB?.title ?? '').toLowerCase())
                        }
                        options={categories}
                    />
                </Form.Item>
                <Form.Item className="flex justify-end mb-0">
                    <Button type="primary" htmlType="submit" >Create</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Add