import React, { useEffect, useState } from "react";

import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import Timer from "./components/Timer";
import game from "./game/game";
import gameEightCards from "./game/gameEightCards";

function MemoryGame() {
  const [gameOver, setGameOver] = useState(true);
  const [cards, setCards] = useState([]);
  const [eightCards, setEightCards] = useState([]);
  const [isActive] = useState(true);
  const [eightCardsActive, setEightCardsActive] = useState(false);
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
    setEightCards(gameEightCards.startCards());
  }, []);

  function restart() {
    setTime(0);
    game.restartPairCont();
    game.restartCards();
    game.endGame = false;
    setCards(game.startCards());
    setGameOver(false);
    setEightCardsActive(false);
    game.movimentos = 0;
  }

  function restartEightCards() {
    setTime(0);
    gameEightCards.restartPairCont();
    gameEightCards.restartCards();
    gameEightCards.endGame = false;
    setEightCards(gameEightCards.startCards());
    setGameOver(false);
    setEightCardsActive(true);
    gameEightCards.movimentos = 0;
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
        }, 2000);
      }
    }
    setCards([...game.cards]);
  }

  function handleFlipEightCards(card) {
    if (gameEightCards.setEightCards(card.currentTarget.id)) {
      if (gameEightCards.matchCheck()) {
        gameEightCards.clearCards()
        if (gameEightCards.endGameStatus()) {
          setGameOver(true);
        }
      } else if (gameEightCards.secondCard != null) {
        setTimeout(() => {
          gameEightCards.resetFlip();
          gameEightCards.clearCards()
          setEightCards([...gameEightCards.cards]);
        }, 2000);
      }
    }
    setEightCards([...gameEightCards.cards]);
  }

  return (
    <>
      <div className="info-container">
        <h2>Jogadas: {eightCardsActive === true ? gameEightCards.movimentos : game.movimentos}</h2>
        <h2>Tempo: <Timer time={time} /></h2>
      </div>
      {eightCardsActive === true ? (
        <GameBoard handleFlip={handleFlipEightCards} cards={eightCards}></GameBoard>
        ) : (
        <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      )}
      <GameOver show={gameOver} handleRestart={restart} eightCards={restartEightCards}></GameOver>
    </>
  );
}

export default MemoryGame;
