import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

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
    return null;
  };

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  const clickHandler = (i) => {
    const newSquares = current.squares.slice();
    if (newSquares[i] || winner) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...history, { squares: newSquares }]);
    setXIsNext((prev) => !prev);
  };

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => clickHandler(i)} />
      </div>
    </div>
  );
}

export default App;
