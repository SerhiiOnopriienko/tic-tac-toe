import { useSelector, useDispatch } from "react-redux";
import { makeMove } from "../store/reducers/gameSlice";
import styles from "../styles/square.module.css";

const Square = (index, isPlayer1) => {
  const { board, xIsNext, gameStatus } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (gameStatus === "ongoing") {
      dispatch(makeMove({ index }));
    }
  };
  return (
    <button
      key={index}
      className={styles.square}
      onClick={() => handleClick(index)}
      disabled={
        (isPlayer1 && !xIsNext) ||
        (!isPlayer1 && xIsNext) ||
        board[index] !== null
      }
    >
      {board[index]}
    </button>
  );
};
export default Square;
