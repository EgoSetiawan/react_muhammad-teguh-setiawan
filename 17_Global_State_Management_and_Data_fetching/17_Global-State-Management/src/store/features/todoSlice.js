import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    checkTodo: (state, action) => {
      let updatedTodos = [];
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        updatedTodos.push(todo);
        return updatedTodos;
      });
    },
  },
});

export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
