import s from "./list.module.css"

interface ListProp {
  id: string;
  name: string
}

const List: React.FC<ListProp> = ({ name }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.name}>
        <h3>{name}</h3>
      </div>
      <div className={s.body}>
        <label>
          <input className={s.listInp} type="text" />
        </label>
      </div>
    </div>
  )
}

export default List;