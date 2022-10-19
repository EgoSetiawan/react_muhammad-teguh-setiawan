import TodoForm from "../../component/TodoForm/TodoForm";
import TodoList from "../../component/TodoList/TodoList";
import { useState } from "react";
import { addTodo, deleteTodo, checkTodo } from "../../store/features/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  //todo adalah param dari addTodos value akan di pass pada TodoForm
  const addTodos = (todo) => {
    dispatch(addTodo(todo));
  };

  const deleteTodos = (id) => {
    dispatch(deleteTodo(id));
  };

  const completeTodo = (id) => {
    dispatch(checkTodo(id));
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
