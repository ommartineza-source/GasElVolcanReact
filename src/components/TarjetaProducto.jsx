import { Link } from 'react-router-dom';

function TarjetaProducto({ id, imagen, nombre, nombreCatalogo, descripcionCorta, precio }) {
  return (
    <article className="tarjeta-producto">
      <img src={imagen} alt={nombre} />
      <h2>{nombreCatalogo || nombre}</h2>
      <p className="descripcion-corta">{descripcionCorta}</p>
      <p className="precio">{precio}</p>
      <Link to={`/producto/${id}`} className="btn-producto">
        Ver Detalle {/* Link evita recarga completa y mantiene el estado (carrito, sesion) */}
      </Link>
    </article>
  );
}

export default TarjetaProducto;
