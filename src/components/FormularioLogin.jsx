import CampoFormulario from './CampoFormulario.jsx'
import Form from 'react-bootstrap/Form'

export default function FormularioLogin({ onEnviar }) {
  return (
<Form className="form-login" onSubmit={onEnviar}>
          <CampoFormulario id="email" etiqueta="Correo electrónico"
              type="email"
              name="email"
              placeholder="ejemplo@correo.com"
              autoComplete="username"
              required
            />

          <CampoFormulario id="password" etiqueta="Contraseña"
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />

          <button type="submit" className="btn-ingresar">
            Ingresar a mi cuenta
          </button>
        </Form>
  )
}
