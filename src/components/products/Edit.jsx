import { Form, Input, Modal, Table, message, Button, Select } from 'antd';
import React, { useEffect, useState } from 'react';

const Edit = ({ categories, setCategories }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/products/get-all-product");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    const onFinish = async (values) => {
        try {
            await fetch("http://localhost:5000/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({ ...values }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Category Successfully Updated!");
            setCategories(categories.map((item) => {
                if (item._id === values._id) {
                    return { ...item, ...values };
                }
                return item;
            }));
        } catch (err) {
            message.error("Something went wrong!");
            console.log(err);
        }
    };

    const deleteCategory = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                await fetch(`http://localhost:5000/api/categories/delete-category/${id}`, {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                });
                message.success("Category Deleted Successfully");
                setCategories(categories.filter((item) => item._id !== id));
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
                    <Button type="link" className="pl-0">Edit</Button>
                    <Button type="link" htmlType="submit" className="text-gray-500">Save</Button>
                    <Button type="link" danger onClick={() => deleteCategory(record._id)}>Delete</Button>
                </div>
            )
        }
    ];

    return (
        <>
            <Table bordered dataSource={products} columns={columns} rowKey={"_id"} scroll={{ x: 1000, y: 600 }} />
        </>
    );
};

export default Edit;
