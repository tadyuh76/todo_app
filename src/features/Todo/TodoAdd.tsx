import { Button, Input, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "uuidv4";
import { TodoPriority } from "../../utils/enums";
import todoSlice from "./todoSlice";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<TodoPriority>(TodoPriority.Low);

  const createNewTodo = () => {
    if (!text) return;

    dispatch(
      todoSlice.actions.addTodo({
        id: uuid(),
        text,
        priority,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <Input.Group style={{ display: "flex" }} compact>
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
