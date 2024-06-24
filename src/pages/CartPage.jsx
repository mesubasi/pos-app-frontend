import { Button, Table } from 'antd';
import Header from '../components/header/Header';
import { Card } from 'antd';
import { useState } from 'react';
import CreateInvoice from '../components/cart/CreateInvoice';
import { useSelector } from 'react-redux';


const CartPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cart = useSelector((state) => state.cart);

    const columns = [
        {
            title: 'Product Image',
            dataIndex: 'img',
            key: 'img',
            width: "150px",
            render: (text) => {
                return (<img src={text} alt='' className='w-full h-20 object-cover' />)
            }
        },
        {
            title: 'Product Title',
            dataIndex: 'title',
            key: 'title',
            width: "150px",
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Product Quantity',
            dataIndex: 'category',
            key: 'category',
        },
    ];

    return (
        <>
            <Header />
            <div className="px-6">
                <Table dataSource={cart.cartItems} columns={columns} bordered pagination={false} />
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
