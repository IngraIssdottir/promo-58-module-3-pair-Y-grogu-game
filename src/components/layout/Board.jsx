import Grogu from "./Grogu";

function Board({ position }) {
  return (
    <section className="board">
      {[...Array(7).keys()].map((i) => (
        <div className="cell" key={i}>
          {position === i && <Grogu />}
        </div>
      ))}
    </section>
  );
}
export default Board;

/* Array fuera del html
function Board({ position }) {
  // Creamos un array de 7 casillas
  const casillas = [...Array(7).keys()]; // [0,1,2,3,4,5,6]

  return (
    <section className="board">
      {casillas.map((i) => (
        <div className="cell" key={i}>
          {position === i && <Grogu />}
        </div>
      ))}
    </section>
  );
}
  */
