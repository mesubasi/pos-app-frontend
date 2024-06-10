//Products.jsx

import { useEffect, useState } from "react"

const Products = () => {
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
                <div className="product-item hover:shadow-lg transition-all border cursor-pointer select-none">
                    <div className="product-img">
                        <img src={item.img} alt="" className="h-28 object-cover w-full border-b" />
                    </div>
                    <div className="product-info flex flex-col p-3">
                        <span className="font-bold">{item.title}</span>
                        <span>{item.price}&nbsp;$</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products