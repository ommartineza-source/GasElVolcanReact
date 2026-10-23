import { Link } from 'react-router-dom'
import AccesoCuenta from './AccesoCuenta.jsx'
import AccesoCarrito from './AccesoCarrito.jsx'

export default function Header({ pagina, usuario, cantidadCarrito = 0 }) {

  return (
    <header>
      <Link className="logo" to="/" aria-label="Gas El Volcán, inicio">
        <img
          src="/imagenes/logo-header.png"
          alt="Gas El Volcán"
          className="imagen-logo"
        />
      </Link>

      <nav aria-label="Navegación principal">
        <ul>
          <li>
            {/* aria-current identifica la página activa para accesibilidad y CSS. */}
            <Link to="/" aria-current={pagina === '/' ? 'page' : undefined}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/productos"
              aria-current={pagina === '/productos' ? 'page' : undefined}
            >
              Catálogo
            </Link>
          </li>
          {usuario?.rol === 'admin' && (
            <li>
              <Link
                to="/panel"
                aria-current={pagina === '/panel' ? 'page' : undefined}
              >
                Panel
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="acciones-header">
        <AccesoCarrito cantidad={cantidadCarrito} pagina={pagina} />
        <AccesoCuenta usuario={usuario} />
      </div>
    </header>
  )
}
