import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame } from "../store/reducers/gameSlice";
import Square from "./Square";
import styles from "../styles/game.module.css";
import { renderWinningLine } from "../utils/renderWinningLine";
import Chat from "./Chat";

const Game = () => {
  const { xIsNext, winner, gameStatus, winningLine } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (gameStatus !== "ongoing") {
      setTimeout(() => {
        dispatch(resetGame());
      }, 5000);
    }
  }, [gameStatus, dispatch]);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.player}>
        <div>
          {gameStatus === "ongoing" && xIsNext && <p>Wait your opponent.</p>}
          {gameStatus === "ongoing" && !xIsNext && <p>Your turn:</p>}
          {gameStatus === "won" && winner.winner === "O" && <p>You win!</p>}
          {gameStatus === "won" && winner.winner === "X" && <p>You lost!</p>}
          {gameStatus === "draw" && <p>Draw!</p>}
        </div>
        <div className={styles.board}>
          {Array.from({ length: 9 }).map((_, i) => Square(i, false))}
          {renderWinningLine(winningLine)}
        </div>
        <Chat currentPlayer="Player 1" />
      </div>

      <div className={styles.player}>
        {gameStatus === "ongoing" && !xIsNext && <p>Wait your opponent.</p>}
        {gameStatus === "ongoing" && xIsNext && <p>Your turn:</p>}
        {gameStatus === "won" && winner.winner === "X" && <p>You win!</p>}
        {gameStatus === "won" && winner.winner === "O" && <p>You lost!</p>}
        {gameStatus === "draw" && <p>Draw!</p>}
        <div className={styles.board}>
          {Array.from({ length: 9 }).map((_, i) => Square(i, true))}
          {renderWinningLine(winningLine)}
        </div>
        <Chat currentPlayer="Player 2" />
      </div>
    </div>
  );
};

export default Game;
