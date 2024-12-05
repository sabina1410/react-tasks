import React, { useState } from "react";

const Counter = ({ onValueChange }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      onValueChange();
    }
  };

  const decrement = () => {
    if (count > -10) {
      setCount(count - 1);
      onValueChange();
    }
  };

  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;

