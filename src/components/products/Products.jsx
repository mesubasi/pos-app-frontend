//Products.jsx

import { useEffect, useState } from "react"
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import Add from "./Add";

const Products = ({ categories }) => {
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
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


    return (
        <div className="products-wrapper grid grid-cols-card gap-4">
            {products.map((item) => (
                <ProductItem item={item} key={item._id} />
            ))}
            <div className="product-item hover:shadow-lg transition-all border cursor-pointer select-none bg-purple-800 flex justify-center items-center hover:opacity-90" onClick={() => setIsModalAddOpen(true)}>
                <PlusOutlined className="text-white md:text-2xl " />
            </div>
            <div className="product-item hover:shadow-lg transition-all border cursor-pointer select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h-[180px]">
                <EditOutlined className="text-white md:text-2xl" />
            </div>
            <Add isModalAddOpen={isModalAddOpen} setIsModalAddOpen={setIsModalAddOpen} categories={categories} products={products} setProducts={setProducts} />
        </div>
    )
}

export default Products