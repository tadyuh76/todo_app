import { Button, Input, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DBService from "../../services/DBService";
import { TodoPriority } from "../../utils/enums";
import todoSlice from "./todoSlice";

const TodoAdd = () => {
  const dbService = new DBService();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<TodoPriority>(TodoPriority.Low);

  const createNewTodo = () => {
    if (!text) return;

    dbService
      .addTodo({
        id: "",
        text,
        priority,
        completed: false,
      })
      .then((addedTodo) => dispatch(todoSlice.actions.addTodo(addedTodo)));

    setText("");
  };

  return (
    <Input.Group style={{ display: "flex", marginTop: 20 }} compact>
      <Input
        allowClear
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new task"
      />
      <Select
        value={priority}
        onChange={(value: TodoPriority) => setPriority(value)}
      >
        <Select.Option value={TodoPriority.Low} label="Low">
          <Tag color="blue">Low</Tag>
        </Select.Option>
        <Select.Option value={TodoPriority.Medium} label="Medium">
          <Tag color="gold">Medium</Tag>
        </Select.Option>
        <Select.Option value={TodoPriority.High} label="High">
          <Tag color="red">High</Tag>
        </Select.Option>
      </Select>
      <Button type="primary" onClick={createNewTodo}>
        Add
      </Button>
    </Input.Group>
  );
};

export default TodoAdd;
