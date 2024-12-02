import React from 'react';

interface SquareProps {
  isLight: boolean;
  x: number;
  y: number;
  children?: React.ReactNode;
}

const Square: React.FC<SquareProps> = ({ isLight, children }) => {
  return <div className={`square ${isLight ? 'light' : 'dark'}`}>{children}</div>;
};

export default Square;
