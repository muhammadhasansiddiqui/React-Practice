import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  var fun=()=>{
  var a=document.querySelector('input').value
  var b=1
  var c=[]
  while(b<=10)
  {
    c.push(`${a}x${b}=${a*b}`)
    b++
  }
  setarr(c)
  }



  // table genrater

  return (
    <div className="App">
      <input placeholder="Table"></input>
      <button onClick={fun}>Click</button>

      {arr.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
}

export default App;
