import styles from "../styles/header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../store/reducers/gameSlice";
import { resetMessages } from "../store/reducers/chatSlice";

const Header = () => {
  const { score } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  //fully resets game
  const resetGameClick = () => {
    dispatch(resetScore());
    dispatch(resetMessages());
  };

  return (
    <div className={styles.headerContainer}>
      <p className={styles.hidenOnMobile}>Player 1</p>
      <div className={styles.scoreContainer}>
        <p>
          Score: {score.player1}:{score.player2}
        </p>
        <button className={styles.resetButton} onClick={resetGameClick}>
          Reset
        </button>
      </div>
      <p className={styles.hidenOnMobile}>Player 2</p>
    </div>
  );
};

export default Header;
