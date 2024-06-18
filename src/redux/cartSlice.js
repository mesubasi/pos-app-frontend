import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (findCartItem) {
        findCartItem.quantity++;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    deleteProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
