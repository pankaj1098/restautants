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
