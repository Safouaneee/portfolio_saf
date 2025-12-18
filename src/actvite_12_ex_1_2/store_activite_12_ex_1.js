import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import productsReducer from "./productsSlice";


export const store_ac_12 = configureStore({
  reducer: {
    tasks: tasksReducer,
    products: productsReducer
  }
});
