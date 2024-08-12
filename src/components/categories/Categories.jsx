//Categories.jsx

import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import { useState } from "react";
import Add from "./Add";
import "./style.css"
import { Edit } from "./Edit";


const Categories = ({ categories, setCategories, setFiltered, products }) => {
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    useEffect(() => {
        setFiltered(products)
    }, [])


    return (
        <ul className="flex md:flex-col gap-4 text-lg">
            {categories.map((item) => (
                <li key={item._id} className="rounded-md bg-green-700 text-white hover:bg-pink-700 transition-all px-6 py-10 cursor-pointer text-center min-w-[145px]">
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