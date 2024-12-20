import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);

  const increaseTime = (increment) => {
    if (!running) setTimeLeft(prevTime => prevTime + increment);
  };

  useEffect(() => {
    if (running && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime === 1) {
            clearInterval(intervalId);
            alert('Taymer bitdi!');
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [running, timeLeft]);

  const toggleStartPause = () => {
    if (timeLeft > 0) {
      setRunning(!running);
    }
  };

  return (
    <div>
      <h1>Taymer</h1>
      <p>{timeLeft} saniyə</p>
      <button onClick={() => increaseTime(10)}>+10 saniyə</button>
      <button onClick={() => increaseTime(60)}>+1 dəqiqə</button>
      <button onClick={toggleStartPause}>
        {running ? 'Pauza' : 'Başlat'}
      </button>
    </div>
  );
}

export default Timer;