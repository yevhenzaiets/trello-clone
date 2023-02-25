import s from "./activeBoard.module.css";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../types/HookTypes";
import { addBoard } from "../../store/boardSlice";



interface ActiveBoardProps {
  closeBoard: () => void;
}

const ActiveBoard: React.FC<ActiveBoardProps> = ({ closeBoard }) => {

  const [title, setTitle] = useState("");
  const [isCorrectTittle, setCorrectTitle] = useState(true);
  const dispatch = useAppDispatch()

  const checkInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setTitle(e.currentTarget.value);
    setCorrectTitle(true);
  }

  const confirmCreating = () => {
    if ((title === null || title.trim() === '')) {
      setCorrectTitle(!isCorrectTittle);
    } else {
      dispatch(addBoard(title));
      setTitle("");
      closeBoard();
    }
  }

  return <>
    <div className={s.activeBoardBody}>
      <div className={s.boardBasic}>
        <p className={s.text}>What shall we call the board?</p>
        <label htmlFor="mainName">
          <input id="mainName" className={s.inputStyle} value={title} onChange={checkInput} />
        </label>
        {!isCorrectTittle && <p className={s.error}>Oops! Looks like you forgot the name!</p>}
      </div>
      <div className={s.boardButtonGroup}>
        <button className={s.cancelBut} onClick={closeBoard}>CANCEL</button>
        <button className={s.createBut} onClick={confirmCreating}>CREATE</button>
      </div>
    </div>
  </>
}

export default ActiveBoard;