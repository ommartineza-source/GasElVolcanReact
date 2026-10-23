import InformacionPerfil from '../components/InformacionPerfil.jsx'

export default function MiPerfil({ usuario, onCerrarSesion }) {

  return (
    <main className="perfil-main">
      <div className="perfil-presentacion">
        <h1>Mi perfil</h1>
        <p>Los datos de tu cuenta.</p>
      </div>

      <InformacionPerfil usuario={usuario} onCerrarSesion={onCerrarSesion} />
    </main>
  )
}
