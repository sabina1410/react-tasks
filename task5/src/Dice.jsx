import { useState, useEffect } from "react";
import "./App.css";

const Dice = () => {
  const [randomNumber, setRandomNumber] = useState(1);

  const onClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(newRandomNumber);
    console.log(newRandomNumber);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        onClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); 

  const diceImgs = [
    "./src/assets/img/dice-1-svgrepo-com.svg",
    "./src/assets/img/dice-2-svgrepo-com.svg",
    "./src/assets/img/dice-3-svgrepo-com.svg",
    "./src/assets/img/dice-4-svgrepo-com.svg",
    "./src/assets/img/dice-5-svgrepo-com.svg",
    "./src/assets/img/dice-6-svgrepo-com.svg",
  ];

  return (
    <img
      onClick={onClick}
      src={diceImgs[randomNumber - 1]}
      alt="dice"
    />
  );
};

export default Dice;
