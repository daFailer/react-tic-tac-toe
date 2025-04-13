import type { PlayerType } from '../types/players';

import Player from './Player';

export const Players: React.FC<{ players: PlayerType[], onEditPlayer: (e: React.ChangeEvent<HTMLInputElement>, playerId: number) => void }> = ({ players, onEditPlayer }) => {
  return (
    <ol id="players" className="highlight-player">
      {players.map((player) => 
        <Player
          key={player.id}
          onEditName={(e: React.ChangeEvent<HTMLInputElement>, playerId: number) => onEditPlayer(e, playerId)}
          {...player}
        />
      )}
    </ol>
  );
}