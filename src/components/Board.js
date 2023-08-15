import React, { useState } from "react";
import "./Board.css";
import Square from "./Square.js";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [3, 4, 5],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `The winner is ${winner}`;
  } else {
    status = `Next Player is ${isXNext ? "X" : "O"}`;
  }

  const clickHandler = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext((prev) => !prev);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => clickHandler(i)} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
