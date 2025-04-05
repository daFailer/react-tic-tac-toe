import type { PlayerType } from '../types/players';

import { useState } from 'react';

const Player: React.FC<PlayerType> = ({ name, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () : void => {    
    setIsEditing((editing) => !editing);
  }

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }

  let playerNameElement = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameElement = <input type="text" required value={playerName} onChange={handleChange}/>;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;