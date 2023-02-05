import { configureStore } from "@reduxjs/toolkit";
import foodOrderSlice from "../reducer/Counter-slice";
import userSlice from "../reducer/userSlice";

export const store = configureStore({
  reducer: {
    foodOrder: foodOrderSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
