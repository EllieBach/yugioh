import React from 'react';
import './styles/__LifePoints.scss';
import GameBoard from './GameBoard'; // Assuming you have a GameBoard component

const LifePoints = () => {
  return (
    <div className="life-points-container">
      <div className="player player1">
        <div className="player-name">Player 1</div>
        <div className="hp-bar hpbar1">HP Bar 1</div>
      </div>
      <GameBoard /> {/* Place the GameBoard component here */}
      <div className="player player2">
        <div className="player-name">Player 2</div>
        <div className="hp-bar hpbar2">HP Bar 2</div>
      </div>
    </div>
  );
};

export default LifePoints;
