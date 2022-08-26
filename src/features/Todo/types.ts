import { TodoPriority } from "../../utils/enums";

export interface TodoI {
  id: string;
  text: string;
  priority: TodoPriority;
  completed: boolean;
}
