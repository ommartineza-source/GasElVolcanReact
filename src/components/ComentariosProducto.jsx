import FormularioComentario from './FormularioComentario.jsx'
import ListaComentarios from './ListaComentarios.jsx'

export default function ComentariosProducto({ textoComentario, setTextoComentario, agregarComentario, comentarios }) {
  return (
<section className="seccion-comentarios">
          <h2>Opiniones y Comentarios de Clientes</h2>
          <FormularioComentario
            texto={textoComentario}
            onCambiarTexto={setTextoComentario}
            onEnviar={agregarComentario}
          />
          <ListaComentarios comentarios={comentarios} />
        </section>
  )
}
