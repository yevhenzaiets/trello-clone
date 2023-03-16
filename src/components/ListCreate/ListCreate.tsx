import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useAppDispatch } from "../../types/HookTypes";
import { addListToBoard } from "../../store/boardSlice";
import s from "./listCreate.module.css";

interface ListCreateProp {
  handleClose: () => void;
}

const ListCreate: React.FC<ListCreateProp> = ({ handleClose }) => {

  const [taskValue, setTaskValue] = useState("");
  const dispatch = useAppDispatch()

  const taskValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.currentTarget.value)
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addListToBoard(taskValue))
      setTaskValue("");
      handleClose(); /// close listCreate
    }
  }

  return <>
    <div className={s.listWrapper}>
      <div className={s.closeButton} onClick={handleClose}>
        <svg className={s.closeLogo} />
      </div>
      <div className={s.inputBlock}>
        <label htmlFor="add-list"></label>
        <input className={s.inputList} value={taskValue} onChange={taskValueHandler} onKeyDown={onKeyDownHandler} id="add-list" type="text" placeholder="add a list" />
      </div>
    </div>
  </>
}

export default ListCreate;