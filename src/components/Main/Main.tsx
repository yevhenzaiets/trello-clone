import s from './main.module.css'
import { useAppSelector } from "../../types/HookTypes"
import StartBoard from './../StartBoard/StartBoard'
import BasicBoard from '../BasicBoard/BasicBoard';


const Main: React.FC = () => {

  const boardsCollection = useAppSelector(state => state.boards.boards);

  return (
    <main className={s.main}>
      <StartBoard />
      {boardsCollection.map((board) => (
        <BasicBoard key={board.id} id={board.id} title={board.title} completed={!board.completed} />
      ))}
    </main>
  )
}

export default Main;