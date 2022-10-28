import { axiosinstance } from "../configs/axiosinstance";

const todoApi = {
  async getTodo() {
    try {
      const response = await axiosinstance.get("todo");
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async postTodo(data) {
    try {
      const response = await axiosinstance.post("todo", data);
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async deleteTodo(id) {
    try {
      const response = await axiosinstance.delete(`todo/${id}`);
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async updateTodo(id) {
    try {
      const response = await axiosinstance.put(`todo/${id}`);
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default todoApi;
