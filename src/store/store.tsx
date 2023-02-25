import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "./boardSlice";

const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;