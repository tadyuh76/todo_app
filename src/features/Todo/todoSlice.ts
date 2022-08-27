import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoI } from "./types";

const initialState: TodoI[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<TodoI[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<TodoI>) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<String>) => {
      const toggledTodo = state.find((todo) => todo.id === action.payload);
      toggledTodo!.completed = !toggledTodo!.completed;
    },
    deleteTodo: (state, action: PayloadAction<String>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice;
