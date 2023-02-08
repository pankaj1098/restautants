import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserAction,
  signUpUserAction,
} from "./asyncUserReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetail: undefined,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUserAction.fulfilled, (state, action) => {
      console.log("6", action.payload);
      state.userSignUpData = action.payload;
    });
  
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      if (action.payload === undefined) {
        console.log("not logged in");
      } else {
        console.log("logged in");
        state.userDetail = action.payload;
        state.isLoggedIn = true;
      }
    });
  },
});

export default userSlice;
export const { increment } = userSlice.actions;
export const selectUser = (state) => state.user.userDetail;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
