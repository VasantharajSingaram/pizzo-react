import { createSlice } from "@reduxjs/toolkit";

export const Product = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
   saveItemsToStore: (state, action) => {
    state.items = action.payload;
   },
  },
});

// Action creators are generated for each case reducer function
export const { saveItemsToStore } = Product.actions;

export default Product.reducer;
