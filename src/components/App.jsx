import "../styles/App.scss";
import Header from "./Header";
import Board from "./layout/Board"


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



  return (
    <div>
      <Header />
    <main className="page">

     <Board />
    

      <section>
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
    </div>
    
  );
}

export default App;
