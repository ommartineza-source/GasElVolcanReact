

export default function TarjetaComentario({ comentario }) {
  return (
<div className="tarjeta-comentario">
          {/* Encabezado: autor y fecha */}
          <div className="comentario-header">
            <strong>{comentario.autor}</strong>
            <span className="comentario-fecha">{comentario.fecha}</span>
          </div>

          {/* Mensaje del comentario */}
          <p className="comentario-texto" style={{ whiteSpace: 'pre-wrap' }}>
            {comentario.mensaje}
          </p>
        </div>
  )
}
