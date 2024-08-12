//Categories.jsx

import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react";
import Add from "./Add";
import "./style.css"
import { Edit } from "./Edit";


const Categories = ({ categories, setCategories, setFiltered, products }) => {
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [categoryTitle, setCategoryTitle] = useState("All");

    useEffect(() => {
        if (categoryTitle === "All") {
            setFiltered(products);
        } else {
            setFiltered(products.filter((item) => item.category === categoryTitle));
        }
    }, [products, setFiltered, categoryTitle])


    return (
        <ul className="flex md:flex-col gap-4 text-lg">
            {categories.map((item) => (
                <li key={item._id} className={`category-item ${item.title === categoryTitle && "bg-pink-700"}`} onClick={() => {
                    setCategoryTitle(item.title)
                }}>
                    <span>{item.title}</span>
                </li>
            ))}
            <li
                className="category-item rounded-md !bg-purple-800 hover:opacity-90"
                onClick={() => setIsModalAddOpen(true)}>
                <PlusOutlined className="md:text-2xl" />
            </li>
            <li
                className="category-item rounded-md !bg-orange-800 hover:opacity-90"
                onClick={() => setIsModalEditOpen(true)}>
                <EditOutlined className="md:text-2xl" />
            </li>
            <Add isModalAddOpen={isModalAddOpen} setIsModalAddOpen={setIsModalAddOpen} categories={categories} setCategories={setCategories} />
            <Edit isModalEditOpen={isModalEditOpen} setIsModalEditOpen={setIsModalEditOpen} categories={categories} setCategories={setCategories} />
        </ul>
    )
}

export default Categories