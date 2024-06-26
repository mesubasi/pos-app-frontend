import { message } from "antd";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addProduct({ ...item, quantity: 1 }));
        message.success("Product Added to Cart.")
    }

    return (
        <div className="p-1 rounded-md bg-[#4286f4] product-item hover:shadow-lg transition-all border cursor-pointer select-none" onClick={handleClick}>
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