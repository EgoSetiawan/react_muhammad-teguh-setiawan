import TodoItems from "./TodoItems";

export default function TodoList({ deleteTodos, todos }) {
  return (
    <div className="item-list">
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} deleteTodos={deleteTodos} />
        ))}
      </ul>
    </div>
  );
}
