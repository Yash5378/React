import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// const postSlice = createSlice({
//   name :"post",
//   initialState,
//   reducers:{

//   }
// })
export const { login, logout } = authSlice.actions;

export default createSlice.reducers;
