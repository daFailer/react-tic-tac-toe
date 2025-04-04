const GameField = ({id, symbol, isActive, xPos, yPos}) : JSX.Element => {

  const handleClick = (argument: number) : void => {
    console.log(argument)
  }

  return (
    <li key={id}>
      <button onClick={() => handleClick(id)}>{id}</button>
    </li>
  );
}

export default GameField;