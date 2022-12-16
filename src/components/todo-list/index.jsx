import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from './index.module.css';

export const TodoList = (props) => {
  const todoType = props.todoType
  const todos = useSelector(todosSelector);

  return (
    <ul className={styles.list}>
      {(todoType === 'all') && todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}

      {(todoType === 'completed') && todos.filter((todo) => todo.completed).todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}

      {(todoType === 'uncompleted') && todos.filter((todo) => !todo.completed).todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

