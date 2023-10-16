import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/addCoffee',
      element:<AddCoffee></AddCoffee>
    }
  ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
