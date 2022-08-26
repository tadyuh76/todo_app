import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoPriority, TodoStatus } from "../../utils/enums";

export interface FilterState {
  text: string;
  status: TodoStatus;
  priorities: TodoPriority[];
}

const initialState: FilterState = {
  text: "",
  status: TodoStatus.All,
  priorities: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    changeStatus: (state, action: PayloadAction<TodoStatus>) => {
      state.status = action.payload;
    },
    changePriorities: (state, action: PayloadAction<TodoPriority[]>) => {
      state.priorities = action.payload;
    },
  },
});

export default filterSlice;
