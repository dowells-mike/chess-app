// App.tsx
import React from 'react';
import Board from './components/Board';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Chess Game</h1>
      <Board />
    </div>
  );
};

export default App;
