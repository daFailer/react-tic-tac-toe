import { useState } from 'react';

import type { PlayerType } from './types/players';

import { Players } from './components/Players';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combinations';
import { initialGameBoard } from './gameboard';

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

type GameTurn = {
  square: {
    xPos: number;
    yPos: number;
  };
  player: PlayerType;
};

function App() {
  const [playersStats, setPlayersStats] = useState(initialPlayers);
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  let winnerPlayer;

  const gameBoardLayout = [...initialGameBoard.map((row) => [...row].map((cell) => ({ ...cell })))];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const {xPos, yPos } = square;
    const { symbol } = player;
    
    gameBoardLayout[yPos][xPos].value = symbol;
  }

  for (const winningCombination of WINNING_COMBINATIONS) {
    let winnerSymbol;

    const firstSquareSymbol = gameBoardLayout[winningCombination[0].row][winningCombination[0].column].value;
    const secondSquareSymbol = gameBoardLayout[winningCombination[1].row][winningCombination[1].column].value;
    const thirdSquareSymbol = gameBoardLayout[winningCombination[2].row][winningCombination[2].column].value; 
    
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winnerSymbol = firstSquareSymbol;

      winnerPlayer = playersStats.find((player) => {
        if (player.symbol === winnerSymbol) {
          return player;
        }
      })
    }
  }

  const hasDraw = gameTurns.length === 9 && !winnerPlayer;

  const handleEditPlayer = (e: React.ChangeEvent<HTMLInputElement>, playerId: number) => {
    let newPlayersStats = [...playersStats];

    newPlayersStats = newPlayersStats.map(player => {
      if (player.id === playerId) {
        return {
          ...player,
          name: e.target.value,
        };
      }
      return player;
    });

    setPlayersStats(newPlayersStats);

    setGameTurns(prevTurns => {
      return prevTurns.map(turn => {
        if (turn.player.id === playerId) {
          return {
            ...turn,
            player: {
              ...turn.player,
              name: e.target.value,
            }
          };
        }
        return turn;
      });
    });
  };

  const handleSelectSquare = (prevPlayersStats: [PlayerType, PlayerType], rowIndex: number, colIndex: number): void => {
    setGameTurns((prevTurns) => {
      const lastPlayerId = prevTurns[0]?.player?.id;
      const activePlayer = prevPlayersStats.find((player) => player.isActive);
  
      let currentPlayer = activePlayer;
      
      if (lastPlayerId === activePlayer.id) {
        currentPlayer = prevPlayersStats.find((player) => player.id !== activePlayer.id)!;
      }
  
      const updatedTurns = [
        {
          square: {
            xPos: colIndex,
            yPos: rowIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
  
      return updatedTurns;
    });
  
    const updatedPlayerStats: [PlayerType, PlayerType] = [...prevPlayersStats];
  
    updatedPlayerStats[0] = {
      ...updatedPlayerStats[0],
      isActive: !updatedPlayerStats[0].isActive,
    };
    updatedPlayerStats[1] = {
      ...updatedPlayerStats[1],
      isActive: !updatedPlayerStats[1].isActive,
    };
    
    setPlayersStats(updatedPlayerStats);
  };

  const RestartGame = () => {
    setGameTurns([]);
    setPlayersStats(initialPlayers);
  }

  return (
    <main>
      <div id="game-container">
        <Players players={playersStats} onEditPlayer={handleEditPlayer} />

        { (winnerPlayer || hasDraw) && <GameOver
          name={winnerPlayer?.name} 
          onRestartGame={RestartGame}
        />}
        <GameBoard
          gameBoardLayout={gameBoardLayout}
          onSelectSquare={handleSelectSquare}
          players={playersStats}
        />
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
