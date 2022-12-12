import React from "react";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
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
