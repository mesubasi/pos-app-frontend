//CartTotals.jsx

import { Button, message } from "antd";
import { ClearOutlined, PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, increase, decrease, reset } from "../../redux/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addClick = (item) => {
    dispatch(increase(item));
    message.success("Number of Products Increased!");
  }

  const decreaseClick = (item) => {
    if (item.quantity === 1) {
      if (window.confirm("Are you sure want to delete this item?")) {
        dispatch(decrease(item));
        message.error("Product Deleted From The Cart!");
      }
    } if (item.quantity > 1) {
      dispatch(decrease(item));
    }
  }

  const clearCart = () => {
    if (window.confirm("Are You Sure?")) {
      dispatch(reset());
      message.success("Cart Succesfully Clear.");
    }
  }

  return (
    <div className="cart h-full flex flex-col max-h-[calc(100vh_-_90px)]">
      <h2 className="text-white bg-blue-600 text-center py-4 font-bold tracking-wide">Products in Cart</h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cart.cartItems.length > 0 ? cart.cartItems.map((item) => (
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center">
              <img src={item.img} alt="" className="w-16 h-16 object-cover cursor-pointer" onClick={() => deleteClick(item)} />
              <div className="flex flex-col ml-2">
                <b>{item.title}</b>
                <span>{item.price}$ x {item.quantity}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button type="primary" size="small" className="w-full items-center justify-center rounded-full" onClick={() => addClick(item)} icon={<PlusCircleOutlined />} />
              <span className="font-bold w-12 inline-block text-center">{item.quantity}</span>
              <Button type="primary" size="small" className="w-full flex items-center justify-center rounded-full" onClick={() => decreaseClick(item)} icon={<MinusCircleOutlined />} />
            </div>
          </li>
        )) : <span className="text-center md:animate-bounce">Empty Cart</span>}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Subtotals</b>
            <span>{(cart.total) > 0 ? (cart.total).toFixed(2) : 0}$</span>
          </div>
          <div className="flex justify-between p-2">
            <b>VAT %{cart.tax}</b>
            <span className="text-red-700">{((cart.total * cart.tax) / 100) > 0 ? "+" + ((cart.total * cart.tax) / 100).toFixed(2) : 0}$</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl font-bold text-green-500">Total</b>
            <span className="text-xl">{(cart.total + (cart.total * cart.tax) / 100) > 0 ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2) : 0}$</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">Create Order</Button>
          <Button type="primary" size="large" className="w-full mt-2 flex items-center justify-center" danger onClick={clearCart} icon={<ClearOutlined />}>Clear</Button>
        </div>
      </div>
    </div>
  )
}

export default CartTotals