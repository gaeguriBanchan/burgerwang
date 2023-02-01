import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    phon: "",
    gen: "",
    birth: "",
    grade: "",
    status: "",
    pwd: "",
  },
  reducers: {
    //로그인 되면 user 스토어 state 업데이트
    loginUser: (state, action) => {
      console.log("사용자로그인했다.", action.payload);
      //action.payload로 담겨옴
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phon = action.payload.phon;
      state.gen = action.payload.gen;
      state.birth = action.payload.birth;
      state.grade = action.payload.grade;
      state.status = action.payload.status;
      state.pwd = action.payload.pwd;
    },
    clearUser: (state, action) => {
      state.email = "";
      state.name = "";
      state.phon = "";
      state.gen = "";
      state.birth = "";
      state.grade = "";
      state.status = "";
      state.pwd = "";
    },
  },
});
export const { loginUser, clearUser } = userSlice.actions;
export default userSlice;
