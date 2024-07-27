//InvoicesPage.jsx

import { Button, Table, Card } from 'antd';
import Header from '../components/header/Header';
import { useEffect, useState } from 'react';
import PrintInvoices from '../components/invoices/PrintInvoices';


const InvoicesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [invoiceItems, setInvoiceItems] = useState();

    useEffect(() => {
        const getInvoices = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/invoices/get-all-invoices")
                const data = await res.json();
                setInvoiceItems(data);
            } catch (error) {
                console.log(error);
            }
        }

        getInvoices();
    }, [])


    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Create Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => {
                return <span>{text.substring(0, 10)}</span>
            }

        },
        {
            title: 'Payment Method',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
        },
    ];

    return (
        <>
            <Header />
            <div className="px-6">
                <h2 className='text-4xl font-bold text-center mb-4'>Invoices</h2>
                <Table dataSource={invoiceItems} columns={columns} bordered pagination={false} />
                <div className="cart-total flex justify-end mt-4">
                    <Card className="w-72 border-2">
                        <div>
                            <Button type="primary" size="large" className="w-full mt-4" onClick={() => setIsModalOpen(true)}>Print</Button>
                        </div>
                    </Card>
                </div>
            </div>
            <PrintInvoices isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};

export default InvoicesPage;
