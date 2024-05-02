import { Modal, Form, Input, Select, Card, Button } from 'antd';

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
    const onFinish = (values) => {
        console.log("Received values of form:", values);
    }

    return (
        <>
            <Modal title="Create Invoice" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
                <Form layout={"vertical"} onFinish={onFinish}>
                    <Form.Item label="Customer Name" rules={[{ required: true, message: "Customer Name Field Cannot Be Empty!" }]} name="customerName">
                        <Input placeholder="Write a Customer Name" />
                    </Form.Item>
                    <Form.Item label="Phone No" rules={[{ required: true, message: "Phone Number Field Cannot Be Empty!" }]} name="phoneNumber">
                        <Input placeholder="Write a Phone Number" maxLength={15} type="phone" />
                    </Form.Item>
                    <Form.Item label="Payment Method" rules={[{ required: true, message: "Please Select a Payment Method" }]} name="paymentMethod">
                        <Select placeholder="Select Payment Method">
                            <Select.Option value="Cash">Cash</Select.Option>
                            <Select.Option value="Credit Card">Credit Card</Select.Option>
                        </Select>
                    </Form.Item>
                    <Card>
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>549.00$</span>
                        </div>
                        <div className="flex justify-between my-2">
                            <span>VAT Total %8</span>
                            <span className="text-red-600">+43.92$</span>
                        </div>
                        <div className="flex justify-between">
                            <b>Total</b>
                            <b>592.92$</b>
                        </div>
                        <div className="flex justify-end">
                            <Button type="primary" className="mt-4" onClick={() => setIsModalOpen(true)} htmlType="submit">Create Order</Button>
                        </div>
                    </Card>
                </Form>
            </Modal >
        </>
    )
}

export default CreateInvoice