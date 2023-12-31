import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/shared/Home";
import ShowAllCoffee from "./components/ShowAllCoffee";
import AddCoffeeForm from "./components/AddCoffeeForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=>fetch("http://localhost:3000/coffee"),
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/',
        element:<ShowAllCoffee></ShowAllCoffee>, 
      }
    ],
  },
  {
    path:"/addCoffeeForm",
    element:<AddCoffeeForm></AddCoffeeForm>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
