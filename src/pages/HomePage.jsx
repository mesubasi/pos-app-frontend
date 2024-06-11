//HomePage.jsx

import { useState, useEffect } from "react";
import CartTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";

const HomePage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/categories/get-all-category");
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

    return (
        <>
            <Header />
            <div className="home flex md:flex-row flex-col px-6 justify-between gap-10 md:pb-0 pb-20">
                <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] -mr-3 pb-4">
                    <Categories categories={categories} setCategories={setCategories} />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-5">
                    <Products categories={categories} />
                </div>
                <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
                    <CartTotals />
                </div>
            </div>
        </>
    )
}

export default HomePage