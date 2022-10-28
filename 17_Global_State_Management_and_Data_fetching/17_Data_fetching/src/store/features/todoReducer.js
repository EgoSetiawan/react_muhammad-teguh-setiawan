import { combineReducers } from "@reduxjs/toolkit";
import todo from "./todoSlice";

const reducers = combineReducers({
  todo,
});

export default reducers;
