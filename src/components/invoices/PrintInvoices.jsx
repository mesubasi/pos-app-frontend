//CreateInvoice.jsx

import { Button, Modal } from 'antd';

const PrintInvoices = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <>
            <Modal title="Invoices Print" open={isModalOpen} footer={false} width={800} onCancel={() => setIsModalOpen(false)}>
                <section className='py-20 bg-black'>
                    <div className='max-w-5xl mx-auto bg-white'>
                        <article className='overflow-hidden'>
                            <div className="logo my-6">
                                <h2 className='text-4xl font-bold text-slate-700'>LOGO</h2>
                            </div>
                            <div className="invoice-details">
                                <div className='grid grid-cols-4 gap-12'>
                                    <div className='text-md text-slate-500'>
                                        <p className='font-bold text-slate-700'>Invoice Detail:</p>
                                        <p>Unwrapped</p>
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
                                            <p>00041</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-slate-700'>Date of Issue:</p>
                                            <p>2024-04-01</p>
                                        </div>
                                    </div>
                                    <div className='text-md text-slate-500'>
                                        <div className='pb-2'>
                                            <p className='font-bold text-slate-700'>Terms:</p>
                                            <p>10 Days</p>
                                        </div>
                                        <div>
                                            <p className='font-bold text-slate-700'>Due:</p>
                                            <p>00.00.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='invoice-table-area mt-8'>
                                <table className='min-w-full divide-y divide-slate-500 overflow-hidden'>
                                    <thead>
                                        <tr className='border-b text-slate-200'>
                                            <th scope='col' className='pb-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Image</th>
                                            <th scope='col' className='pb-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Title</th>
                                            <th scope='col' className='pb-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Price</th>
                                            <th scope='col' className='pb-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Piece</th>
                                            <th scope='col' className='pb-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-b border-t border-slate-200'>
                                            <td className='py-4 pr-3'>
                                                <img src="https://www.diyetkolik.com/site_media/media/customvideo_images/Yesil_elma_yag_yakar_m__Krmz_elma_m_yesil_elma_m__1_1.jpg" alt="" className='w-12 h-12 object-cover' />
                                            </td>
                                            <td className='py-4'>
                                                <span className='font-medium'>Apple</span>
                                            </td>
                                            <td className='py-4 text-center'>
                                                <span>5$</span>
                                            </td>
                                            <td className='py-4 text-center'>
                                                <span>1</span>
                                            </td>
                                            <td className='py-4 text-end'>
                                                <span>5.00$</span>
                                            </td>
                                        </tr>
                                        <tr className='border-b border-t border-slate-200'>
                                            <td className='py-4 pr-3'>
                                                <img src="https://www.diyetkolik.com/site_media/media/customvideo_images/Yesil_elma_yag_yakar_m__Krmz_elma_m_yesil_elma_m__1_1.jpg" alt="" className='w-12 h-12 object-cover' />
                                            </td>
                                            <td className='py-4'>
                                                <span className='font-medium'>Apple</span>
                                            </td>
                                            <td className='py-4 text-center'>
                                                <span>5$</span>
                                            </td>
                                            <td className='py-4 text-center'>
                                                <span>1</span>
                                            </td>
                                            <td className='py-4 text-end'>
                                                <span>5.00$</span>
                                            </td>
                                        </tr>
                                        <tr className='border-b border-t border-slate-200'>
                                            <td className='py-4 pr-3'>
                                                <img src="https://www.diyetkolik.com/site_media/media/customvideo_images/Yesil_elma_yag_yakar_m__Krmz_elma_m_yesil_elma_m__1_1.jpg" alt="" className='w-12 h-12 object-cover' />
                                            </td>
                                            <td className='py-4'>
                                                <span className='font-medium'>Apple</span>
                                            </td>
                                            <td className='py-4 text-center'>
                                                <span>5$</span>
                                            </td>
                                            <td className='py-4 text-center'>
                                                <span>1</span>
                                            </td>
                                            <td className='py-4 text-end'>
                                                <span>5.00$</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th className='text-right pt-6' colSpan="4" scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    Subtotal
                                                </span>
                                            </th>
                                            <th className='text-right pt-6' scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    63$
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className='text-right pt-6' colSpan="4" scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    Tax
                                                </span>
                                            </th>
                                            <th className='text-right pt-4' scope="row">
                                                <span className='font-normal text-red-600'>
                                                    +4.88$
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className='text-right pt-4' colSpan="4" scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    Total
                                                </span>
                                            </th>
                                            <th className='text-right pt-4' scope="row">
                                                <span className='font-normal text-slate-700'>
                                                    67.88$
                                                </span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className='py-9'>
                                    <div className='border-t pt-9 border-slate-200'>
                                        <p className='text-sm font-light text-slate-700'>
                                            Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                                            Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                                            sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                                            talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                                            ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                                            Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                                            geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                                            England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                                            Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <div className='flex justify-end mt-4'>
                    <Button type="primary" size="large">Print</Button>
                </div>
            </Modal>
        </>
    );
};

export default PrintInvoices;
