import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Clock from './Hour';
import Stopwatch from './StopWatch';
import Timer from './Timer';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/clock">Saat</Link></li>
          <li><Link to="/stopwatch">Saniyəölçən</Link></li>
          <li><Link to="/timer">Taymer</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;