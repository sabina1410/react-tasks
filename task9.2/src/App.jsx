import React, { useState, useEffect } from 'react';
import './App.css';
import Employees from './Employees';

function App() {
  const [members, setMembers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((member) => ({
          ...member,
          alive: Math.random() > 0.5,
        }));
        setMembers(updatedData);
      });
  }, []);

  return (
    <div className="container">
      <h1>Üzük Qardaşlığı</h1>
      <div className="buttons">
        <button onClick={() => setFilter('all')}>Hamısı</button>
        <button onClick={() => setFilter('alive')}>Yaşayanlar</button>
        <button onClick={() => setFilter('dead')}>Ölənlər</button>
      </div>
      <Employees members={members} filter={filter} />
    </div>
  );
}

export default App;


