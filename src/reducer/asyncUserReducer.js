import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUserService } from "../services/apiUserService";

export const signUpUserAction = createAsyncThunk(
  "signUpUserAction",
  async (credentials) => {
    console.log("2", credentials);
    const response = await apiUserService.signUp(credentials);
    console.log("5", response);
    return response;
  }
);
export const loginUserAction = createAsyncThunk(
  "loginUserAction",
  async (credentials, thunkAPI) => {
    // console.log("2", credentials);
    const response = await apiUserService.login(credentials);

    setTimeout(() => {
      thunkAPI.dispatch(getUserDataAction());
    }, 2000);

    // }

    return response;
  }
);
export const resetPasswordUserAction = createAsyncThunk(
  "resetPasswordUserAction",
  async (credentials) => {
    // console.log("2", credentials);
    const response = await apiUserService.resetPassword(credentials);

    // console.log("5", response);
    return response;
  }
);

export const getUserDataAction = createAsyncThunk(
  "getUserDataAction",
  async () => {
    // console.log("2");
    const response = await apiUserService.userData();

    // console.log("5", response);
    return response;
  }
);

export const getProfileDataAction = createAsyncThunk(
  "getProfileDataAction",
  async (credentials) => {
    // console.log("2");
    const response = await apiUserService.updateProfile(credentials);

    // console.log("5", response);
    return response;
  }
);
