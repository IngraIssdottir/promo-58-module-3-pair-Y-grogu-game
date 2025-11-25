import React from "react";
function Dice ({rollDice, diceValue, gameMessage,gameStatus }) {
    
    return(
        <div className="dice">
      <button onClick={rollDice}>Lanzar dado</button>
      <div className="game-status">
           {/* mostrar estado del juego, resultado del dado y mensaje */}
          {gameStatus}
          {diceValue !== null ? ` — Dado: ${diceValue}` : ""}
          {gameMessage ? ` — ${gameMessage}` : ""}
        </div>
    </div>
    )
}
export default Dice;
 