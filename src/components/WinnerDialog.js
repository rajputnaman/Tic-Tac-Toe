import React from "react";
import "./WinnerDialog.css";

function Winner({ handleClick, winner }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          {winner ? (
            <h1>
              Ta Da!, Player <span className="name">'{winner}'</span> won.
            </h1>
          ) : (
            <h1>It's a Tie.</h1>
          )}
        </div>
        <button className="btn" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Winner;
