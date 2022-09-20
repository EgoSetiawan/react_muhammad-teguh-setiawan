import { useState } from "react";

import style from "./TodoForm.module.css";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(input);
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      name: input,
      checked: false,
    });
    //Setelah input maka nilai akan berubah ke string kosong tidak value sebelumnya
    setInput("");
    console.log(e);
  };

  return (
    <div className={style["container-form"]}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={input}
          placeholder="Add Todo..."
          onChange={changeHandler}
        />
        <input className={style.submit} type="submit" />
      </form>
    </div>
  );
}
