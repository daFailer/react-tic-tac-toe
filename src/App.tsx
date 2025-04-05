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

  const handleSelectSquare = (prevPlayersStats: [PlayerType, PlayerType]) : void => {
    const updatedPlayerStats: [PlayerType, PlayerType] = [...prevPlayersStats];

    updatedPlayerStats[0].isActive = !updatedPlayerStats[0].isActive;
    updatedPlayerStats[1].isActive = !updatedPlayerStats[1].isActive;

    setPlayersStats(updatedPlayerStats);
  };

  return (
    <main>
      <div id="game-container">
        <Players players={playersStats} />

        <GameBoard players={playersStats} onSelectSquare={() => handleSelectSquare(playersStats)} />
      </div>

      <Log />
    </main>
  )
}

export default App
