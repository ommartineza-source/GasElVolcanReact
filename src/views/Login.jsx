import { Link, useNavigate } from 'react-router-dom'
import FormularioLogin from '../components/FormularioLogin.jsx'
import { guardarSesion, obtenerSesion, obtenerUsuarios } from '../data/storage'

export default function Login({ onIniciarSesion }) {
  const navigate = useNavigate()

  function validarLogin(email, password) {
    if (!email || !password) {
      return 'Completa el correo y la contraseña.'
    }

    return null
  }

  function iniciarSesion(event) {
    event.preventDefault()

    const datos = new FormData(event.currentTarget)
    const email = datos.get('email').trim().toLowerCase()
    const password = datos.get('password')

    const error = validarLogin(email, password)

    if (error) {
      alert(error)
      return
    }

    try {
      const usuario = obtenerUsuarios().find(
        (registrado) => registrado.email.toLowerCase() === email
      )

      if (!usuario || usuario.password !== password) {
        alert('Correo o contraseña incorrectos.')
        return
      }

      guardarSesion(usuario)
      onIniciarSesion(obtenerSesion())
      navigate('/mi-perfil', { replace: true })
    } catch {
      alert('No se pudo iniciar sesión. Inténtalo nuevamente.')
    }
  }

  return (
    <main className="login-main">
      <section className="login-card">
        <span className="eyebrow">Tu espacio · Gas El Volcán</span>
        <h1>Qué bueno verte.</h1>
        <p className="form-intro">Inicia sesión para acceder a tu cuenta.</p>

        <FormularioLogin onEnviar={iniciarSesion} />

        <div className="login-footer-link">
          <p>
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="link-registro">Crear cuenta</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
