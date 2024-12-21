import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementHours,
  incrementMinutes,
  incrementSeconds,
  saveMeasurement,
  resetTime,
} from '../redux/timeSlice';

const Timer = () => {
  const { hours, minutes, seconds, history } = useSelector((state) => state.time);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <nav>
        <button>Saat</button>
        <button>Saniyəölçən</button>
        <button style={{ backgroundColor: '#a84dcf', color: 'white' }}>Taymer</button>
      </nav>
      <div style={{ fontSize: '48px', margin: '20px 0' }}>
        <div>
          <span>{String(hours).padStart(2, '0')}</span>
          <button onClick={() => dispatch(incrementHours())}>+</button>
        </div>
        <div>
          <span>{String(minutes).padStart(2, '0')}</span>
          <button onClick={() => dispatch(incrementMinutes())}>+</button>
        </div>
        <div>
          <span>{String(seconds).padStart(2, '0')}</span>
          <button onClick={() => dispatch(incrementSeconds())}>+</button>
        </div>
      </div>
      <button onClick={() => dispatch(saveMeasurement())} style={{ margin: '10px' }}>
        Ölçmə Saxla
      </button>
      <button onClick={() => dispatch(resetTime())}>Sıfırla</button>
      <h2>Keçmiş ölçmələr</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {history.map((time, index) => (
          <li key={index}>
            {String(time.hours).padStart(2, '0')}:
            {String(time.minutes).padStart(2, '0')}:
            {String(time.seconds).padStart(2, '0')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timer;
