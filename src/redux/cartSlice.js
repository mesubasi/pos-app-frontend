import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
