import s from './listTask.module.css'

interface ListTaskProp {
  id: string,
  taskName: string
}

const ListTask: React.FC<ListTaskProp> = ({ taskName }) => {
  return (
    <div className={s.body}>
      <h3 className={s.taskName}>{taskName}</h3>
    </div>
  )
}

export default ListTask;