import TodoItems from "../TodoItem/TodoItems";
import { useSelector } from "react-redux";

export default function TodoList({ deleteTodos, completeTodo }) {
  const todo = useSelector((state) => state.todos);
  console.log(todo);
  return (
    <div className="item-list">
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {todo.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            deleteTodos={deleteTodos}
            completeTodo={completeTodo}
          />
        ))}
      </ul>
    </div>
  );
}
