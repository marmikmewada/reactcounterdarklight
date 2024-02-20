// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Result from "./components/Result";
import Button from "./components/Button";

function App() {
  let [num, setNum] = useState(0);
  let [mode, setMode] = useState(true);
  const handleMode = () => {
    if (mode === true) {
      setMode(false);
    } else {
      setMode(true);
    }
  };
  const increase = () => {
    // console.log(num);
    // console.log()
    setNum(num + 1);
  };
  const decrease = () => {
    if (num !== 0) {
      // console.log(num);

      setNum(num - 1);
    }
  };
  useEffect(() => {
    console.log("counter changed to " + num);
  }, [num]);

  return (
    <div className={mode === true ? "App light" : "App dark"}>
      <button
        className={mode === true ? "btn dark" : "btn light"}
        onClick={handleMode}
      >
        {mode === true ? "dark" : "light"}
      </button>
      <h1>react best</h1>
      <h2>counter</h2>
      <Result num={num} />
      {/* <button className={mode === true ? "btn dark": "btn light"} onClick={increase}>increase</button> */}
      {/* <button className={mode === true ? "btn dark": "btn light"} onClick={decrease}>decrease</button> */}
      <Button mode={mode} title={"increase"} action= {increase} />
      <Button mode={mode} title={"decrease"} action={decrease} />

      {/* {num % 2 === 0 && <h1>{num} Even Number</h1>}
      {num % 2 !== 0 && <h1>{num} Odd Number</h1>}  */}

      {num % 2 === 0 ? (
        <h1>{num} is even number</h1>
      ) : (
        <h1>{num} is odd number</h1>
      )}
      {/* {num % 2 === 0 ? (
        <h1>{num} Even Number</h1>
      ) : (
        <h1>{num} Odd Number</h1>
      )} */}
    </div>
  );
}

export default App;
