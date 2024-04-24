import { useState } from "react";
import React from "react";

import "./App.css";
import { FrontPage } from "./components/page/FrontPage";
import { SparklesCore } from "./components/ui/sparkles";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <SparklesCore className="h-full" />
    </div>
  );
}
export default App;
