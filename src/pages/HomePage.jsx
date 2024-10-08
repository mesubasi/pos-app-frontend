import { useState, useEffect } from "react";
import CartTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
import { Spin, Alert } from "antd";

const HomePage = () => {
    const [categories, setCategories] = useState();
    const [filtered, setFiltered] = useState([]);
    const [products, setProducts] = useState();
    const [search, setSearch] = useState("");


    useEffect(() => {
        const getProducts = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
                const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/products/get-all-product", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                } else {
                    console.error("Failed to fetch products:", res.statusText);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("posUser"))?.accessToken;
                const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/get-all-category", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setCategories(data.map((item) => {
                        return { ...item, value: item.title }
                    }));
                } else {
                    console.error("Failed to fetch categories:", res.statusText);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getCategories();
    }, []);

    return (
        <>
            <Header setSearch={setSearch} />
            <Alert
                message="Please add appropriate content for the add product function!"
                banner
                closable
            />
            {products && categories ? (
                <div className="home flex md:flex-row flex-col px-6 justify-between gap-10 md:pb-0 pb-20 h-screen">
                    <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] -mr-3 pb-4">
                        <Categories categories={categories} setCategories={setCategories} setFiltered={setFiltered} products={products} />
                    </div>
                    <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-5 min-h-[500px]">
                        <Products categories={categories} filtered={filtered} products={products} setProducts={setProducts} search={search} />
                    </div>
                    <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
                        <CartTotals />
                    </div>
                </div>
            ) : (<Spin size="large" className="absolute top-1/2 h-screen w-screen flex justify-center" />)}
        </>
    );
}

export default HomePage;
