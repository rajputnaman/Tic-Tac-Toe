import React from "react";
import Game from "./components/Game";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="heading">Tic-Tac-Toe</h1>
      <Game />
      <p className="footer">Made by Naman.</p>
    </div>
  );
}

export default App;
