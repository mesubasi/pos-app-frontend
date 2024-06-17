import { addProduct } from "../../redux/cartSlice"

const ProductItem = ({ item }) => {
    return (
        <div className="product-item hover:shadow-lg transition-all border cursor-pointer select-none">
            <div className="product-img">
                <img src={item.img} alt="" className="h-28 object-cover w-full border-b" />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className="font-bold">{item.title}</span>
                <span>{item.price}&nbsp;$</span>
            </div>
        </div>
    )
}

export default ProductItem