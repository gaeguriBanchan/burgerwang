import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {};

const addressReducer = createSlice({
  name: "address",
  initialState: INITIAL_STATE,
  reducers: {
    modifyAdress: (state, action) => {
      const { addressJibun, addressRoad, addressDetail } = action.payload;
      state.addressJibun = addressJibun;
      state.addressRoad = addressRoad;
      state.addressDetail = addressDetail;
    },
  },
});

export const { modifyAdress } = addressReducer.actions;
export default addressReducer;
