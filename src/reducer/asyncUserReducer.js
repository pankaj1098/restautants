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
  async (credentials) => {
    console.log("2", credentials);
    const response = await apiUserService.login(credentials);

    console.log("5", response);
    return response;
  }
);
export const resetPasswordUserAction = createAsyncThunk(
  "resetPasswordUserAction",
  async (credentials) => {
    console.log("2", credentials);
    const response = await apiUserService.resetPassword(credentials);

    console.log("5", response);
    return response;
  }
);

export const getUserDataAction = createAsyncThunk(
  "getUserDataAction",
  async () => {
    console.log("2");
    const response = await apiUserService.userData();

    console.log("5", response);
    return response.users[0];
  }
);

export const getProfileDataAction = createAsyncThunk(
  "getProfileDataAction",
  async () => {
    console.log("2");
    const response = await apiUserService.updateProfile();

    console.log("5", response);
    return response.users[0];
  }
);
