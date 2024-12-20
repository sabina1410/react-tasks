import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); 
  }, [running]);

  const toggleStartStop = () => setRunning(!running);

  return (
    <div>
      <h1>Saniyəölçən</h1>
      <p>{seconds} saniyə</p>
      <button onClick={toggleStartStop}>{running ? 'Dayandır' : 'Başlat'}</button>
    </div>
  );
}

export default Stopwatch;