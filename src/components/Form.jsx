function Form({ name, setName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ejemplo simple: mostrar en consola
    console.log("Nombre:", name);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
