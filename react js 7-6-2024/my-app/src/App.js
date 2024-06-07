import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import SignatureCanvas from "react-signature-canvas";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Hello Guys!");

  return (
    <div>
      <SignatureCanvas
        penColor="green"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      />
</div>  ,

      <div>


        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

  );


}

export default App;
