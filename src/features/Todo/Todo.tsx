import { DeleteFilled } from "@ant-design/icons";
import { Button, Checkbox, Row, Tag } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import DBService from "../../services/DBService";
import priorityToColor from "../../utils/priority_to_color";
import todoSlice from "./todoSlice";
import { TodoI } from "./types";

export interface TodoProps {
  todo: TodoI;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dbService = new DBService();
  const dispatch = useDispatch();

  const onToggleTodo = () => {
    dbService.toggleTodo(todo.id);
    dispatch(todoSlice.actions.toggleTodo(todo.id));
  };

  const onDeleteTodo = () => {
    dbService.deleteTodo(todo.id);
    dispatch(todoSlice.actions.deleteTodo(todo.id));
  };

  return (
    <Row justify="space-between" key={todo.id} style={{ margin: "8px 0" }}>
      <Checkbox
        checked={todo.completed}
        onChange={onToggleTodo}
        style={
          todo.completed ? { opacity: 0.5, textDecoration: "line-through" } : {}
        }
      >
        {todo.text}
      </Checkbox>
      <div>
        <Tag
          color={priorityToColor[todo.priority]}
          style={{
            paddingBottom: 0,
            ...(todo.completed
              ? { opacity: 0.5, textDecoration: "line-through" }
              : {}),
          }}
        >
          {todo.priority}
        </Tag>
        <Button
          type="link"
          onClick={onDeleteTodo}
          icon={<DeleteFilled />}
          danger
        />
      </div>
    </Row>
  );
};

export default Todo;
