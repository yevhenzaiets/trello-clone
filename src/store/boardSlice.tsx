import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Board = {
  id: string;
  title: string;
  completed: boolean;
}

type BoardsState = {
  boards: Board[];
}

const initialState: BoardsState = {
  boards: [],
}

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard(state, action: PayloadAction<string>) {
      state.boards.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    removeBoard(state, action: PayloadAction<string>) {
      state.boards = state.boards.filter(board => board.id !== action.payload)
    },
    // toggleCompleted(state, action: PayloadAction<string>) {
    //   const toggledBoards = state.boards.find(board => board.id === action.payload)
    //   console.log(toggledBoards)
    //   if (toggledBoards) {
    //     toggledBoards.completed = !toggledBoards.completed
    //   }
    // }
  },
});


export const { addBoard, removeBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
