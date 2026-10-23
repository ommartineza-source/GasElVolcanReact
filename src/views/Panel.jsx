import FormularioProducto from '../components/FormularioProducto.jsx';
import TablaProductos from '../components/TablaProductos.jsx';

import { imagenMascota } from '../data/productos';

// Panel: vista de administracion del catalogo.
// Permite crear productos nuevos (FormularioProducto) y eliminarlos (TablaProductos).
// Recibe productos y setProductos desde App.jsx (lifting state up).
// La proteccion de la ruta se maneja en App.jsx con RutaPrivada.
function Panel({ productos, setProductos }) {
  // Agrega un producto nuevo al array. El id se genera a partir del peso.
  const agregarProducto = (datos) => {
    // Normalizamos el peso para usarlo como id: "45 Kg" -> "45kg"
    const idNormalizado = datos.pesoCarga + 'kg';  // "45" -> "45kg";

    // Verificamos que no exista ya un producto con ese id
    const existe = productos.some((p) => p.id === idNormalizado);
    if (existe) {
      alert('Ya existe un producto con ese peso.');
      return;
    }

    const precioFormateado = `$${Number(datos.precio).toLocaleString('es-CL')}`;

    // Creamos el producto nuevo con id, imagen generica y los datos del formulario
    const nuevoProducto = {
      id: idNormalizado,
      imagen: imagenMascota,
      ...datos,
      precio: precioFormateado,
      pesoCarga: datos.pesoCarga + ' Kg',  // "45" -> "45 Kg"
    };

    // Agregamos al array con spread (no mutamos el original)
    setProductos([...productos, nuevoProducto]);
  };

  // Elimina un producto del array por su id
  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  

  return (
    <>

      <main>
        {/* Header de la pagina del panel */}
        <section className="catalogo-header">
          <span className="eyebrow">Administración</span>
          <h1>Panel de Control</h1>
          <p>Administra los productos del catálogo: crea nuevos o elimina los existentes.</p>
        </section>

        {/* Formulario para crear productos */}
        <FormularioProducto onAgregar={agregarProducto} />

        {/* Tabla con los productos existentes */}
        <TablaProductos productos={productos} onEliminar={eliminarProducto} />
      </main>

    </>
  );
}

export default Panel;
