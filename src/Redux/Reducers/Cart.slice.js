import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isOrderPlaced: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      console.log(action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return state.items
      state.items.push(product);
    },
    checkIsAdded: (state, action) => {
      // const itemsCopy = [...state?.items];
      // console.log(action.payload);
      // return itemsCopy?.filter((item) => item._id === action.payload).length > 0
      //   ? true
      //   : false;
    },
    removeProduct: (state, action) => {
      state.value -= 1;
    },
    incrementByQuantity: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  checkIsAdded,
  removeProduct,
  incrementByQuantity,
} = Cart.actions;

export default Cart.reducer;