import TodoData from "../data/todoItem";
import "./todo.css";

const Todo = () => {
  return (
    <>
      {TodoData.map((todo) => (
        <div className="todo" key={todo.id}>
          <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default Todo;
