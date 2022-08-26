import { useSelector } from "react-redux";
import { remainTodosSelector } from "../../redux/customSelector";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";

const TodoList = () => {
  const todos = useSelector(remainTodosSelector);

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
