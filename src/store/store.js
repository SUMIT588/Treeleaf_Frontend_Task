import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

const store = configureStore({
  reducer: postReducer,
});

export default store;
