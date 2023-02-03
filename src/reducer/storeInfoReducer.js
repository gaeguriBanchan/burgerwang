import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

const storeInfoReducer = createSlice({
  name: "storeInfo",
  initialState: INITIAL_STATE,
  reducers: {
    modifyStoreInfo: (state, aciton) => {
      state.storeSeq = aciton.payload.storeSeq;
      state.storeName = aciton.payload.storeName;
    },
  },
});

export const { modifyStoreInfo } = storeInfoReducer.actions;

export default storeInfoReducer;
