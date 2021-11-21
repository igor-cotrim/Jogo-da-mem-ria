import React, { useEffect, useState } from "react";

import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import game from "./game/game";
import Timer from "./components/Timer";

function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);
  const [isActive] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  useEffect(() => {
    setCards(game.startCards());
  }, []);

  function restart() {
    setTime(0);
    game.restartPairCont();
    game.restartCards();
    game.endGame = false;
    setCards(game.startCards());
    setGameOver(false);
  }
  function handleFlip(card) {

    if (game.setCard(card.currentTarget.id)) {
      if (game.matchCheck()) {
        game.clearCards()
        if (game.endGameStatus()) {
          setGameOver(true);
        }
      } else if (game.secondCard != null) {
        setTimeout(() => {
          game.resetFlip();
          game.clearCards()
          setCards([...game.cards]);
        }, 1000);
      }
    }
    setCards([...game.cards]);
  }

  return (
    <>
      <div className="info-container">
        <h2>Jogadas: {game.movimentos}</h2>
        <h2>Tempo: <Timer time={time} /></h2>
      </div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </>
  );
}

export default MemoryGame;
