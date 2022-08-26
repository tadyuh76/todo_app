import { Input, Radio, RadioChangeEvent, Select, Tag, Typography } from "antd";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { TodoPriority, TodoStatus } from "../../utils/enums";
import filterSlice from "./filterSlice";

const mb0 = {
  marginBottom: 0,
};
const mb10 = {
  marginBottom: 10,
};

const FilterOptions = () => {
  const dispatch = useDispatch();

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSlice.actions.changeText(e.target.value));
  };

  const onStatusChange = (e: RadioChangeEvent) => {
    dispatch(filterSlice.actions.changeStatus(e.target.value));
  };

  const onPrioritiesChange = (priorities: TodoPriority[]) => {
    dispatch(filterSlice.actions.changePriorities(priorities));
  };

  return (
    <>
      <Typography.Paragraph style={mb0}>Search</Typography.Paragraph>
      <Input.Search
        placeholder="Learn Typescript..."
        onChange={onTextChange}
        allowClear
        enterButton
        style={mb10}
      />

      <Typography.Paragraph style={mb0}>Filter by status</Typography.Paragraph>
      <Radio.Group
        defaultValue={TodoStatus.All}
        onChange={onStatusChange}
        style={mb10}
      >
        <Radio value={TodoStatus.All}>All</Radio>
        <Radio value={TodoStatus.Completed}>Completed</Radio>
        <Radio value={TodoStatus.Todo}>To do</Radio>
      </Radio.Group>

      <Typography.Paragraph style={mb0}>
        Filter by priority
      </Typography.Paragraph>
      <Select
        mode="multiple"
        onChange={onPrioritiesChange}
        allowClear
        placeholder="Select Priority"
        style={{ width: "100%" }}
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
    </>
  );
};

export default FilterOptions;
