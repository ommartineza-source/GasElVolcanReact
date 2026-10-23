import { Link } from 'react-router-dom'

export default function AccesoCuenta({ usuario }) {
  const nombreVisible = usuario
    ? usuario.tipoCliente === 'empresa'
      ? usuario.nombreEmpresa
      : (usuario.nombre || '').split(' ')[0]
    : ''

  return (
<Link to={usuario ? '/mi-perfil' : '/login'} className="acceso-cuenta">
        <svg
          className="icono-usuario"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span className="texto-cuenta">
          <span className="saludo">Hola,{usuario ? ` ${nombreVisible}` : ''}</span>
          <span className="accion">
            {usuario ? 'Mi perfil' : 'Inicia sesión'}
          </span>
        </span>
      </Link>
  )
}
