import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-dvw h-dvh  bg-slate-300  ">
      <div className="h-dvh ml-64 mr-64">
        <div className="py-8">
          <h1 className="text-6xl font-extrabold text-slate-800">
            Learn about{" "}
            <span className="text-slate-800 text-5xl bg-slate-400 p-5 rounded">
              redux@toolkit
            </span>
          </h1>
        </div>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
