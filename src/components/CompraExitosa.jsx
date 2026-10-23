import { Link } from 'react-router-dom'

export default function CompraExitosa() {
  return (
    <section className="compra-exitosa-card" aria-labelledby="titulo-compra-exitosa">
      <svg className="compra-exitosa-icono" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="currentColor" opacity=".12" />
        <path d="m19 32 9 9 17-18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div role="status">
        <h1 id="titulo-compra-exitosa">¡Compra exitosa!</h1>
        <p>Gracias por tu pedido.</p>
      </div>
      <Link to="/" className="btn">Volver al inicio</Link>
    </section>
  )
}
