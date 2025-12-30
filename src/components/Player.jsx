import { useState } from 'react';
import { Edit2, Save, X as XIcon, Circle } from 'lucide-react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        <span className="player-symbol-icon">
          {symbol === 'X' ? (
            <XIcon size={24} strokeWidth={3} />
          ) : (
            <Circle size={24} strokeWidth={3} />
          )}
        </span>
        {editablePlayerName}
      </span>
      <button onClick={handleEditClick} className="edit-btn">
        {isEditing ? (
          <>
            <Save size={18} strokeWidth={2.5} />
            <span>Save</span>
          </>
        ) : (
          <>
            <Edit2 size={18} strokeWidth={2.5} />
            <span>Edit</span>
          </>
        )}
      </button>
    </li>
  );
}