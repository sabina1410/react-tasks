import React, { useState, useEffect } from 'react';

function Hour() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);  
  }, []);

  return (
    <div>
      <h1>Saat</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Hour;