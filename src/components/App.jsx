import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Board from "./layout/Board";
import Dice from "./Dice";

function App() {
  /* DATOS:
  -Posición -> Valor iniial: 0 (ó 1)
  -Num de galletas: 3
  -Num de Huevitos: 3
  -Num de Ranitas: 3

  EVENTOS Click botón "Lanzar dado"

  1. Gen número aleatorio debe estar entre 1 y 4
  2. Condicional 
  -Dado es 4 -> Groru avanza una posición -> Cambiar la vari-estado de la posición
  -Dado es 1, 2 o 3 -> Grogu descarga una mercancía -> Cambiar la vari-estado de la mercancía que corresponda

  EVENTO Click botón "Reiniciar Juego"

  1. Volver a poner los datos a su valor inicial.
  */

  // Estado del juego
  const [position, setPosition] = useState(0);
  const [cookies, setCookies] = useState(3);
  const [eggs, setEggs] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [gameStatus, setGameStatus] = useState("En curso");
  const [gameMessage, setGameMessage] = useState("");
  const [diceValue, setDiceValue] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // No actualizar si el juego ya terminó
    if (gameOver) return;
    // Condición de victoria: Grogu llega al final (posición 5)
    if (position === 5) {
      setGameStatus("Ganaste, Mando completa la misión");
      setGameMessage("¡Grogu ha llegado al final del tablero!");
      setGameOver(true);
    }
    // Condición de derrota: todas las mercancías se han recogido
    else if (cookies === 0 && eggs === 0 && frogs === 0) {
      setGameStatus("¡¡Grogu se ha comido el cargamento!! Has perdido");
      setGameMessage("Todas las mercancías han sido recogidas/comidas");
      setGameOver(true);
    }
    // En caso contrario, el juego continúa
    else {
      setGameStatus("En curso");
      setGameMessage("");
    }
  }, [position, cookies, eggs, frogs, gameOver]);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 4) + 1; // 1..4
    setDiceValue(value);
    console.log("Dado:", value);

    if (value === 4) {
      setPosition((prev) => {
        const next = prev + 1;
        console.log("Grogu avanza a posición", next);
        return next;
      });
      setGameMessage("Ha salido 4: Grogu ha avanzado una casilla.");
    } else if (value === 1) {
      setCookies((prev) => {
        const next = Math.max(0, prev - 1);
        console.log("Se ha descargado una galleta. Quedan:", next);
        return next;
      });
      setGameMessage("Ha salido 1: Se ha descargado una galleta.");
    } else if (value === 2) {
      setEggs((prev) => {
        const next = Math.max(0, prev - 1);
        console.log("Se ha descargado un huevito. Quedan:", next);
        return next;
      });
      setGameMessage("Ha salido 2: Se ha descargado un huevito.");
    } else if (value === 3) {
      setFrogs((prev) => {
        const next = Math.max(0, prev - 1);
        console.log("Se ha descargado una ranita. Quedan:", next);
        return next;
      });
      setGameMessage("Ha salido 3: Se ha descargado una ranita.");
    }

    // conservar estado "En curso" por defecto; puedes cambiar la lógica de fin de partida aquí
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
    console.log("Juego reiniciado");
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
          />
        </section>

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

export default App;
