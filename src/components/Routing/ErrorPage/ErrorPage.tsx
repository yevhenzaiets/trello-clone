import s from "./errorPage.module.css"
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className={s.error}>
      <h1 className={s.errorTitle}>Oops!</h1>
      <p>Sorry, something went wrong</p>
      <p>{error.statusText}...</p>
    </div>
  )
}

export default ErrorPage;