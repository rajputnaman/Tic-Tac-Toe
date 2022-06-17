import React from "react";
import "./Reset.css";

function Reset({ onClick }) {
  return (
    <button className="reset-btn" onClick={onClick}>
      Reset
    </button>
  );
}

export default Reset;
