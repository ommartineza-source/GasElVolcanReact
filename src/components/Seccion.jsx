// Seccion: contenedor de <section> con <h2> y contenido debajo.
// Usar solo cuando la seccion tenga esa estructura (h2 + children).
// Para secciones con h1 o sin titulo, usar <section> directo en la view.
function Seccion({ id, titulo, children }) {
  return (
    <section id={id} className="seccion">
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}

export default Seccion;