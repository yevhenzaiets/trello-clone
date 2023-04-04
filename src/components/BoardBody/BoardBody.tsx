import { useAppSelector } from "../../types/HookTypes";
import ListCollection from "../ListCollection/ListCollection";
import s from "./boardBody.module.css"


const BoardBody: React.FC = () => {

  const boardSet = useAppSelector(state => state.boards.boards)

  return (
    <main className={s.block}>
      <div className={s.listWrapper}>
        <div className={s.listTitle}>
          <h2>{boardSet.find(board => board.isActive === true)?.title}</h2>
        </div>
        <ListCollection />
      </div>
    </main>
  )
}

export default BoardBody;