//CreateInvoice.jsx

import { Button, Modal } from 'antd';
import { useRef } from 'react';
import { useReactToPrint } from "react-to-print"

const PrintInvoices = ({ isModalOpen, setIsModalOpen, customer }) => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    const addOneYear = (dateString) => {
        const date = new Date(dateString);
        date.setFullYear(date.getFullYear() + 1);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const formattedDate = customer?.createdAt ? addOneYear(customer.createdAt) : '';

    return (
        <>
            <Modal title="Invoices Print" open={isModalOpen} footer={false} width={800} onCancel={() => setIsModalOpen(false)}>
                <section className='py-20 bg-black' ref={componentRef} key={customer?._id}>
                    <div className='max-w-5xl px-4 mx-auto bg-white'>
                        <article className='overflow-hidden'>
                            <div className="logo my-6">
                                <h2 className='text-4xl font-bold text-slate-700'>LOGO</h2>
                            </div>
                            <div className="invoice-details">
                                <div className='grid sm:grid-cols-4 grid-cols-3 gap-12'>
                                    <div className='text-md text-slate-500'>
                                        <p className='font-bold text-slate-700'>Invoice Detail:</p>
                                        <p className='text-green-600'>{customer?.customerName}</p>
                                        <p> Fake Street  123</p>
                                        <p> San Javier</p>
                                        <p> CA 1234</p>
                                    </div>
                                    <div className='text-md text-slate-500'>
                                        <p className='font-bold text-slate-700'>Invoice:</p>
                                        <p>The Boring Company</p>
                                        <p> Tesla Street 007</p>
                                        <p> Lisbon</p>
                                        <p> CA 0000</p>
                                    </div>
                                    <div className='text-md text-slate-500'>
                                        <div className='pb-2'>
                                            <p className='font-bold text-slate-700'>Invoice Number:</p>
                                            <p>{customer?._id.substring(0, 18)}</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-slate-700'>Date of Issue:</p>
                                            <p>{customer?.createdAt.substring(0, 10)}</p>
                                        </div>
                                    </div>
                                    <div className='text-md text-slate-500 sm:block hidden'>
                                        <div className='pb-2'>
                                            <p className='font-bold text-slate-700'>Terms:</p>
                                            <p>10 Days</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-slate-700'>Due:</p>
                                            <p>{formattedDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='invoice-table-area mt-8'>
                                <table className='min-w-full divide-y divide-slate-500 overflow-hidden'>
                                    <thead>
                                        <tr className='border-b text-slate-200'>
                                            <th scope='col' className='pb-3.5 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Image</th>
                                            <th scope='col' className='pb-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden'>Title</th>
                                            <th scope='col' colSpan={4} className='pb-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden'>Title</th>
                                            <th scope='col' className='pb-3.5 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Price</th>
                                            <th scope='col' className='pb-3.5 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Quantity</th>
                                            <th scope='col' className='pb-3.5 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customer?.cartItems.map((item) => (
                                            <tr key={item._id} className='border-b border-t border-slate-200'>
                                                <td className='py-4 pr-3 sm:table-cell hidden'>
                                                    <img src={item.img} alt="" className='w-12 h-12 object-cover' />
                                                </td>
                                                <td className='py-4'>
                                                    <div className='flex flex-col'>
                                                        <span className='font-medium'>{item.title}</span>
                                                        <span className='font-medium sm:hidden inline-block text-xs'>1 Unit At {(item.price).toFixed(2)}$</span>
                                                    </div>
                                                </td>
                                                <td className='py-4 sm:text-center sm:table-cell hidden'>
                                                    <span>{(item.price).toFixed(2)} $</span>
                                                </td>
                                                <td className='py-4 sm:text-center text-right sm:table-cell hidden'>
                                                    <span>{item.quantity}</span>
                                                </td>
                                                <td className='py-4 text-end' colSpan={4}>
                                                    <span>{(item.price * item.quantity).toFixed(2)} $</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th className='text-right pt-4 sm:table-cell hidden' colSpan="4" scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    Subtotal
                                                </span>
                                            </th>
                                            <th className='text-left pt-4 sm:hidden' colSpan="4" scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    Subtotal
                                                </span>
                                            </th>
                                            <th className='text-right pt-4' scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    {customer?.subTotal.toFixed(2)} $
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className='text-right pt-4 sm:table-cell hidden' colSpan="4" scope="row">
                                                <span className='font-bold text-red-700'>
                                                    TAX
                                                </span>
                                            </th>
                                            <th className='text-left pt-4 sm:hidden' colSpan="4" scope="row">
                                                <span className='font-bold text-red-700'>
                                                    TAX
                                                </span>
                                            </th>
                                            <th className='text-right pt-4' scope="row">
                                                <span className='font-bold text-red-700'>
                                                    +{customer?.tax.toFixed(2)} $
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className='text-right pt-4 sm:table-cell hidden' colSpan="4" scope="row">
                                                <span className='font-bold text-slate-700'>
                                                    Total
                                                </span>
                                            </th>
                                            <th className='text-left pt-4 sm:hidden' colSpan="4" scope="row">
                                                <span className='font-bold text-slate-700'>
                                                    Total
                                                </span>
                                            </th>
                                            <th className='text-right pt-4' scope="row">
                                                <span className='font-bold text-slate-700'>
                                                    {(customer?.totalAmount.toFixed(2))} $
                                                </span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className='py-9'>
                                    <div className='border-t pt-9 border-slate-200'>
                                        <p className='text-sm font-light text-slate-700'>
                                            Payment terms are 14 days. Late payment of unpacked debts
                                            According to the Payment of Benefits Act 0000, self-employed persons are entitled
                                            00.00 late payment fee in case of non-payment of debts after
                                            they have the right to demand this fee at this point
                                            please note that a new invoice will be presented in addition.
                                            If the revised invoice is not paid within 14 days, the invoice due
                                            additional interest on the past account and 8% legal rate plus 0.5% Bank of
                                            England base, totalling 8.5% shall be applied.
                                            Parties cannot make any agreement other than the provisions of the Law.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <div className='flex justify-end mt-4'>
                    <Button type="primary" size="large" onClick={handlePrint}>Print</Button>
                </div>
            </Modal>
        </>
    );
};

export default PrintInvoices;
