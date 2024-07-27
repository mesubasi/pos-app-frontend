//InvoicesPage.jsx

import { Button, Table } from 'antd';
import Header from '../components/header/Header';
import { useEffect, useState } from 'react';
import PrintInvoices from '../components/invoices/PrintInvoices';


const InvoicesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [invoiceItems, setInvoiceItems] = useState();
    const [customer, setCustomer] = useState();

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
        {
            title: 'Total Price',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (text) => {
                return <span>{text} $</span>
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'totalAmount',
            render: (_, record) => {
                return <Button type='link' className='pl-0' onClick={() => {
                    setIsModalOpen(true)
                    setCustomer(record)
                }}> Print</ Button>
            }
        },
    ];

    return (
        <>
            <Header />
            <div className="px-6">
                <h2 className='text-4xl font-bold text-center mb-4'>Invoices</h2>
                <Table dataSource={invoiceItems} columns={columns} bordered pagination={false} />
            </div>
            <PrintInvoices isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};

export default InvoicesPage;
