import { Outlet } from "react-router-dom"
import Header from "../../Header/Header"
import Main from "../../Main/Main"


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  )
}

export default Layout 