import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoI } from "./types";

const initialState: TodoI[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoI>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<String>) => {
      const toggledTodo = state.find((todo) => todo.id === action.payload);
      toggledTodo!.completed = !toggledTodo!.completed;
    },
  },
});

export default todoSlice;
