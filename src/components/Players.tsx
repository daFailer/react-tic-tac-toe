import type { PlayerType } from '../types/players';

import Player from './Player';

// const initialPlayers: [PlayerType, PlayerType] = [
//   {
//     id: 1,
//     name: 'Player 1',
//     symbol: 'X',
//     active: true,
//   },
//   {
//     id: 2,
//     name: 'Player 2',
//     symbol: 'O',
//     active: false,
//   },
// ];

export const Players: React.FC<{ players: PlayerType[] }> = ({ players }) => {
  return (
    <ol id="players" className="highlight-player">
      {players.map((player) => 
        <Player
          key={player.id}
          {...player}
        />
      )}
    </ol>
  );
}