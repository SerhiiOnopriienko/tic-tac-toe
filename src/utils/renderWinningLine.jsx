import styles from "../styles/game.module.css";

const renderWinningLine = (winningLine) => {
  if (!winningLine) return null;

  const [a, b, c] = winningLine;

  // Determine the type of line (row, column, diagonal)
  if (a === 0 && b === 1 && c === 2)
    return (
      <div
        className={`${styles.winningLine} ${styles.horizontal}`}
        style={{ top: "55px" }}
      />
    );
  if (a === 3 && b === 4 && c === 5)
    return (
      <div
        className={`${styles.winningLine} ${styles.horizontal}`}
        style={{ top: "155px" }}
      />
    );
  if (a === 6 && b === 7 && c === 8)
    return (
      <div
        className={`${styles.winningLine} ${styles.horizontal}`}
        style={{ top: "255px" }}
      />
    );

  if (a === 0 && b === 3 && c === 6)
    return (
      <div
        className={`${styles.winningLine} ${styles.vertical}`}
        style={{ left: "55px" }}
      />
    );
  if (a === 1 && b === 4 && c === 7)
    return (
      <div
        className={`${styles.winningLine} ${styles.vertical}`}
        style={{ left: "155px" }}
      />
    );
  if (a === 2 && b === 5 && c === 8)
    return (
      <div
        className={`${styles.winningLine} ${styles.vertical}`}
        style={{ left: "255px" }}
      />
    );

  if (a === 0 && b === 4 && c === 8)
    return <div className={`${styles.winningLine} ${styles.diagonalLeft}`} />;
  if (a === 2 && b === 4 && c === 6)
    return <div className={`${styles.winningLine} ${styles.diagonalRight}`} />;
};

export { renderWinningLine };
