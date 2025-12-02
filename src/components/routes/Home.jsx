import React, { useState, useEffect } from "react";
import Header from "../Header";
import Board from "../layout/Board";
import Dice from "../Dice";
import Form from "../Form";

function Home() {
  // Estado del juego
  const [position, setPosition] = useState(0);
  const [cookies, setCookies] = useState(3);
  const [eggs, setEggs] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [gameStatus, setGameStatus] = useState("En curso");
  const [gameMessage, setGameMessage] = useState("");
  const [diceValue, setDiceValue] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (gameOver) return;
    if (position === 5) {
      setGameStatus("Ganaste, Mando completa la misión");
      setGameMessage("¡Grogu ha llegado al final del tablero!");
      setGameOver(true);
    } else if (cookies === 0 && eggs === 0 && frogs === 0) {
      setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido");
      setGameMessage("Todas las mercancías han sido recogidas/comidas");
      setGameOver(true);
    } else {
      setGameStatus("En curso");
      setGameMessage("");
    }
  }, [position, cookies, eggs, frogs, gameOver]);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 4) + 1;
    setDiceValue(value);

    if (value === 4) {
      setPosition((prev) => prev + 1);
      setGameMessage("Ha salido 4: Grogu ha avanzado una casilla.");
    } else if (value === 1) {
      setCookies((prev) => Math.max(0, prev - 1));
      setGameMessage("Ha salido 1: Se ha descargado una galleta.");
    } else if (value === 2) {
      setEggs((prev) => Math.max(0, prev - 1));
      setGameMessage("Ha salido 2: Se ha descargado un huevito.");
    } else if (value === 3) {
      setFrogs((prev) => Math.max(0, prev - 1));
      setGameMessage("Ha salido 3: Se ha descargado una ranita.");
    }
  };

  const resetGame = () => {
    setPosition(0);
    setCookies(3);
    setEggs(3);
    setFrogs(3);
    setGameStatus("En curso");
    setGameMessage("");
    setDiceValue(null);
    setGameOver(false);
  };

  return (
    <div>
      <Header />
      <main className="page">
        <Board position={position} />

        <section>
          <Dice
            rollDice={rollDice}
            diceValue={diceValue}
            gameMessage={gameMessage}
            gameStatus={gameStatus}
            name={name}
          />
        </section>

        <Form name={name} setName={setName} />
        <section className="goods-container">
          {cookies >= 1 && <div className="goods-item">🍪</div>}
          {cookies >= 2 && <div className="goods-item">🍪</div>}
          {cookies >= 3 && <div className="goods-item">🍪</div>}
        </section>
        <section className="goods-container">
          {eggs >= 1 && <div className="goods-item">🥚</div>}
          {eggs >= 2 && <div className="goods-item">🥚</div>}
          {eggs >= 3 && <div className="goods-item">🥚</div>}
        </section>
        <section className="goods-container">
          {frogs >= 1 && <div className="goods-item">🐸</div>}
          {frogs >= 2 && <div className="goods-item">🐸</div>}
          {frogs >= 3 && <div className="goods-item">🐸</div>}
        </section>
        <section>
          <button className="restart-button" onClick={resetGame}>
            Reiniciar Juego
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
