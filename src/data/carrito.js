// Operaciones sobre la lista: el estado permanece en App.jsx.
export function agregarProducto(carrito, producto, cantidad) {
  const existe = carrito.some((item) => item.id === producto.id)

  if (existe) {
    return carrito.map((item) =>
      item.id === producto.id
        ? { ...item, cantidad: item.cantidad + cantidad }
        : item
    )
  }

  return [
    ...carrito,
    {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad,
    },
  ]
}

export function eliminarProducto(carrito, id) {
  return carrito.filter((item) => item.id !== id)
}
