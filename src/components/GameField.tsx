import { PlayerType } from "../types/players";

interface GameFieldProps {
  value: string | null;
  onInteraction?: () => void;
  rowIndex: number;
  colIndex: number;
  players: PlayerType[];
}

const GameField = ({value, onInteraction, rowIndex, colIndex, players}: GameFieldProps): React.JSX.Element => {
  return (
    <li>
      <button onClick={() => onInteraction(players, rowIndex, colIndex)}>{value}</button>
    </li>
  );
}

export default GameField;