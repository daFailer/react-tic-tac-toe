import type { PlayerType } from '../types/players';

import { useState } from 'react';

const Player: React.FC<PlayerType & { onEditName: (e: React.ChangeEvent<HTMLInputElement>, playerId: number) => void }> = ({ name, symbol, isActive, onEditName, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEditClick = () : void => {    
    setIsEditing((editing) => !editing);
  }

  let playerNameElement = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerNameElement = <input type="text" required value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onEditName(e, id)}/>;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;