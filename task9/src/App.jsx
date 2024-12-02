import React from "react";
import Employees from "./Employees";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Employee List</h1>
        <p>Bu səhifədə işçilər haqqında məlumat var.</p>
      </header>
      <main>
        <Employees />
      </main>
    </div>
  );
}

export default App;

