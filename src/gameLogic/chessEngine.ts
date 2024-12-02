interface Piece {
    type: string; // 'p', 'r', 'n', 'b', 'q', 'k'
    color: 'w' | 'b'; // 'w' for white, 'b' for black
  }
  
  type BoardState = (Piece | null)[][];
  
  class ChessEngine {
    private board: BoardState;
  
    constructor() {
      this.board = this.initializeBoard();
    }
  
    // Initialize the chessboard with pieces in their starting positions
    private initializeBoard(): BoardState {
      return [
        [
          { type: 'r', color: 'b' },
          { type: 'n', color: 'b' },
          { type: 'b', color: 'b' },
          { type: 'q', color: 'b' },
          { type: 'k', color: 'b' },
          { type: 'b', color: 'b' },
          { type: 'n', color: 'b' },
          { type: 'r', color: 'b' },
        ],
        Array(8).fill({ type: 'p', color: 'b' }),
        ...Array(4).fill(Array(8).fill(null)),
        Array(8).fill({ type: 'p', color: 'w' }),
        [
          { type: 'r', color: 'w' },
          { type: 'n', color: 'w' },
          { type: 'b', color: 'w' },
          { type: 'q', color: 'w' },
          { type: 'k', color: 'w' },
          { type: 'b', color: 'w' },
          { type: 'n', color: 'w' },
          { type: 'r', color: 'w' },
        ],
      ];
    }
  
    // Public method to access the board
    public getBoard(): BoardState {
      return this.board;
    }
  }
  
  const chess = new ChessEngine();
  export default chess;
  