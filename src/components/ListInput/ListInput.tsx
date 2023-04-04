import { ChangeEvent, KeyboardEvent, useState } from "react";
import { addTaskToList, setActiveList } from "../../store/boardSlice";
import { useAppDispatch } from "../../types/HookTypes";
import s from "./listInput.module.css"

interface ListInputProp {
  id: string;
}

const ListInput: React.FC<ListInputProp> = ({ id }) => {

  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const writeInTask = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    setError(null);
  }

  const addWriteInTask = (e: KeyboardEvent<HTMLInputElement>) => {
    const checkValue = value === null || value.trim() === '';
    if (e.key === "Enter" && !checkValue) {
      dispatch(setActiveList(id));
      dispatch(addTaskToList(value));
      setValue("");
    } else {
      setError("style")
    }
  }

  return (
    <input className={error ? s.error : s.listInp} type="text" value={value}
      onChange={writeInTask} onKeyDown={addWriteInTask}
    />
  )
}

export default ListInput;