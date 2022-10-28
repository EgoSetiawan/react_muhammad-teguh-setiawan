import TodoForm from "../../component/TodoForm/TodoForm";
import TodoList from "../../component/TodoList/TodoList";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //todo adalah param dari addTodos value akan di pass pada TodoForm
  const addTodos = (todo) => {
    if (todo.name.length > 0) {
      setTodos((Todos) => [...Todos, todo]);
    }
  };

  const deleteTodos = (id) => {
    setTodos((Todos) => Todos.filter((todos) => todos.id !== id));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div
      className="todo"
      style={{
        padding: "8rem 10px 4rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Todos
      </h1>
      <TodoForm addTodo={addTodos} InputTodo={input} SetTodo={setInput} />
      {todos && (
        <TodoList
          todos={todos}
          deleteTodos={deleteTodos}
          completeTodo={completeTodo}
        />
      )}
    </div>
  );
}
