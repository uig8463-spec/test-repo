import { Circle, X } from 'lucide-react';

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li 
          key={`${turn.square.row}${turn.square.col}`}
          className={`log-entry ${turn.player === 'X' ? 'player-x' : 'player-o'}`}
        >
          <div className="log-move">
            <span className="log-player-icon">
              {turn.player === 'X' ? (
                <X size={20} strokeWidth={3} />
              ) : (
                <Circle size={20} strokeWidth={3} />
              )}
            </span>
            <span className="log-player-name">{turn.player}</span>
            <span className="log-move-text">
              moved to [{turn.square.row}, {turn.square.col}]
            </span>
            <span className="log-move-number">#{turns.length - index}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}