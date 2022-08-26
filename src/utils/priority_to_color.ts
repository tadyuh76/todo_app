import { TodoPriority } from "./enums";

const priorityToColor = {
  [TodoPriority.High]: "red",
  [TodoPriority.Medium]: "gold",
  [TodoPriority.Low]: "blue",
};

export default priorityToColor;
