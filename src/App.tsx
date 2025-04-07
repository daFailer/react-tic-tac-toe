import { useState } from 'react';

import type { PlayerType } from './types/players';

import { Players } from './components/Players';
import GameBoard from './components/GameBoard';
import Log from './components/Log';


import './App.scss'

const initialPlayers: [PlayerType, PlayerType] = [
  {
    id: 1,
    name: 'Player 1',
    symbol: 'X',
    isActive: true,
  },
  {
    id: 2,
    name: 'Player 2',
    symbol: 'O',
    isActive: false,
  },
];

function App() {
  const [playersStats, setPlayersStats] = useState(initialPlayers);
  const [gameTurns, setGameTurns] = useState<string[]>([]);

  const handleSelectSquare = (prevPlayersStats: [PlayerType, PlayerType], rowIndex: number, colIndex: number) : void => {
    console.log(rowIndex, colIndex);
    
    const updatedPlayerStats: [PlayerType, PlayerType] = [...prevPlayersStats];

    updatedPlayerStats[0].isActive = !updatedPlayerStats[0].isActive;
    updatedPlayerStats[1].isActive = !updatedPlayerStats[1].isActive;

    setPlayersStats(updatedPlayerStats);

    setGameTurns((prevTurns) => {
      let currentPlayer = {
        id: 1,
        name: 'Player 1',
        symbol: 'X',
        isActive: true,
      };

      if (prevTurns.length > 0 && JSON.stringify(prevPlayersStats.find((player) => player.isActive === true)) === JSON.stringify(currentPlayer)) {
        currentPlayer = prevPlayersStats.find((player) => player.isActive === false);
      }

      const updatedTurns = [
        {
          square: {
            xPos: colIndex,
            yPos: rowIndex,
          },
          player: currentPlayer,

        },
        ...prevTurns
      ];

      return updatedTurns;
    })
  };

  return (
    <main>
      <div id="game-container">
        <Players players={playersStats} />

        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          players={playersStats}
        />
      </div>

      <Log />
    </main>
  )
}

export default App
