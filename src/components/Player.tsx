import type { PlayerType } from '../types/players';

import { useState } from 'react';

const Player: React.FC<PlayerType> = ({ name, symbol, isActive, onEditName, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEditClick = (playerId) : void => {    
    setIsEditing((editing) => !editing);
  }

  let playerNameElement = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerNameElement = <input type="text" required value={name} onChange={() => onEditName(event, id)}/>;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick(id)}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;