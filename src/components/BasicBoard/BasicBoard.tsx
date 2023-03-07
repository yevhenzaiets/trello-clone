import { useState } from "react";
import { NavLink } from "react-router-dom";
import { removeBoard, setActiveBoard } from "../../store/boardSlice";
import { useAppDispatch } from "../../types/HookTypes";
import s from "./basicBoard.module.css";

interface BasicBoardProps {
  id: string,
  title: string,
  isActive: boolean
}

const BasicBoard: React.FC<BasicBoardProps> = ({ id, title }) => {

  const dispatch = useAppDispatch();

  return (
    <>
      <div className={s.boardBody}>
        <div className={s.removeButtonBlock} onClick={() => dispatch(removeBoard(id))}>
          <svg className={s.removeButton}></svg>
        </div>
        <NavLink to="/list" onClick={() => dispatch(setActiveBoard(id))}><span>{title}</span></NavLink>
      </div>
    </>
  )
}

export default BasicBoard;