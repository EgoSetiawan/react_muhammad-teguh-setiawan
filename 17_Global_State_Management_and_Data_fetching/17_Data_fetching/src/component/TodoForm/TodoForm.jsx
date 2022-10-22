import style from "./TodoForm.module.css";

export default function TodoForm({ InputTodo, SetTodo, addTodo }) {
  const changeHandler = (e) => {
    SetTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(InputTodo);
    addTodo({
      title: InputTodo,
      completed: false,
    });
    //Setelah input maka nilai akan berubah ke string kosong tidak value sebelumnya
    SetTodo("");
  };

  return (
    <div className={style["container-form"]}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={InputTodo}
          placeholder="Add Todo..."
          onChange={changeHandler}
        />
        <input className={style.submit} type="submit" />
      </form>
    </div>
  );
}
