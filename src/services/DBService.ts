import axios from "axios";
import { TodoI } from "../features/Todo/types";

class DBService {
  private baseURL = "http://localhost:5000";

  getAllTodos: () => Promise<TodoI[]> = async () => {
    try {
      const res = await axios.get(this.baseURL);
      return res.data;
    } catch (error) {
      console.log("error getting all todos at getAllTodos: ", error);
    }
  };

  addTodo = async (todo: TodoI) => {
    const res = await axios.post(this.baseURL, todo);
    // console.log(res.data);
    const addedTodo: TodoI = res.data;
    return addedTodo;
  };

  toggleTodo: (id: string) => Promise<void> = async (id: string) => {
    try {
      axios.put(this.baseURL + "/" + id);
    } catch (error) {
      console.log("error toggling todo with id: ", id);
    }
  };

  deleteTodo: (id: string) => Promise<void> = async (id: string) => {
    try {
      await axios.delete(`${this.baseURL}/${id}`);
    } catch (error) {
      console.log("error deleting todo with id: ", id);
    }
  };
}

export default DBService;
