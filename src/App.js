import React from "react";
import { useSelector } from "react-redux";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
import { filterCompleted, initialState } from "./store/slices/todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
