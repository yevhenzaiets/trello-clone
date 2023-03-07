import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import s from "./list.module.css"


const List: React.FC = () => {

  const [isCreated, setCreated] = useState(false);

  return (
    <div className={s.wrapper}>
      <div className={s.listBody}>
        <p className={s.listTitle}>Add a list...</p>
      </div>
      <ListItem />
    </div>
  )
}

export default List;