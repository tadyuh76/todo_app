import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remainTodosSelector } from "../../redux/customSelector";
import DBService from "../../services/DBService";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";
import todoSlice from "./todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(remainTodosSelector);

  useEffect(() => {
    const getTodos = async () => {
      const dbService = new DBService();
      const dbTodos = await dbService.getAllTodos();
      dispatch(todoSlice.actions.setTodos(dbTodos));
    };

    getTodos();
  }, [dispatch]);

  return (
    <div className="todo-list">
      <div>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <TodoAdd />
    </div>
  );
};

export default TodoList;
