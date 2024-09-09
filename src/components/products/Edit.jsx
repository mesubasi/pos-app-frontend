import { Form, Input, Modal, Table, message, Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';

const Edit = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState({})
    const [form] = Form.useForm();

    useEffect(() => {
        const getProducts = async () => {
            const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
            try {
                const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/products/get-all-product", {
                    headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json; charset=UTF-8" }
                });
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
            try {
                const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/get-all-category", {
                    headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json; charset=UTF-8" }
                });
                const data = await res.json();
                data && setCategories(data.map((item) => {
                    return { ...item, value: item.title }
                }));
            } catch (error) {
                console.log(error);
            }
        };
        getCategories();
    }, []);

    const onFinish = async (values) => {
        try {
            const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
            await fetch(process.env.REACT_APP_SERVER_URL + "/api/products/update-product", {
                method: "PUT",
                body: JSON.stringify({ ...values, productId: editingItem._id }),
                headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Product Successfully Updated!");
            setProducts(products.map((item) => {
                if (item._id === editingItem._id) { //  If it's the same product
                    return { ...item, ...values }; // Send all your items and values
                }
                return item; //If not, send the item itself
            }));
            setIsEditModalOpen(false);
        } catch (err) {
            message.error("Something went wrong!");
            console.log(err);
        }
    };

    const deleteProduct = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
                await fetch(`http://localhost:5000/api/products/delete-product`, {
                    method: "DELETE",
                    body: JSON.stringify({ productId: id }),
                    headers: { "Authorization": `Bearer ${token}`, "Content-type": "application/json; charset=UTF-8" },
                });
                message.success("Product Deleted Successfully");
                setProducts(products.filter((item) => item._id !== id));
            } catch (err) {
                message.error("Something went wrong!");
                console.log(err);
            }
        }
    };

    const columns = [
        {
            title: "Product Title",
            dataIndex: "title",
            width: "8%",
            render: (_, record) => <p>{record.title}</p>
        },
        {
            title: "Product Image",
            dataIndex: "img",
            width: "4%",
            render: (_, record) => <img src={record.img} alt="" className='h-20 object-cover' />
        },
        {
            title: "Product Price",
            dataIndex: "price",
            width: "8%",
        },
        {
            title: "Category",
            dataIndex: "category",
            width: "8%",
        },
        {
            title: "Action",
            dataIndex: "Action",
            width: "8%",
            render: (_, record) => (
                <div>
                    <Button type="link" className="pl-0" onClick={() => { setIsEditModalOpen(true); setEditingItem(record); }}>Edit</Button>
                    <Button type="link" danger onClick={() => deleteProduct(record._id)}>Delete</Button>
                </div>
            )
        }
    ];

    return (
        <>
            <Table bordered dataSource={products} columns={columns} rowKey={"_id"} scroll={{ x: 1000, y: 600 }} />
            <Modal title="Edit Products" open={isEditModalOpen} onCancel={() => setIsEditModalOpen(false)} footer={false}>
                <Form layout="vertical" onFinish={onFinish} form={form} initialValues={editingItem}>
                    <Form.Item name="title" label="Add Product Name" rules={[{ required: true, message: "Product Field Cannot Be Empty!", }]}>
                        <Input placeholder='Enter Product Name.' />
                    </Form.Item>
                    <Form.Item name="img" label="Add Product Image" rules={[{ required: true, message: "Product Image Field Cannot Be Empty!", }]}>
                        <Input placeholder='Enter Product Iamge.' />
                    </Form.Item>
                    <Form.Item name="price" label="Add Product Price" rules={[{ required: true, message: "Product Price Field Cannot Be Empty!", }]}>
                        <Input placeholder='Enter Product Price.' />
                    </Form.Item>
                    <Form.Item name="category" label="Select Product Category" rules={[{ required: true, message: "Product Category Field Cannot Be Empty!", }]}>
                        <Select
                            showSearch
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.title ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.title ?? '').toLowerCase().localeCompare((optionB?.title ?? '').toLowerCase())
                            }
                            options={categories}
                        />
                    </Form.Item>
                    <Form.Item className="flex justify-end mb-0">
                        <Button type="primary" htmlType="submit" >Edit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Edit;
