import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { addTodo, deleteTodo, filterCompleted, setFilter, clearFilter, clearAllFilters } from "../../store/slices/todo";

import styles from "./index.module.css";

export const AddTodo = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
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

  const handleFirstFilterCompleted = (e) => {
    dispatch(clearAllFilters())
    if (e.target.checked) {
      dispatch(setFilter('doneItems'));
    } else {
      dispatch(clearFilter('doneItems'));
    }
  };
  
  const handleSecondFilterCompleted = (e) => {
    dispatch(clearAllFilters())
    if (e.target.checked) {
      dispatch(setFilter('inProgressItems'));
    } else {
      dispatch(clearFilter('inProgressItems'));
  };
  };

  const handleAllFiltersCompleted = () => {
    dispatch(clearAllFilters())
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
        <input className="checkBoxLittle" type="radio" name="checkbox" onClick={(e) => handleFirstFilterCompleted(e)} />
        <p>Сделано</p>
        <input className="checkBoxLittle" type="radio" name="checkbox" onClick={handleSecondFilterCompleted} />
        <p>Не сделано</p>
        <input className="checkBoxLittle" type="radio" name="checkbox" onClick={handleAllFiltersCompleted} defaultChecked="true"/>
        <p>Все</p>
      </div>
    </div>
  );
};
