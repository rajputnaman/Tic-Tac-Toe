import React from "react";
import Square from "./Square";
import "./Board.css";

function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Square
            key={idx}
            value={value}
            onClick={() => !value && onClick(idx)}
          />
        );
      })}
    </div>
  );
}

export default Board;
