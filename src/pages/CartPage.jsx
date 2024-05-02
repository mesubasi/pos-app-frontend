import { Button, Table } from 'antd';
import Header from '../components/header/Header';
import { Card } from 'antd';
import { useState } from 'react';
import CreateInvoice from '../components/cart/CreateInvoice';


const CartPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <>
            <Header />
            <div className="px-6">
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
                <div className="cart-total flex justify-end mt-4">
                    <Card className="w-72 border-2">
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
                        <div>
                            <Button type="primary" size="large" className="w-full mt-4" onClick={() => setIsModalOpen(true)}>Create Order</Button>
                        </div>
                    </Card>
                </div>
            </div>
            <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};

export default CartPage;
