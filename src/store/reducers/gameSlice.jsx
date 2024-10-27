import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  gameStatus: "ongoing",
  score: { player1: 0, player2: 0 },
  winningLine: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    makeMove: (state, action) => {
      const { index } = action.payload;
      if (state.board[index] || state.winner) return;

      state.board[index] = state.xIsNext ? "X" : "O";
      state.xIsNext = !state.xIsNext;

      // Check for a winner or draw
      const winner = calculateWinner(state.board);
      if (winner) {
        state.winner = winner;
        state.gameStatus = "won";
        state.winningLine = winner.winningLine;
        if (winner.winner === "X") {
          state.score.player2 += 1;
        } else {
          state.score.player1 += 1;
        }
      } else if (!state.board.includes(null)) {
        state.gameStatus = "draw";
      }
    },
    resetGame: (state) => {
      state.board = Array(9).fill(null);
      state.xIsNext = true;
      state.winner = null;
      state.gameStatus = "ongoing";
      state.winningLine = null;
    },
    resetScore: (state) => {
      state.board = Array(9).fill(null);
      state.xIsNext = true;
      state.winner = null;
      state.gameStatus = "ongoing";
      state.score.player1 = 0;
      state.score.player2 = 0;
      state.winningLine = null;
    },
  },
});

export const { makeMove, resetGame, resetScore } = gameSlice.actions;
export default gameSlice.reducer;

// Helper function to check for a winner
function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winningLine: [a, b, c] };
    }
  }
  return null;
}
