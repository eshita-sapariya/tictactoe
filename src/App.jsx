import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import './styles/root.scss';
import { calculateWinner } from './helper';

const app = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  // console.log(history);

  const [currentMove, setCurrentMove] = useState(0);
  // console.log(currentMove);

  const current = history[currentMove];
  // console.log(current);
  // console.log(board);

  const winner = calculateWinner(current.board);
  // console.log(winner);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];
      console.log(last);
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default app;
// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );
