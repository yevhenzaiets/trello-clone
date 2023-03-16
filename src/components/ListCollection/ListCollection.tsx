import { useState } from "react";
import StartList from "../StartList/StartList";
import ListCreate from "../ListCreate/ListCreate";
import { useAppSelector } from "../../types/HookTypes";
import List from "../List/List";
import s from './listCollection.module.css';

const ListCollection: React.FC = () => {
  const [showStartList, setStartList] = useState(true)
  const [showCreatingList, setCreatingList] = useState(false);
  const [isAddList, setAddList] = useState(false);

  const boardSet = useAppSelector(state => state.boards.boards).filter(item => item.isActive === true)

  console.log(boardSet)

  const handleClick = () => {
    setStartList(false);
    setCreatingList(true);
    // setAddList(true);
  };

  const handleClose = () => {
    setStartList(true);
    setCreatingList(false);
    setAddList(true);
  };

  return (
    <div className={s.wrapper}>
      {isAddList && boardSet.map(list => list.lists.map(list => <List key={list.id} id={list.id} name={list.name} />))}
      {showStartList && <StartList handleClick={handleClick} />}
      {showCreatingList && <ListCreate handleClose={handleClose} />}
    </div>
  )
}

export default ListCollection;