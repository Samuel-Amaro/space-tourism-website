import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routers/Home";
import Destination from "./routers/Destination";

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
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".Main"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
