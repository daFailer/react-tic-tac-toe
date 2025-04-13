import GameField from './GameField';
import type { PlayerType } from '../types/players';
import type { gameBoardLayout } from '../types/gameBoardLayout';

const GameBoard = ({ gameBoardLayout, onSelectSquare, players}: { gameBoardLayout: gameBoardLayout[][], onSelectSquare: (players: PlayerType[], rowIndex: number, colIndex: number) => void, players: PlayerType[] }) => {
  return (
    <div id="game-board">
      <ol>
        {gameBoardLayout.map((row, rowIndex) => 
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => 
                  <GameField 
                    key={col.id} 
                    value={col.value} 
                    rowIndex={rowIndex} 
                    colIndex={colIndex} 
                    players={players} 
                    onInteraction={(players, rowIndex, colIndex) => 
                      onSelectSquare(players, rowIndex, colIndex)
                    } 
                  />
              )}
            </ol>
          </li>
        )}
      </ol>
    </div>
  )
}

export default GameBoard;