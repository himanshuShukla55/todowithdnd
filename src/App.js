import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Dashboard from "./components/Dashboard";
import { activeTodoReducer, completedTodosReducer } from "./reducers";

function App() {
  const [activeTodos, activeDispatch] = useReducer(activeTodoReducer, []);
  const [completedTodos, completeDispatch] = useReducer(
    completedTodosReducer,
    []
  );
  return (
    <div className="App">
      <div id="app-header">
        <h1>TODO APP</h1>
      </div>
      <AddTodo dispatch={activeDispatch} />
      <Dashboard
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        activeDispatch={activeDispatch}
        completedDispatch={completeDispatch}
      />
    </div>
  );
}

export default App;
