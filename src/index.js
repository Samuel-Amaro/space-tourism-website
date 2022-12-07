import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Home from "./routers/Home";
import Destination, {loader as loaderDestination} from "./routers/Destination";
import Crew, { loader as loaderCrew } from "./routers/Crew";
import Technology, {loader as loaderTech} from "./routers/Technology";
import Root from "./routers/Root";
import ErrorPage from "./routers/ErrorPage";

/*Obs: deployment in gitHub pages não pode usar createBrowserRouter -> createBrowserRouter([]), temos que usar createHashRouter createBrowserRouter([])*/
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
