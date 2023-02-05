import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, signUpUserAction } from "./asyncUserReducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetail: undefined,
    isLoggedIn: false,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUserAction.fulfilled, (state, action) => {
      console.log("6", action.payload);
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      console.log("6", action.payload);
      state.isLoggedIn = true;
      state.userDetail = action.payload;
    });
  },
});

export default userSlice;
export const { increment } = userSlice.actions;
export const selectUser = (state) => state.user.userDetail;
