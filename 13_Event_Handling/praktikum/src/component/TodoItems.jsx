import { useState } from "react";

import styles from "./TodoItems.module.css";

export default function TodoItems({ todo, deleteTodos }) {
  const [isChecked, setIsChecked] = useState(todo.checked);
  //Function mengatur delete list pada todos
  const DeleteTodoItem = (e) => {
    deleteTodos(todo.id);
  };
  //Function mengatur finish list pada todos
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={styles["todo-items"]}>
      <div className={styles["todo-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={todo.name}
          id={todo.id}
        />
        <label htmlFor={todo.id} className={styles.label}>
          {todo.name}
        </label>
        <button onClick={(e) => DeleteTodoItem(e)}>Delete</button>
      </div>
    </li>
  );
}
