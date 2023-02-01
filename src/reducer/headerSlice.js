import { createSlice } from "@reduxjs/toolkit";
// 작업자 : 김재진 타이틀 글자 관리 Redux
const headerSlice = createSlice({
  name: "headertitle",
  initialState: {
    title: "",
  },
  reducers: {
    setTitle: (state, action) => {
      console.log("타이틀이 변경 되었어요.", action.payload);
      state.title = action.payload.title;
    },
  },
});
export const { setTitle } = headerSlice.actions;
export default headerSlice;
