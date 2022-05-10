import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "../feature/projectSlice";

const store = configureStore({
  reducer: {
    list: projectReducer,
  },
});
export default store;
