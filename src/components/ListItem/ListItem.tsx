import s from "./listItem.module.css"



const ListItem: React.FC = () => {

  return (
    <div className={s.listWrapper}>
      <div className={s.closeButton} >
        <svg className={s.closeLogo} />
      </div>
      <div className={s.inputBlock}>
        <label htmlFor="add-list"></label>
        <input className={s.inputList} id="add-list" type="text" placeholder="add a list" />
      </div>
    </div>
  )
}

export default ListItem;