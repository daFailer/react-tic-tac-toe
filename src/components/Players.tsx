import type { PlayerType } from '../types/players';

import Player from './Player';

const initialPlayers: [PlayerType, PlayerType] = [
  {
    id: 1,
    name: 'Player 1',
    symbol: 'X',
  },
  {
    id: 2,
    name: 'Player 2',
    symbol: 'O',
  },
];

export const Players: React.FC = () => {
  return (
    <ol id="players">
      {initialPlayers.map((player) => 
        <Player
          key={player.id}
          {...player}
        />
      )}
    </ol>
  );
}