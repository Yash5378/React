import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ChatePage from "./components/ChatePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
},
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/chat",
    element: <ChatePage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
