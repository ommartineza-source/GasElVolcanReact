import { Link } from 'react-router-dom'

export default function MensajeNoEncontrada() {
  return (
    <section className="no-encontrada-card" aria-labelledby="titulo-no-encontrada">
      <span className="no-encontrada-codigo">404</span>
      <h1 id="titulo-no-encontrada">No encontramos esta página.</h1>
      <p>La dirección que buscas no existe o cambió.</p>
      <div className="no-encontrada-enlaces">
        <Link to="/" className="btn">Volver al inicio</Link>
        <Link to="/productos" className="btn-producto">Ver catálogo</Link>
      </div>
    </section>
  )
}
