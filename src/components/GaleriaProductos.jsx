import TarjetaProducto from './TarjetaProducto.jsx';

// GaleriaProductos: recibe un array de productos y renderiza una TarjetaProducto por cada uno.
// Se usa en el catalogo y en cualquier vista que necesite mostrar una grilla de productos.
function GaleriaProductos({ productos }) {
  return (
    <section className="grilla-productos">
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          id={producto.id}
          imagen={producto.imagen}
          nombre={producto.nombre}
          nombreCatalogo={producto.nombreCatalogo}
          descripcionCorta={producto.descripcionCorta}
          precio={producto.precio}
        />
      ))}
    </section>
  );
}

export default GaleriaProductos;
