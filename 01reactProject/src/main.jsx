import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };
const reactElement = React.createElement(
  "a",
  { href: "https:/twitter.com", target: "_blank" },
  "click me to visit twitter"
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  // anotherElement
  reactElement
);
