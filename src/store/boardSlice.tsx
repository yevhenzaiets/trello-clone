import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BoardsState = {
  boards: Board[],
}

type Board = {
  id: string;
  title: string;
  isActive: boolean;
  lists: Lists[];
}

interface Lists {
  id: string;
  name: string;
  tasks: Tasks[];
  completed: boolean;
}

interface Tasks {
  id: string;
  taskName: string;
  condition: boolean;
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
        isActive: false,
        lists: [],
      });
    },
    removeBoard(state, action: PayloadAction<string>) {
      state.boards = state.boards.filter(board => board.id !== action.payload)
    },
    setActiveBoard(state, action: PayloadAction<string>) {
      state.boards.map(board => board.isActive = false);
      const currentBoard = state.boards.find(board => board.id === action.payload);
      if (currentBoard) currentBoard.isActive = true;
    },
    setActiveList(state, action: PayloadAction<string>) {
      const activeBoard = state.boards.find(board => board.isActive === true);
      const currentList = activeBoard?.lists.find(list => list.id === action.payload);
      if (currentList) currentList.completed = true;
    },
    addListToBoard(state, action: PayloadAction<string>) {
      const currentBoard = state.boards.find(board => board.isActive === true);
      currentBoard?.lists.push({
        id: new Date().toISOString(),
        name: action.payload,
        tasks: [],
        completed: false,
      })
    },
    addTaskToList(state, action: PayloadAction<string>) {
      const board = state.boards.find(board => board.isActive === true);
      board?.lists.find(list => list.completed === true)?.tasks.push({
        id: new Date().toISOString(),
        taskName: action.payload,
        condition: false,
      })
      board?.lists.map(list => list.completed = false);
      // console.log(action.payload)
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


export const { addBoard, removeBoard, setActiveBoard, addListToBoard, setActiveList, addTaskToList } = boardsSlice.actions;
export default boardsSlice.reducer;
