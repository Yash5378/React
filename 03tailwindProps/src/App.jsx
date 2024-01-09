import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./componant";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "yash",
    age: 24,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Tailwind Test</h1>
      <Card username="somechannel" btntext="visit me->" />
      <Card username="gunjan" btntext="click me->" />
      <Card username="gunjan" btntext="click me->" />
      <Card username="gunjan" btntext="click me->" />
      <Card username="gunjan" btntext="click me->" />
    </>
  );
}

export default App;
