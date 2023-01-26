import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addCartList: (state, action) => {
      state.cartList = [...state.cartList.concat(action.payload)];
    },
    removeCart: (state, action) => {
      state.cartList = state.cartList.filter((item) => !action.payload.includes(item.cartSeq));
    },
    changeCount: (state, action) => {
      const num = state.cartList.findIndex((item) => item.cartSeq === action.payload.cartSeq);
      state.cartList[num].count = action.payload.orderCount;
    },
  },
});

export const { addCartList, removeCart, changeCount } = cartReducer.actions;
export default cartReducer;
