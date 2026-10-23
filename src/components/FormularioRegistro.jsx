import CampoFormulario from './CampoFormulario.jsx'
import Form from 'react-bootstrap/Form'

export default function FormularioRegistro({ tipoCliente, setTipoCliente, onEnviar }) {
  return (
<form className="form-login" onSubmit={onEnviar}>
          <fieldset className="tipo-cliente">
            <legend>Tipo de cliente</legend>
            <Form.Check
              inline
              type="radio"
              id="cliente-particular"
              name="tipoCliente"
              label="Particular"
              value="particular"
              checked={tipoCliente === 'particular'}
              onChange={(event) => setTipoCliente(event.target.value)}
              required
            />
            <Form.Check
              inline
              type="radio"
              id="cliente-empresa"
              name="tipoCliente"
              label="Empresa"
              value="empresa"
              checked={tipoCliente === 'empresa'}
              onChange={(event) => setTipoCliente(event.target.value)}
              required
            />
          </fieldset>
          {tipoCliente === 'particular' ? (
          <div className="form-row" key="particular">
          <CampoFormulario id="nombre" etiqueta="Nombre"
              type="text"
              name="nombre"
              placeholder="Juan"
              required
            />

          <CampoFormulario id="apellido" etiqueta="Apellido"
              type="text"
              name="apellido"
              placeholder="Pérez"
              required
            />
        </div>
          ) : (
            <CampoFormulario id="nombreEmpresa" key="empresa" etiqueta="Nombre de la empresa"
                type="text"
                name="nombreEmpresa"
                placeholder="Comercial El Volcán SpA"
                required
              />
          )}

        <CampoFormulario id="email" etiqueta="Correo electrónico"
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            required
          />

        <Form.Group className="campo-grupo" controlId="telefono">
          <Form.Label>Teléfono de contacto</Form.Label>
          <div className="campo-telefono">
            <span className="prefijo-telefono">+56</span>
            <Form.Control
              type="tel"
              name="telefono"
              placeholder="912345678"
              inputMode="numeric"
              autoComplete="tel-national"
              pattern="9[0-9]{8}"
              minLength={9}
              maxLength={9}
              title="Ingresa 9 dígitos, comenzando con 9, sin espacios ni +56."
              aria-describedby="ayuda-telefono"
              required
            />
          </div>
          <Form.Text id="ayuda-telefono">
            Ingresa 9 dígitos comenzando con 9, sin espacios. El +56 ya está incluido.
          </Form.Text>
        </Form.Group>

        <CampoFormulario id="direccion" etiqueta="Dirección de despacho (Chillán / Alrededores)"
            type="text"
            name="direccion"
            placeholder="Calle, Número, Depto/Casa"
            required
          />

        <CampoFormulario id="fecha_nacimiento" etiqueta="Fecha de nacimiento"
            type="date"
            name="fecha_nacimiento"
            required
          />

        <div className="form-row">
          <CampoFormulario id="password" etiqueta="Contraseña"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />

          <CampoFormulario id="confirm_password" etiqueta="Confirmar contraseña"
              type="password"
              name="confirm_password"
              placeholder="••••••••"
              required
            />
        </div>

          <button type="submit" className="btn-ingresar">Registrarme</button>
        </form>
  )
}
