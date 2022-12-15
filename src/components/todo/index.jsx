import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleCompleteness, toggleCheck } from "../../store/slices/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleCompleteness({ id: todo.id }));
  }

  const checkTodoItem = () => {
    dispatch(toggleCheck({ id: todo.id }));
  }

  console.log(todo);
  return (
    <li className={styles.item}>
      <input className="checkBox" onClick={checkTodoItem} type="checkbox" />
      {todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: todo.completed,
        })} onClick={toggleTodoItem}
      >
        {todo.content}
      </span>
    </li>
  );
};
