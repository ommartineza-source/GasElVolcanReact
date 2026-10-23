import ControlCantidad from './ControlCantidad.jsx'

export default function DetalleProducto({ producto, cantidad, incrementar, decrementar, totalFormateado, agregado, agregarAlCarrito }) {
  return (
<section className="detalle-producto-container">
          {/* Imagen del producto */}
          <div className="galeria-producto">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="imagen-principal"
            />
          </div>

          {/* Informacion del producto */}
          <div className="info-producto">
            <span className="eyebrow">Gas licuado · Despacho local</span>
            <h1>{producto.nombre}</h1>
            <p className="precio">{producto.precio}</p>

            {/* Descripcion larga (la corta se usa en el catalogo) */}
            <div className="descripcion">
              <h2>Descripción detallada</h2>
              <p>{producto.descripcionLarga}</p>
            </div>

            {/* Especificaciones tecnicas del producto */}
            <div className="especificaciones">
              <h2>Información adicional</h2>
              <ul>
                <li>
                  <strong>Contenido:</strong> Gas Licuado de Petróleo (GLP)
                </li>
                <li>
                  <strong>Peso de la carga:</strong> {producto.pesoCarga}
                </li>
                <li>
                  <strong>Tipo de válvula:</strong> Estándar de acople rápido
                </li>
                <li>
                  <strong>Despacho:</strong> Chillán y sectores aledaños (Menos de 45 minutos)
                </li>
              </ul>
            </div>

            {/* Acciones de compra: cantidad, total y boton */}
            <div className="acciones-compra">
              <ControlCantidad
                cantidad={cantidad}
                onIncrementar={incrementar}
                onDecrementar={decrementar}
              />

              <div className="precio-total-box">
                <span className="label-total">Total:</span>
                <span className="monto-total">{totalFormateado}</span>
              </div>

              <button
                type="button"
                className="btn-ingresar btn-agregar-carro"
                onClick={agregarAlCarrito}
                style={agregado ? { backgroundColor: '#1b4d1f' } : {}}
              >
                {agregado ? '✔ ¡Añadido al Carro!' : '🛒 Añadir al Carro'}
              </button>
            </div>
          </div>
        </section>
  )
}
