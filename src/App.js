import React from "react";
import "./App.css";
import RandomMachine from "./quote-machine";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote Random Machine</h1>
      </header>
      <main className="main">
      <RandomMachine />
      </main>
    </div>
  );
};

export default App;
