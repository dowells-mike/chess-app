import React from 'react';

interface PieceProps {
  type: string; // 'p', 'r', 'n', 'b', 'q', 'k'
  color: 'w' | 'b'; // 'w' for white, 'b' for black
}

const Piece: React.FC<PieceProps> = ({ type, color }) => {
  // Dynamically import the SVG file based on the piece type and color
  const pieceSrc = require(`../assets/images/${color}${type.toUpperCase()}.svg`);

  return (
    <img
      src={pieceSrc}
      alt={`${color}${type}`}
      className="piece"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default Piece;
