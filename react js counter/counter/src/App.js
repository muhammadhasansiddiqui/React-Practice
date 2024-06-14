import logo from "./logo.svg";
import "./App.css";
import { Button } from "actions-on-google";

function App() {
  return (
    <div className="main">
      <div className="num">
        <p> 0 </p>
        <Button>+</Button>
        <Button>-</Button>
      </div>
    </div>
  );
}

export default App;
