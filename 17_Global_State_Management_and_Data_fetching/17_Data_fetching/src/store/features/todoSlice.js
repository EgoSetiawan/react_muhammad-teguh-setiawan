import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoAPi from "../../apis/api";

const initialState = {
  data: [],
  isLoading: false,
  status: "idle",
};

export const fetchTodo = createAsyncThunk("get/todo", async () => {
  try {
    const response = await TodoAPi.getTodo();
    return response.data.todo;
  } catch (err) {
    throw new Error(err);
  }
});

export const createTodo = createAsyncThunk("add/todo", async (data) => {
  try {
    const response = await TodoAPi.postTodo(data);
    return response.data.insert_todo.returning;
  } catch (error) {
    throw new Error(err);
  }
});

export const deleteTodo = createAsyncThunk("delete/todo", async (id) => {
  try {
    const response = await TodoAPi.deleteTodo(id);
    return response.data.delete_todo.returning;
  } catch (error) {
    throw new Error(err);
  }
});

export const updateTodo = createAsyncThunk("update/todo", async (data) => {
  try {
    const response = await TodoAPi.updateTodo(data);
    console.log(response);
    return response.data.update_todo.returning;
  } catch (error) {
    throw new Error(err);
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = "succes";
        state.data = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.status = "succes";
        state.data.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "succes";
        state.data = state.data.filter((todo) => todo.id !== action.payload.id);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = "succes";
      });
  },
});

export default todoSlice.reducer;
