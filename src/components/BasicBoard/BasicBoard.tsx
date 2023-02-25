import { useState } from "react";
import { NavLink } from "react-router-dom";
import { removeBoard } from "../../store/boardSlice";
import { useAppDispatch } from "../../types/HookTypes";
import s from "./basicBoard.module.css";

interface BasicBoardProps {
  id: string,
  title: string,
  completed: boolean
}

const BasicBoard: React.FC<BasicBoardProps> = ({ id, title, completed }) => {

  const dispatch = useAppDispatch();
  const [isOpen, setOpen] = useState(false);

  const showListCollection = () => {
    console.log(isOpen);
    setOpen(true)
  }

  return (
    <>
      {completed &&
        <NavLink to="/list">
          <div className={s.boardBody} onClick={showListCollection}>
            <div className={s.removeButtonBlock} onClick={() => dispatch(removeBoard(id))}>
              <svg className={s.removeButton}></svg>
            </div>
            <span>{title}</span>
          </div>
        </NavLink>

      }
    </>
  )
}

export default BasicBoard;