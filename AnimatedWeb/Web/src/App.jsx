import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ImagesSlider } from "./components/ui/images-slider";
import "./App.css";
import { Front } from "./components/page/Front";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Front />
    </>
  );
}

export default App;
