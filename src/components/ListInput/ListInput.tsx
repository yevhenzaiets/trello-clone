import { ChangeEvent, KeyboardEvent, useState } from "react";
import { addTaskToList, setActiveList } from "../../store/boardSlice";
import { useAppDispatch } from "../../types/HookTypes";
import s from "./listInput.module.css"

interface ListInputProp {
  id: string;
}

const ListInput: React.FC<ListInputProp> = ({ id }) => {

  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const writeInTask = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const addWriteInTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(setActiveList(id));
      dispatch(addTaskToList(value));
      setValue("");
    }
  }

  return (
    <input className={s.listInp} type="text" value={value} onChange={writeInTask} onKeyDown={addWriteInTask} />
  )
}

export default ListInput;