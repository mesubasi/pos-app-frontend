import CartTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home flex md:flex-row flex-col px-6 justify-between gap-10 md:pb-0 pb-20">
                <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] -mr-3 pb-4">
                    <Categories />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-5">
                    <Products />
                </div>
                <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
                    <CartTotals />
                </div>
            </div>
        </>
    )
}

export default HomePage