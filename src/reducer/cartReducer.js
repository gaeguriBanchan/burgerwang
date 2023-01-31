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
      state.cartList = state.cartList.filter((item) => !action.payload.includes(item.date));
    },
    removeOneCart: (state, action) => {
      state.cartList = state.cartList.filter((item) => action.payload !== item.date);
    },
    changeCount: (state, action) => {
      const num = state.cartList.findIndex((item) => item.date === action.payload.date);
      state.cartList[num].count = action.payload.orderCount;
    },
    changeOption: (state, action) => {
      const num = state.cartList.findIndex((item) => item.date === action.payload.date);
      if (action.payload.optiontype === "ingredient") {
        let currentPrice = 0;
        let updatePrice = 0;
        state.cartList[num].ingredientInfo.forEach(
          (item) => (currentPrice += item.ingredientPrice)
        );
        action.payload.res.forEach((item) => (updatePrice += item.ingredientPrice));
        state.cartList[num].totalPrice =
          state.cartList[num].totalPrice - currentPrice + updatePrice;
        state.cartList[num].ingredientInfo = action.payload.res;
      }
      if (action.payload.optiontype === "side") {
        let currentPrice =
          state.cartList[num].sideInfo > 0 ? state.cartList[num].sideInfo[0].sideOptPrice : 0;
        let updatePrice = action.payload.res.sideOptPrice;
        state.cartList[num].totalPrice =
          state.cartList[num].totalPrice - currentPrice + updatePrice;
        state.cartList[num].sideInfo = [action.payload.res];
      }
      if (action.payload.optiontype === "drink1") {
        let currentPrice =
          state.cartList[num].drinkInfo > 0 ? state.cartList[num].drinkInfo[0].drinkOptPrice : 0;
        let updatePrice = action.payload.res.drinkOptPrice;
        state.cartList[num].totalPrice =
          state.cartList[num].totalPrice - currentPrice + updatePrice;
        state.cartList[num].drinkInfo = [action.payload.res];
      }
      if (action.payload.optiontype === "drink2") {
        let currentPrice =
          state.cartList[num].drink2Info > 0 ? state.cartList[num].drink2Info[0].drinkOptPrice : 0;
        let updatePrice = action.payload.res.drinkOptPrice;
        state.cartList[num].totalPrice =
          state.cartList[num].totalPrice - currentPrice + updatePrice;
        state.cartList[num].drink2Info = [action.payload.res];
      }
    },
  },
});

export const { addCartList, removeCart, removeOneCart, changeCount, changeOption } =
  cartReducer.actions;
export default cartReducer;
