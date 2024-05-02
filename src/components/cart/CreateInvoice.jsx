import React from 'react';
import { Modal, Form, Input, Select, Card, Button } from 'antd';

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
    const { Option } = Select;
    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };

    return (
        <>
            <Modal title="Create Invoice" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Customer Name"
                        name="customerName"
                        rules={[{ required: true, message: "Customer Name Field Cannot Be Empty!" }]}
                    >
                        <Input placeholder="Write a Customer Name" />
                    </Form.Item>
                    <Form.Item
                        label="Phone No"
                        name="phoneNumber"
                        rules={[{ required: true, message: "Phone Number Field Cannot Be Empty!" }]}
                    >
                        <Input
                            addonBefore={<Select defaultValue="+90" style={{ width: 70 }}>
                                <Option value="+90">+90</Option>
                            </Select>}
                            placeholder="Write a Phone Number"
                            maxLength={10}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Payment Method"
                        name="paymentMethod"
                        rules={[{ required: true, message: "Please Select a Payment Method" }]}
                    >
                        <Select placeholder="Select Payment Method">
                            <Option value="Cash">Cash</Option>
                            <Option value="Credit Card">Credit Card</Option>
                        </Select>
                    </Form.Item>
                    <div className="flex justify-end">
                        <Button type="primary" className="mt-4" onClick={() => setIsModalOpen(true)} htmlType="submit">Create Order</Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default CreateInvoice;
