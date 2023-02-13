import { createSlice } from "@reduxjs/toolkit";
import {
  getProfileDataAction,
  getUserDataAction,
  loginUserAction,
  resetPasswordUserAction,
  signUpUserAction,
} from "./asyncUserReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetail: undefined,
    isLoggedIn: false,
    userLogInData: undefined,
    userData: undefined,
    userProfileData: undefined,
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
        state.userLogInData = action.payload;
      }
    });

    builder.addCase(resetPasswordUserAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userData = action.payload;
    });
    builder.addCase(getProfileDataAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userProfileData = action.payload;
    });
  },
});

export default userSlice;
export const { increment } = userSlice.actions;
export const selectUser = (state) => state.user.userDetail;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
