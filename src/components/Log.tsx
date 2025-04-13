import type { GameTurn } from '../types/gameTurn';

const Log = ({turns = [] as GameTurn[]}): React.ReactElement => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.xPos}-${turn.square.yPos}`}>{turn.player.name} selected {turn.square.xPos}, {turn.square.yPos}
        </li>
      ))}
    </ol>
  );
}

export default Log;