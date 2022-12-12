import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { addTodo, deleteTodo } from "../../store/slices/todo";

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
      if (element.completed) {
        dispatch(deleteTodo(element.id))
      }
    });
  };


  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
      <button className={styles.addButton} onClick={handleDeleteTodo}>
        Delete todo
      </button>
    </div>
  );
};
