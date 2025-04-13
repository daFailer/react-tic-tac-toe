const GameOver = ({ name, onRestartGame }: { name: string, onRestartGame: () => void }) => {
  let message = 'It\'s a draw!';

  if (name) {
    message = `${name} won!`;
  }

  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{message}</p>
      <button onClick={onRestartGame}>Rematch!</button>
    </div>
  );
};

export default GameOver;