import React from "react";
import './styles/__gameBoard.scss'

const GameBoard = () => {
  return (
    <>
      <div className="gameBoard">
        <div className="redPlayer">
          <div>
            <div className="redFirstRow">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="redSecondRow">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
        </div>
        <div className="bluePlayer">
          <div>
            <div className="blueFirstRow">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <div className="blueSecondRow">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;
