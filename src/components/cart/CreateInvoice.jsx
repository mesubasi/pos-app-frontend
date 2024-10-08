//CreateInvoice.jsx

import React from 'react';
import { Modal, Form, Input, Select, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from "../../redux/cartSlice";
import { useNavigate } from 'react-router-dom';

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Option } = Select;

    const onFinish = async (values) => {
        try {
            const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
            const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/invoices/add-invoices", {
                method: "POST",
                body: JSON.stringify({
                    ...values,
                    subTotal: cart.total,
                    tax: ((cart.total * cart.tax) / 100),
                    totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
                    cartItems: cart.cartItems,
                }),
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            });
            if (res.status === 200) {
                message.success("Invoice Successfully Generated");
                setIsModalOpen(false);
                dispatch(reset());
                navigate("/invoices")
            } else {
                message.error("Something went wrong!");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Modal title="Create Invoice" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
                <Form layout="vertical" onFinish={onFinish} >
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
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{(cart.total) > 0 ? (cart.total).toFixed(2) : 0}$</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>VAT %{cart.tax}</span>
                        <span className="text-red-600">{((cart.total * cart.tax) / 100) > 0 ? "+" + ((cart.total * cart.tax) / 100).toFixed(2) : 0}$</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Total</b>
                        <b>{(cart.total + (cart.total * cart.tax) / 100) > 0 ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2) : 0}$</b>
                    </div>
                    <div>
                        <Button type="primary" size="large" className="w-full mt-4" onClick={() => setIsModalOpen(true)} disabled={cart.cartItems.length === 0} htmlType="submit">Create Order</Button>
                    </div>
                </Form>
            </Modal >
        </>
    );
};

export default CreateInvoice;
