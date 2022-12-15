import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import todo, { addTodo, deleteTodo, checkedCompleted } from "../../store/slices/todo";

import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  console.log(todos);
  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  const handleDeleteTodo = () => {
    todos.forEach(element => {
      if (element.checked) {
        dispatch(deleteTodo(element.id))
      }
    });
  };

  const completedTask = () => {
    dispatch(checkedCompleted({id: todo.id}))
  }


  return (
    <div>
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
      <button className={styles.addButton} onClick={handleDeleteTodo}>
        Delete todo
      </button>
    </div>
    <div className="horizontal">
      <input className="checkBoxLittle" type="checkbox" onClick={completedTask} />
      <p>Сделанно</p>
      <input className="checkBoxLittle" type="checkbox" />
      <p>Не сделанно</p>
    </div>
    </div>
  );
};
