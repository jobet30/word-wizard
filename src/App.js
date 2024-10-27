// App.js
import React from "react";
import Button from "./Button";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="app-container">
      <h1>Word Wizard</h1>
      <Button label="Start Game" onClick={handleClick} />
    </div>
  );
};

export default App;
