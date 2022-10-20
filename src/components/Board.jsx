import React from 'react';
import Square from './Square';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square value="1"></Square>
        <Square value="2"></Square>
        <Square value="3"></Square>
      </div>
      <div className="board-row">
        <Square value="4"></Square>
        <Square value="5"></Square>
        <Square value="6"></Square>
      </div>
      <div className="board-row">
        <Square value="7"></Square>
        <Square value="8"></Square>
        <Square value="9"></Square>
      </div>
    </div>
  );
};

export default Board;
