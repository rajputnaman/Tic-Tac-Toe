import React, { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";
import Board from "./Board";
import Reset from "./Reset";
import WinnerDialog from "./WinnerDialog";

function Game() {
  // Conditions of winning.
  const Win_Conditons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //store winner if there is a winner

  // Storing of scoreBoard & updation.
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });

  // updation of board at each move.
  const [board, setBoard] = useState(Array(9).fill(null));

  // for identify the player who is on move.
  const [xPlaying, setPlayer] = useState(true);

  // for pop-up of winner/game-over dialog box
  const [displayWinner, setdisplayWinner] = useState(false);

  // for storing winner if someone wins
  const [winner, setWinner] = useState(null);

  // function for clearing the board if Someone Won or Tie
  function clearBoard() {
    setBoard(Array(9).fill(null));
  }

  // handling close click of dialog box
  function handleCloseClick() {
    setdisplayWinner(false);
    clearBoard();
  }

  // function to check if current player who placed the move Won or Not.
  function checkWinner(board) {
    // iterating over the conditions to check if someone won.
    for (let i = 0; i < Win_Conditons.length; i++) {
      const [x, y, z] = Win_Conditons[i];
      if (
        board[x] &&
        board[y] &&
        board[z] &&
        board[x] === board[y] &&
        board[y] === board[z]
      ) {
        return board[x];
      }
    }
    return null;
  }

  // places the value x or y of the corresponding player on move in board.
  function handleSquareClick(squareIdx) {
    const updatedBoard = board.map((value, idx) => {
      if (idx === squareIdx) {
        return xPlaying ? "X" : "O";
      } else return value;
    });

    // updates the board with current move.
    setBoard(updatedBoard);

    //checking for winner after placing move.
    const isWinner = checkWinner(updatedBoard);

    // if there is a winner then update ScoreBoard & displays WinnerDialog box.
    if (isWinner) {
      if (isWinner === "O") {
        let { oScore } = score;
        oScore++;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore++;
        setScore({ ...score, xScore });
      }
      setWinner(isWinner);
      setdisplayWinner(true);
    }

    // if all the squares are filled and no player wins, then it's a Tie.
    // So displays dialog box.
    else {
      let x = true;
      for (let i = 0; i < updatedBoard.length; i++) {
        if (!updatedBoard[i]) {
          x = false;
          break;
        }
      }
      if (x) {
        setWinner(null);
        setdisplayWinner(true);
      }
    }

    // after each move player are alternated.
    setPlayer(!xPlaying);
  }

  return (
    <div>

      {displayWinner && (
        <WinnerDialog handleClick={() => handleCloseClick()} winner={winner} />
      )}

      <ScoreBoard score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={handleSquareClick} />

      {/* component for resetting the board at any step. */}
      <Reset onClick={clearBoard} />
    </div>
  );
}

export default Game;
