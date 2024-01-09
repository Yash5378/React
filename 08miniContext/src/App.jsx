import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Componants/Login";
import Profile from "./Componants/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Mini Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
