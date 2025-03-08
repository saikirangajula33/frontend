import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome to my React Webpage!");

  const changeMessage = () => {
    setMessage("Hello, React is awesome!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={changeMessage}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;
