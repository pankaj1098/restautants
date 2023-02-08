import { createSlice } from "@reduxjs/toolkit";
import {
  getUserDataAction,
  loginUserAction,
  resetPasswordUserAction,
  signUpUserAction,
} from "./asyncUserReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    // userDetail: undefined,
    // isLoggedIn: false,
    userLogInData: undefined,
    userSignUpData: undefined,
    userProfileData: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUserAction.fulfilled, (state, action) => {
      console.log("6", action.payload);
      state.userSignUpData = action.payload;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      console.log("6", action.payload);
      // state.isLoggedIn = true;
      state.userLogInData = action.payload;
      const idToken = action.payload.idToken;
      localStorage.setItem("idToken", idToken);
    });
    builder.addCase(resetPasswordUserAction.fulfilled, (state, action) => {
      console.log("6", action.payload);
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      console.log("6", action.payload);
      state.userProfileData = action.payload;
    });
  },
});

export default userSlice;
// export const { increment } = userSlice.actions;
export const userActions = userSlice.actions;
// export const userProfileDetails = (state) => state.user.userProfileData;
