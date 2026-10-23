import { Navigate } from 'react-router-dom'

export default function RutaAdmin({ usuario, children }) {
  if (!usuario) {
    return <Navigate to="/login" replace />
  }

  if (usuario.rol !== 'admin') {
    return <Navigate to="/" replace />
  }

  return children
}
