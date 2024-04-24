import React from "react";
import { useState, useCallback, useRef, useEffect } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(4);
  const [allownum, setAllownum] = useState(false);
  const [allochar, setAllochar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const genratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allownum) str += "0123456789";
    if (allochar) str += "~!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allochar, allownum, setPassword]);

  useEffect(() => {
    genratePassword();
  }, [length, allochar, allownum, genratePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center ">
        Password Genrater
        <div className="flex shadow rounded-lg overflow-hidden  mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-2 py-2">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex justify-center">
            <input
              type="range"
              min={4}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length{length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allochar}
              id="allochar"
              onChange={() => {
                setAllochar((prev) => !prev);
              }}
            />
            <label htmlFor="allowchar">Character</label>
          </div>
          <div className="flex item-center gap-1">
            <input
              type="checkbox"
              defaultChecked={allownum}
              id="allownum"
              onChange={(e) => {
                setAllochar((prev) => !prev);
              }}
            />
            <label htmlFor="allownum">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
