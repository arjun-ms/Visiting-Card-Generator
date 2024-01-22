import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "about",
    element: <About/>, 
  },
  {
    path: "contact",
    element: <Contact/>, 
  },
  {
    path: "home",
    element: <Home/>, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);