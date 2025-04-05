interface GameFieldProps {
  value: string | null;
  onInteraction?: () => void;
}

const GameField = ({value, onInteraction}: GameFieldProps): React.JSX.Element => {
  return (
    <li>
      <button onClick={onInteraction}>{value}</button>
    </li>
  );
}

export default GameField;