import DatoPerfil from './DatoPerfil.jsx'


export default function InformacionPerfil({ usuario, onCerrarSesion }) {
  const esEmpresa = usuario.tipoCliente === 'empresa'
  const nombre = esEmpresa
    ? usuario.nombreEmpresa
    : `${usuario.nombre || ''} ${usuario.apellido || ''}`.trim()

  return (
<section className="perfil-card" aria-labelledby="titulo-perfil">
        <div className="perfil-encabezado">
          <h2 id="titulo-perfil">Información personal</h2>
          <span className="perfil-tipo">{esEmpresa ? 'Empresa' : 'Particular'}</span>
        </div>

        <dl className="perfil-datos">
          <DatoPerfil etiqueta={esEmpresa ? 'Nombre de la empresa' : 'Nombre'}>{nombre}</DatoPerfil>
          <DatoPerfil etiqueta="Correo electrónico">{usuario.email}</DatoPerfil>
          <DatoPerfil etiqueta="Teléfono de contacto">{usuario.telefono || 'No registrado'}</DatoPerfil>
          <DatoPerfil etiqueta="Dirección de despacho">{usuario.direccion || 'No registrada'}</DatoPerfil>
        </dl>

        <div className="perfil-acciones">
          <button type="button" className="perfil-cerrar-sesion" onClick={onCerrarSesion}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 5H4v14h5M13 8l4 4-4 4M8 12h13" />
            </svg>
            Cerrar sesión
          </button>
        </div>
      </section>
  )
}
