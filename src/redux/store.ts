import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/Filter/filterSlice";
import todoSlice from "../features/Todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
