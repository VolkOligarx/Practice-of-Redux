import React from "react";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
import { initialState } from "./store/slices/todo";
import "./App.css";

let changer
export function changerActivator(params) {
if (initialState.uncompleted === true) {
  changer = 'uncompleted'
}

else if (initialState.completed === true) {
  changer = 'completed'
}

else if (initialState.completed === false && initialState.uncompleted === false) {
  changer = 'all'

}
else if (initialState.completed === true && initialState.uncompleted === true) {
  changer = 'all'
}
}
changerActivator()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodoList todoType = {changer} />
      </header>
    </div>
  );
}

export default App;
