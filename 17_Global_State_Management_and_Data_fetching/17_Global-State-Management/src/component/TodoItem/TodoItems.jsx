import styles from "./TodoItems.module.css";

export default function TodoItems({ todo, deleteTodos, completeTodo }) {
  //Function mengatur delete list pada todos
  const DeleteTodoItem = (e) => {
    deleteTodos(todo.id);
  };

  return (
    <div className={styles["todo-items"]}>
      <div className={styles["todo-group"]}>
        <li className={todo.completed ? "true" : "false"}>
          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={() => completeTodo(todo.id)}
            defaultChecked={todo.completed ? true : false}
            name={todo.name}
            id={todo.id}
          />
          <label htmlFor={todo.id} className={styles.label}>
            {todo.name}
          </label>
          <button onClick={(e) => DeleteTodoItem(e)}>Delete</button>
        </li>
      </div>
    </div>
  );
}
