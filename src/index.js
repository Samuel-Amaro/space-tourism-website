import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routers/Home";
import Destination, {loader as loaderDestination} from "./routers/Destination";
import Crew, { loader as loaderCrew } from "./routers/Crew";
import Technology, {loader as loaderTech} from "./routers/Technology";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
    loader: loaderDestination,
  },
  {
    path: "/crew",
    element: <Crew />,
    loader: loaderCrew,
  },
  {
    path: "/technology",
    element: <Technology />,
    loader: loaderTech,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".Main"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
