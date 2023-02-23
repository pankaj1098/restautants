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
    isLoggedIn: false,
    userData: undefined,
  },
  reducers: {
    logoutAction(state) {
      console.log("logout button clicked");
      state.isLoggedIn = false;
      state.userData = undefined;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUserAction.fulfilled, (state, action) => {
      // console.log("6", action.payload);
      // state.userSignUpData = action.payload;
    });

    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      if (action.payload === undefined) {
        // console.log("not logged in");
      } else {
        // console.log("logged in");
        // state.userDetail = action.payload;
        state.isLoggedIn = true;
        const idToken = action.payload.idToken;
        localStorage.setItem("idToken", idToken);
        // state.userLogInData = action.payload;
      }
    });

    builder.addCase(resetPasswordUserAction.fulfilled, (state, action) => {
      // console.log(6, action.payload);
    });

    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      // console.log(6, action.payload);
      state.userData = action.payload;
      if (action.payload) {
        state.isLoggedIn = true;
      }
    });

    // builder.addCase(getProfileDataAction.fulfilled, (state, action) => {
    //   console.log(6, action.payload);
    //   state.userProfileData = action.payload;
    // });
  },
});

export default userSlice;
export const { logoutAction } = userSlice.actions;
export const selectUser = (state) => state.user.userData;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
