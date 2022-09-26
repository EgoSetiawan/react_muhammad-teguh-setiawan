import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  //todo adalah param dari addTodos value akan di pass pada TodoForm
  const addTodos = (todo) => {
    if (todo.name.length > 0) {
      setTodos((Todos) => [...Todos, todo]);
    }
  };

  const deleteTodos = (id) => {
    setTodos((Todos) => Todos.filter((todos) => todos.id !== id));
  };

  return (
    <div
      className="todo"
      style={{
        padding: "8rem 10px 4rem",
        width: "100%",
      }}
    >
      <h1>Todos</h1>
      <TodoForm addTodo={addTodos} />
      {todos && <TodoList todos={todos} deleteTodos={deleteTodos} />}
    </div>
  );
}
