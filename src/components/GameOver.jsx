import { Trophy, Handshake, RotateCcw } from 'lucide-react';

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <div className="game-over-content">
        {winner ? (
          <>
            <div className="trophy-icon">
              <Trophy size={80} strokeWidth={2} />
            </div>
            <h2>Victory!</h2>
            <p className="winner-text">
              <span className="winner-name">{winner}</span> wins!
            </p>
          </>
        ) : (
          <>
            <div className="trophy-icon">
              <Handshake size={80} strokeWidth={2} />
            </div>
            <h2>Draw!</h2>
            <p className="winner-text">Well played both!</p>
          </>
        )}
        <button onClick={onRestart} className="rematch-btn">
          <RotateCcw size={24} strokeWidth={2.5} />
          Rematch
        </button>
      </div>
    </div>
  );
}