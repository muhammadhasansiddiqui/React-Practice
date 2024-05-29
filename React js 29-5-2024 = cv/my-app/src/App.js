import logo from "./logo.svg";
import img1 from "./images/Animation - 1717016225867.gif";

import "./App.css";

function App() {
  return (
    <div className="main">
      <div
        className="myApp {
"
      >
        <div className="intro">
       <h1> Hi, I'm Hasan 👋</h1> 
       <br />
       <p>A passionate Full Stack Software Developer 🚀 having an
        experience of building Web and Mobile applications with JavaScript /
        Reactjs / Nodejs / React Native and some other cool libraries and
        frameworks.</p> </div>
        <img src={img1} alt="Image" />
      </div>
    </div>
  );
}

export default App;
