import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useAppDispatch } from "../../types/HookTypes";
import { addListToBoard } from "../../store/boardSlice";
import s from "./listCreate.module.css";

interface ListCreateProp {
  handleClose: () => void;
}

const ListCreate: React.FC<ListCreateProp> = ({ handleClose }) => {

  const [taskValue, setTaskValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const checkTaskValue = taskValue === null || taskValue.trim() === '';

  const taskValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.currentTarget.value);
    setError(null);
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !checkTaskValue) {
      dispatch(addListToBoard(taskValue))
      setTaskValue("");
      handleClose(); /// close listCreate
    } else {
      setError("Give me a name!");
    }
  }

  return <>
    <div className={s.listWrapper}>
      <div className={s.closeButton} onClick={handleClose}>
        <svg className={s.closeLogo} />
      </div>
      <div className={s.inputBlock}>
        <label htmlFor="add-list"></label>
        <input className={error ? s.error : s.inputList} value={taskValue} onChange={taskValueHandler}
          onKeyDown={onKeyDownHandler} id="add-list" type="text" placeholder="add a list"
        />
      </div>
      {error && <span className={s.errorText}>{error}</span>}
    </div>
  </>
}

export default ListCreate;