import s from "./startList.module.css"

interface StartListProp {
  handleClick: () => void
}

const StartList: React.FC<StartListProp> = ({ handleClick }) => {
  return <>
    <div className={s.wrapper} onClick={handleClick}>
      <div className={s.listBody}>
        <p className={s.listTitle}>Add a list...</p>
      </div>
    </div>
  </>
}

export default StartList;