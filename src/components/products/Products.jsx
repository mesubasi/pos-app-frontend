//Products.jsx

import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import Add from "./Add";
import { useNavigate } from "react-router-dom";


const Products = ({ categories, filtered }) => {
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="products-wrapper grid grid-cols-card gap-4">
            {filtered.map((item) => (
                <ProductItem item={item} key={item._id} />
            ))}
            <div className="rounded-md product-item hover:shadow-lg transition-all border cursor-pointer select-none bg-purple-800 flex justify-center items-center hover:opacity-90" onClick={() => setIsModalAddOpen(true)}>
                <PlusOutlined className="text-white md:text-2xl " />
            </div>
            <div className="rounded-md product-item hover:shadow-lg transition-all border cursor-pointer select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px]" onClick={() => navigate("products")}>
                <EditOutlined className="text-white md:text-2xl" />
            </div>
            <Add isModalAddOpen={isModalAddOpen} setIsModalAddOpen={setIsModalAddOpen} categories={categories} products={products} setProducts={setProducts} />
        </div>
    )
}

export default Products