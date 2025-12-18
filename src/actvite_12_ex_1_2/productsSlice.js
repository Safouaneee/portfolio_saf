import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        id: Date.now(),
        name: action.payload.name,
        quantity: action.payload.quantity
      });
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    }
  }
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
