import React, { useState } from "react";
import Counter from "./Counter";
import "./app.css";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  
  const changeBackground = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <Counter onValueChange={changeBackground} />
    </div>
  );
};

export default App;



