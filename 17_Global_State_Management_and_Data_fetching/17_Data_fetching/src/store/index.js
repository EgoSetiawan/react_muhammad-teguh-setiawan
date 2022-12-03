import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/todoReducer";

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
