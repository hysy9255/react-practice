import React, { useState } from "react";
import "./Board.css";
import Square from "./Square.js";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

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
      <div className="status">`Next Player: {isXNext ? "X" : "O"}`</div>
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
