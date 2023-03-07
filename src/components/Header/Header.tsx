import s from "./header.module.css"

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h1>Плануй краще - працюй продуктивніше!</h1>
      <div className={s.headerSvgBlock}>
        <svg className={s.headerSvg}></svg>
      </div>
    </header>
  )
}

export default Header