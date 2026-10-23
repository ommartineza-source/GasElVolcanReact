import { Link } from 'react-router-dom';
import { useState } from 'react';
import CompraExitosa from '../components/CompraExitosa.jsx';

import ItemCarrito from '../components/ItemCarrito.jsx';

// Carrito: vista del carrito de compras.
// Recibe carrito, eliminarDelCarrito y vaciarCarrito desde App.jsx.
// Muestra la lista de items, el total y los botones de finalizar/vaciar.
function Carrito({ carrito, eliminarDelCarrito, vaciarCarrito }) {
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  if (compraFinalizada) {
    return (
      <main className="compra-exitosa-main">
        <CompraExitosa />
      </main>
    );
  }

  // Si el carrito esta vacio, mostramos un mensaje y un link al catalogo
  if (carrito.length === 0) {
    return (
      <>
        <main>
          <section className="catalogo-header">
            <h1>Tu Carrito</h1>
          </section>
          <section className="carrito-container">
            <p className="carrito-vacio">Tu carrito está vacío.</p>
            <Link to="/productos" className="btn-volver">
              Ver catálogo
            </Link>
          </section>
        </main>
      </>
    );
  }

  // Calculamos el total sumando los subtotales de cada item
  const total = carrito.reduce((acc, item) => {
    const precio = parseInt(item.precio.replace(/[^0-9]/g, ''), 10);
    return acc + precio * item.cantidad;
  }, 0);
  const totalFormateado = `$${total.toLocaleString('es-CL')}`;

  // Al finalizar: mensaje de confirmacion y vaciamos el carrito
  const handleFinalizar = () => {
    setCompraFinalizada(true);
    vaciarCarrito();
  };

  return (
    <>

      <main>
        {/* Header de la pagina del carrito */}
        <section className="catalogo-header">
          <h1>Tu Carrito</h1>
          <p>Revisa los productos antes de finalizar la compra.</p>
        </section>

        {/* Contenedor del carrito: lista de items + total */}
        <section className="carrito-container">
          {/* Lista de items del carrito */}
          <div className="carrito-lista">
            {carrito.map((item) => (
              <ItemCarrito
                key={item.id}
                item={item}
                onEliminar={eliminarDelCarrito}
              />
            ))}
          </div>

          {/* Total y botones */}
          <div className="carrito-total">
            <p>
              Total: <strong>{totalFormateado}</strong>
            </p>
            <button
              type="button"
              className="btn-finalizar"
              onClick={handleFinalizar}
            >
              Finalizar compra
            </button>
            <button
              type="button"
              className="btn-vaciar"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Carrito;
