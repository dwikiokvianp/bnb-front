import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";
import Detail from "../pages/Detail/Detail";
import Main from "../pages/Home/templates/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/rooms",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
