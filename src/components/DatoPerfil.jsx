export default function DatoPerfil({ etiqueta, children }) {
  return (
    <div>
      <dt>{etiqueta}</dt>
      <dd>{children}</dd>
    </div>
  )
}
