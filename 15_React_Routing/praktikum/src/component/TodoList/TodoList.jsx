import TodoItems from "../TodoItem/TodoItems";

export default function TodoList({ deleteTodos, todos, completeTodo }) {
  return (
    <div className="item-list">
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {todos.map((todo) => (
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
