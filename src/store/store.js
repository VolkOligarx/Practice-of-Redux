import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../store/slices/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
