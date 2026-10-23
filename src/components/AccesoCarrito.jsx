import { Link } from 'react-router-dom'

export default function AccesoCarrito({ cantidad, pagina }) {
  return (
    <Link
      to="/carrito"
      className="acceso-carrito"
      aria-current={pagina === '/carrito' ? 'page' : undefined}
      aria-label={`Carrito, ${cantidad} productos`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3h2l2.4 12h11.2l2-8H6" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      <span>Carrito ({cantidad})</span>
    </Link>
  )
}
