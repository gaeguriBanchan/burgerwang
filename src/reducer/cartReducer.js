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
      const date = state.cartList.findIndex((item) => item.date === action.payload.date);
      state.cartList[date].count = action.payload.orderCount;
    },
    changeOption: (state, action) => {
      const targetDate = state.cartList.findIndex((item) => item.date === action.payload.date);
      const selectedCart = state.cartList[targetDate];
      const modifyTargetOption = action.payload.optiontype;
      const modifyData = action.payload.res;
      const isIFreeOver = action.payload.isIFreeOver;
      const calculateTotal = (currentPrice, updatePrice) => {
        selectedCart.totalPrice = selectedCart.totalPrice - currentPrice + updatePrice;
      };
      const addIngredientInfo = {
        ingredirentSeq: 84,
        ingredientName: "재료 추가",
        ingredientPrice: 400,
      };
      if (modifyTargetOption === "ingredient") {
        const hasIngredientInfo = () => {
          const seq = selectedCart.ingredientInfo.findIndex(
            (item) => item.ingredirentSeq === addIngredientInfo.ingredirentSeq
          );
          return !!seq;
        };
        let currentPrice = 0;
        let updatePrice = 0;
        let updateInfo = modifyData;
        if (isIFreeOver) {
          if (hasIngredientInfo()) {
            updateInfo = [...updateInfo, addIngredientInfo];
          }
        } else {
          if (hasIngredientInfo()) {
            updateInfo = updateInfo.filter(
              (item) => item.ingredirentSeq !== addIngredientInfo.ingredirentSeq
            );
          }
        }
        selectedCart.ingredientInfo.forEach((item) => (currentPrice += item.ingredientPrice));
        updateInfo.forEach((item) => (updatePrice += item.ingredientPrice));
        calculateTotal(currentPrice, updatePrice);
        selectedCart.ingredientInfo = updateInfo;
      }
      if (modifyTargetOption === "side") {
        let currentPrice =
          selectedCart.sideInfo.length > 0 ? selectedCart.sideInfo[0].sideOptPrice : 0;
        let updatePrice = modifyData.sideOptPrice;
        calculateTotal(currentPrice, updatePrice);
        selectedCart.sideInfo = [modifyData];
      }
      if (modifyTargetOption === "drink1") {
        let currentPrice =
          selectedCart.drinkInfo.length > 0 ? selectedCart.drinkInfo[0].drinkOptPrice : 0;
        let updatePrice = modifyData.drinkOptPrice;
        calculateTotal(currentPrice, updatePrice);
        selectedCart.drinkInfo = [modifyData];
      }
      if (modifyTargetOption === "drink2") {
        let currentPrice =
          selectedCart.drink2Info.length > 0 ? selectedCart.drink2Info[0].drinkOptPrice : 0;
        let updatePrice = modifyData.drinkOptPrice;
        calculateTotal(currentPrice, updatePrice);
        selectedCart.drink2Info = [modifyData];
      }
    },
  },
});

export const { addCartList, removeCart, removeOneCart, changeCount, changeOption } =
  cartReducer.actions;
export default cartReducer;
