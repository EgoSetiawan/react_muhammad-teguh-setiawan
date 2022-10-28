import styles from "./TodoItems.module.css";

export default function TodoItems({ todo, deleteTodos, completeTodo }) {
  //Function mengatur delete list pada todos
  const DeleteTodoItem = (e) => {
    deleteTodos(todo.id);
  };

  return (
    <div className={styles["todo-group"]}>
      <li className={styles["todo-items"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={() => completeTodo(todo.id)}
          defaultChecked={todo.completed ? true : false}
          name={todo.title}
          id={todo.id}
        />
        <label htmlFor={todo.id} className={styles.label}>
          {todo.title}
        </label>
        <button onClick={(e) => DeleteTodoItem(e)}>Delete</button>
      </li>
    </div>
  );
}
