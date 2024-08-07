//InvoicesPage.jsx

import { Table, Card } from 'antd';
import Header from '../components/header/Header';
import { useEffect, useState } from 'react';

const CustomerPage = () => {
    const [invoiceItems, setInvoiceItems] = useState([]);

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
    }, []);

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
            title: 'Transaction Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => {
                return <span>{text.substring(0, 10)}</span>
            }
        },
    ];

    return (
        <>
            <Header />
            <div className="px-6">
                <h2 className='text-4xl font-bold text-center mb-4'>Customers</h2>
                <Table dataSource={invoiceItems} columns={columns} bordered pagination={false} scroll={{ x: 1000, y: 300 }} />
                <div className="cart-total flex justify-end mt-4">
                    <Card className="w-72 border-2">
                    </Card>
                </div>
            </div>
        </>
    );
};

export default CustomerPage;
