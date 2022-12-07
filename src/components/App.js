import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [isVisible,setIsVisible] = useState(false);

  const handlePara = ()=>{
    setIsVisible(!isVisible)
  }
  return (
    <div id="main">
      {isVisible && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={handlePara}>Button</button>
    </div>
  );
}


export default App;
