// ItemCarrito: muestra una fila del carrito (imagen, nombre, precio, cantidad, subtotal y boton eliminar).
// Componente presentacional: recibe el item y onEliminar, no maneja estado.
function ItemCarrito({ item, onEliminar }) {
  // Calculamos el subtotal a partir del precio unitario (string -> numero)
  const precioNumerico = parseInt(item.precio.replace(/[^0-9]/g, ''), 10);
  const subtotal = precioNumerico * item.cantidad;
  const subtotalFormateado = `$${subtotal.toLocaleString('es-CL')}`;

  return (
    <div className="item-carrito">
      {/* Imagen del producto */}
      <img
        src={item.imagen}
        alt={item.nombre}
        className="item-carrito-imagen"
      />

      {/* Nombre y precio unitario */}
      <div className="item-carrito-info">
        <h3>{item.nombre}</h3>
        <p className="item-carrito-precio">{item.precio} c/u</p>
      </div>

      {/* Cantidad */}
      <div className="item-carrito-cantidad">
        <span>x{item.cantidad}</span>
      </div>

      {/* Subtotal (precio * cantidad) */}
      <div className="item-carrito-subtotal">
        <strong>{subtotalFormateado}</strong>
      </div>

      {/* Boton eliminar del carrito */}
      <button
        type="button"
        className="item-carrito-eliminar"
        onClick={() => onEliminar(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default ItemCarrito;