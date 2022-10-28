import { useEffect } from "react";
import TodoItems from "../TodoItem/TodoItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../store/features/todoSlice";

export default function TodoList({ deleteTodos, completeTodo }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.data);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="item-list">
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {data?.map((todo) => (
          <TodoItems
            key={todo?.id}
            todo={todo}
            deleteTodos={deleteTodos}
            completeTodo={completeTodo}
          />
        ))}
      </ul>
    </div>
  );
}
