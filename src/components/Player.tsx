import type { PlayerType } from '../types/players';

import { useState } from 'react';

const Player: React.FC<PlayerType> = ({ name, symbol, id }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () : void => {
    
    setIsEditing(!isEditing);
  }

  let playerNameElement = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameElement = <input type="text" required defaultValue={playerName} />;
  }

  return (
    <li>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;