import GameField from './GameField';

const GameBoard = ({ gameBoardLayout, onSelectSquare, players}) => {
  return (
    <div id="game-board">
      <ol>
        {gameBoardLayout.map((row, rowIndex) => 
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => 
                  <GameField key={col.id} value={col.value} rowIndex={rowIndex} colIndex={colIndex} players={players} onInteraction={onSelectSquare} />
              )}
            </ol>
          </li>
        )}
      </ol>
    </div>
  )
}

export default GameBoard;