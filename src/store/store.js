import { configureStore } from "@reduxjs/toolkit";
import foodOrderSlice from "../reducer/Counter-slice";

export const store = configureStore({
  reducer: {
    foodOrder: foodOrderSlice.reducer,
  },
});

export default store;
