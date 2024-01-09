import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("clicked");
    // counter = counter + 1;
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
    // if (counter <= 0) break;
  };

  return (
    <>
      <h1>Kya haal hai</h1>
      <h2>Counter value{counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
