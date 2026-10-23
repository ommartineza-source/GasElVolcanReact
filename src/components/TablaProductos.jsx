import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

// TablaProductos: recibe un array de productos y los muestra en una tabla
// con un boton "Eliminar" por fila. Avisa al padre con onEliminar(id).
// Componente presentacional: no maneja estado, solo muestra y avisa.
function TablaProductos({ productos, onEliminar }) {
  // Si no hay productos, mostramos un mensaje
  if (productos.length === 0) {
    return <p>No hay productos en el catálogo.</p>;
  }

  return (
    <Table striped bordered hover responsive>
      {/* Encabezado de la tabla */}
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Peso</th>
          <th>Acciones</th>
        </tr>
      </thead>

      {/* Cuerpo: una fila por producto */}
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            {/* Imagen del producto */}
            <td>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
              />
            </td>

            {/* Nombre */}
            <td>{producto.nombre}</td>

            {/* Precio */}
            <td>{producto.precio}</td>

            {/* Peso de la carga */}
            <td>{producto.pesoCarga}</td>

            {/* Boton eliminar */}
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                    if (window.confirm(`¿Eliminar "${producto.nombre}"?`)) {
                        onEliminar(producto.id);
                    }
                }}
                >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaProductos;