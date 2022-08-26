import { Divider, Typography } from "antd";
import FilterOptions from "./features/Filter/FilterOptions";
import TodoList from "./features/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="container">
          <Typography.Title level={2}>Todo</Typography.Title>
          <FilterOptions />
          <Divider />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
