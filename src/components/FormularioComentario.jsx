// FormularioComentario: formulario controlado para escribir y publicar un comentario.
// Recibe el texto y las funciones del padre (Producto.jsx).
// No maneja estado propio: todo el estado vive en el padre.
function FormularioComentario({ texto, onCambiarTexto, onEnviar }) {
  return (
    <form className="form-comentario" onSubmit={onEnviar}>
      {/* Campo de texto para el comentario */}
      <div className="campo-grupo">
        <label htmlFor="textoComentario">Escribe tu comentario</label>
        <textarea
          id="textoComentario"
          rows="3"
          placeholder="¿Qué te pareció el servicio o el producto?"
          value={texto}
          onChange={(e) => onCambiarTexto(e.target.value)}
          required
        />
      </div>

      {/* Boton para publicar el comentario */}
      <button type="submit" className="btn-ingresar">
        Publicar Comentario
      </button>
    </form>
  );
}

export default FormularioComentario;