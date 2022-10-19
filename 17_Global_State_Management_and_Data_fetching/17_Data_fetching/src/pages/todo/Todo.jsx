import TodoForm from "../../component/TodoForm/TodoForm";
import TodoList from "../../component/TodoList/TodoList";
import { useDispatch } from "react-redux";
import {
  createTodo,
  deleteTodo,
  updateTodo,
} from "../../store/features/todoSlice";
import { useState } from "react";

export default function Todo() {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //todo adalah param dari addTodos value akan di pass pada TodoForm
  const addTodos = (todo) => {
    dispatch(createTodo(todo));
  };

  const deleteTodos = (id) => {
    dispatch(deleteTodo(id));
  };

  const completeTodo = (id) => {
    dispatch(updateTodo(id));
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
