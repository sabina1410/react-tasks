import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timer from './Timer';
import './App.css';
import "../redux/timeSlice"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />} />
      </Routes>
    </Router>
  );
};

export default App;
