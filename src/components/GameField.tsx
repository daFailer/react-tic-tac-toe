import { PlayerType } from "../types/players";

interface GameFieldProps {
  value: string | null;
  onInteraction?: (players: PlayerType[], rowIndex: number, colIndex: number) => void;
  rowIndex: number;
  colIndex: number;
  players: PlayerType[];
}

const GameField = ({value, onInteraction, rowIndex, colIndex, players}: GameFieldProps): React.JSX.Element => {
  return (
    <li>
      <button 
        onClick={() => onInteraction && onInteraction(players, rowIndex, colIndex)} 
        disabled={value ? true : undefined}
      >
        {value}
      </button>
    </li>
  );
}

export default GameField;