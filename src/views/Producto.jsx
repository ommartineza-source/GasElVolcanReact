import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerComentarios, guardarComentario } from '../data/storage';

import DetalleProducto from '../components/DetalleProducto.jsx';
import ComentariosProducto from '../components/ComentariosProducto.jsx';

// Producto: vista de detalle de un producto.
// Lee el id de la URL con useParams, busca el producto en data/productos
// y muestra su informacion + control de cantidad + precio total + boton de carrito.
function Producto({ productos, usuario, agregarAlCarrito }) {
  // Leemos el id de la ruta /producto/:id
  const { id } = useParams();

  // Reinicia el estado al cambiar de producto para no mezclar comentarios.
  return <ContenidoProducto key={id} id={id} productos={productos} usuario={usuario} onAgregarAlCarrito={agregarAlCarrito} />;
}

function ContenidoProducto({ id, productos, usuario, onAgregarAlCarrito }) {

  // Buscamos el producto que coincida con el id
  const producto = productos.find((p) => p.id === id);

  // Estados: cantidad elegida y feedback del boton "Anadir al carrito"
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);
  //formulario comentario
  const [comentarios, setComentarios] = useState(() => obtenerComentarios(id));
  const [textoComentario, setTextoComentario] = useState('')

  // Si el id no existe, mostramos un mensaje y un link para volver
  if (!producto) {
    return (
      <div className="pagina-producto">
        <main>
          <section className="detalle-producto-container">
            <p>Producto no encontrado.</p>
            <Link to="/productos" className="btn-volver">
              Volver al catalogo
            </Link>
          </section>
        </main>
      </div>
    );
  }

  // Funciones para modificar la cantidad, respetando los limites 1-10
  const incrementar = () => {
    if (cantidad < 10) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  // Calculamos el precio total a partir del precio unitario (string -> numero)
  const precioNumerico = parseInt(producto.precio.replace(/[^0-9]/g, ''), 10);
  const total = precioNumerico * cantidad;
  const totalFormateado = `$${total.toLocaleString('es-CL')}`;

  // Feedback visual del boton "Anadir al carrito"
  const agregarAlCarrito = () => {
    onAgregarAlCarrito(producto, cantidad);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  //formulario comentario
  const agregarComentario = (e) => {                            
    e.preventDefault();
    const mensaje = textoComentario.trim();
    if (!mensaje) return;
    const nombreAutor = usuario
      ? usuario.tipoCliente === 'empresa'
        ? usuario.nombreEmpresa
        : `${usuario.nombre || ''} ${usuario.apellido || ''}`.trim()
      : '';
    const nuevoComentario = {
      autor: nombreAutor || 'Anónimo',
      mensaje,
      fecha: new Date().toLocaleDateString('es-CL'),
    };
    try {
      const actualizados = guardarComentario(id, nuevoComentario);
      setComentarios(actualizados);
      setTextoComentario('');
    } catch {
      window.alert('No se pudo guardar el comentario. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="pagina-producto">

      <main>
        {/* Boton para volver al catalogo */}
        <div className="navegacion-volver">
          <Link to="/productos" className="btn-volver">
            ← Volver al Catálogo
          </Link>
        </div>

        {/* Detalle del producto */}
        <DetalleProducto producto={producto} cantidad={cantidad} incrementar={incrementar} decrementar={decrementar} totalFormateado={totalFormateado} agregado={agregado} agregarAlCarrito={agregarAlCarrito} />
        {/* Seccion de comentarios*/}
        <ComentariosProducto textoComentario={textoComentario} setTextoComentario={setTextoComentario} agregarComentario={agregarComentario} comentarios={comentarios} />
      </main>

    </div>
  );
}

export default Producto;
