import "./App.css";
import Image from "./components/Image";

function App() {
  const images = ` 
https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2F3YWRlciUyMG5pZ2h0fGVufDB8fDB8fHww,

https://images.unsplash.com/photo-1570962042980-e205449f09e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGthcmFjaGklMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D

`;
  return (
    <div>
      <Image  class="img" src={images} />
    </div>
  );
}

export default App;