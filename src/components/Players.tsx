import type { PlayerType } from '../types/players';

import Player from './Player';

export const Players: React.FC<{ players: PlayerType[] }> = ({ players, onEditPlayer }) => {
  return (
    <ol id="players" className="highlight-player">
      {players.map((player) => 
        <Player
          key={player.id}
          onEditName={onEditPlayer}
          {...player}
        />
      )}
    </ol>
  );
}