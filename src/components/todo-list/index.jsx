import React, { useEffect} from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";
import { todosSelector, todoFiltersSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from './index.module.css';

function mapItemsByFilters(filtersList, items) {
  if (!filtersList.length) {
    return items;
  }
  if (filtersList.includes('doneItems')) {
    return items.filter((it) => it.completed);
  }
  if (filtersList.includes('inProgressItems')) {
    return items.filter((it) => !it.completed);
  }
};

export const TodoList = () => {
  const todos = useSelector(todosSelector);
  const filtersList = useSelector(todoFiltersSelector);

  const [todosItems, setTodosItems] = useState([]);

  useEffect(() => {
    setTodosItems(todos.filter((todo) => todo.completed));
    setTodosItems(mapItemsByFilters(filtersList, todos));
  }, [filtersList, todos])

  return (
    <ul className={styles.list}>
      {todosItems.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

