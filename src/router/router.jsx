import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main/Main";
import ErrorPage from "../components/Routing/ErrorPage/ErrorPage";
import Layout from "../components/Routing/Layout/Layout";
import List from "../components/BoardBody/BoardBody";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        element: <Main/>,
        index: true
      },
      {
        path: "/list",
        element: <List/>
      },
    ]
  },
]);

export const RouteComponent = () => <RouterProvider router={router} />;
