import React from 'react';
import Square from './Square';
import Piece from './Piece';
import chess from '../gameLogic/chessEngine';
import './Board.css';

const Board: React.FC = () => {
  // Use the public getBoard method to retrieve the board state
  const board = chess.getBoard();

  const renderSquares = () => {
    const squares = [];

    for (let y = 7; y >= 0; y--) {
      for (let x = 0; x < 8; x++) {
        const piece = board[y][x];
        const isLightSquare = (x + y) % 2 === 0;
        squares.push(
          <Square key={`${x}-${y}`} isLight={isLightSquare} x={x} y={y}>
            {piece && <Piece type={piece.type} color={piece.color} />}
          </Square>
        );
      }
    }
    return squares;
  };

  return <div className="board">{renderSquares()}</div>;
};

export default Board;
