import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Detail from "../views/Detail";
const url = "https://h8-phase2-gc.vercel.app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail url={url} />,
  },
]);

export default router;
