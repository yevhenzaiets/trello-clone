import { useAppSelector } from "../../types/HookTypes";
import ListInput from "../ListInput/ListInput";
import s from "./list.module.css"
import ListTask from "../ListTask/ListTask";

interface ListProp {
  id: string;
  name: string
}

const List: React.FC<ListProp> = ({ name, id }) => {

  const taskSet = useAppSelector(state => state.boards.boards).filter(list => list.isActive === true);

  // console.log(taskSet)
  return (
    <div className={s.wrapper}>
      <div className={s.name}>
        <h3>{name}</h3>
      </div>
      <div className={s.body}>
        <label>
          <ListInput id={id} />
        </label>
      </div>
      {taskSet[0].lists.map(list => list.id === id ?
        list.tasks?.map(task =>
          <ListTask key={task.id + task.taskName} id={task.id} taskName={task.taskName} />
        )
        : null)
      }
    </div>
  )
}

export default List;