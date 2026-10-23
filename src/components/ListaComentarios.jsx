import TarjetaComentario from './TarjetaComentario.jsx'

// ListaComentarios: recibe un array de comentarios y los muestra en pantalla.
// Si el array esta vacio, muestra un mensaje invitando a comentar.
// Componente presentacional: no maneja estado, solo muestra lo que recibe.
function ListaComentarios({ comentarios }) {
  // Si no hay comentarios, mostramos un mensaje
  if (comentarios.length === 0) {
    return (
      <div className="lista-comentarios">
        <p className="sin-comentarios">
          No hay comentarios aún. ¡Sé el primero en opinar!
        </p>
      </div>
    );
  }

  // Si hay comentarios, los mapeamos
  return (
    <div className="lista-comentarios">
      {comentarios.map((comentario, index) => (
        <TarjetaComentario key={index} comentario={comentario} />
      ))}
    </div>
  );
}

export default ListaComentarios;

