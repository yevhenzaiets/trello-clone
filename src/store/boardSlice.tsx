import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Board = {
  id: string;
  title: string;
  isActive: boolean;
}

type BoardsState = {
  boards: Board[],
  lists: Board[],
}

const initialState: BoardsState = {
  boards: [],
  lists: [],
}

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard(state, action: PayloadAction<string>) {
      state.boards.push({
        id: new Date().toISOString(),
        title: action.payload,
        isActive: false,
      });
    },
    removeBoard(state, action: PayloadAction<string>) {
      state.boards = state.boards.filter(board => board.id !== action.payload)
    },
    setActiveBoard(state, action: PayloadAction<string>) {
      state.boards.map(board => board.isActive = false)
      const currentBoard = state.boards.find(board => board.id === action.payload)
      if (currentBoard) currentBoard.isActive = true;
    },
    // addListSet(state, action: PayloadAction<string>) {
    //   state.lists.push({
    //     id: new Date().toISOString(),
    //     title: action.payload,
    //     isActive: false,
    //   });
    //   state.lists.filter(list => list.title === action.payload);
    //   console.log(state.lists)
    // },
    // setListTitle(state, action: PayloadAction<string>) {
    //   state.boards = state.boards.filter(board => board.title === action.payload)
    // },
    // toggleCompleted(state, action: PayloadAction<string>) {
    //   const toggledBoards = state.boards.find(board => board.id === action.payload)
    //   console.log(toggledBoards)
    //   if (toggledBoards) {
    //     toggledBoards.completed = !toggledBoards.completed
    //   }
    // }
  },
});


export const { addBoard, removeBoard, setActiveBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
