import { createSelector } from "@reduxjs/toolkit";
import { TodoStatus } from "../utils/enums";
import { RootState } from "./store";

const todoSelector = (state: RootState) => state.todo;
const filterSelector = (state: RootState) => state.filter;

export const remainTodosSelector = createSelector(
  todoSelector,
  filterSelector,
  (todos, filter) => {
    const { text, status, priorities } = filter;

    if (status === TodoStatus.All) {
      return todos.filter((todo) =>
        priorities.length
          ? priorities.includes(todo.priority) &&
            todo.text.toLowerCase().includes(text.toLowerCase())
          : todo.text.toLowerCase().includes(text.toLowerCase())
      );
    }

    return todos.filter(
      (todo) =>
        todo.text.toLowerCase().includes(text.toLowerCase()) &&
        (status === TodoStatus.Completed ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
    );
  }
);
