import { useAppSelector } from "../../types/HookTypes";
import ListCollection from "../ListCollection/ListCollection";
// import ListBody from "../List/ListBody";
import s from "./boardBody.module.css"

// interface ListProps {
//   // id: string,
//   title: string,
//   isActive: boolean,
// }

const BoardBody: React.FC = () => {

  const boardSet = useAppSelector(state => state.boards.boards)

  return (
    <main className={s.block}>
      <div className={s.listWrapper}>
        <div className={s.listTitle}>
          <h2>{boardSet.find(board => board.isActive === true)?.title}</h2>
        </div>
        {/* <ListBody /> */}
        <ListCollection />
      </div>
    </main>
  )
}

export default BoardBody;