import React from 'react';

function Button() {
  const handleClick = () => {
    console.log('Button click!');
  };

  return (
    <button onClick={handleClick}>Click me!</button>
  );
}

export default Button;


  
