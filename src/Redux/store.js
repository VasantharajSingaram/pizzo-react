import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Reducers/Products.slice";
import CartSlice from "./Reducers/Cart.slice";

// ROOT REDUCER
// COMBINE REDUCER
export default configureStore({
  reducer: {
    food: ProductsSlice,
    cart: CartSlice,
  },
});
