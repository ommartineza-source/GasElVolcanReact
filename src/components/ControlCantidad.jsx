// ControlCantidad: botones - / + y un input readonly que muestra la cantidad.
// Es un componente controlado: la cantidad y las funciones vienen del padre (Producto.jsx).
// Los limites son 1 (min) y 10 (max).
function ControlCantidad({ cantidad, onIncrementar, onDecrementar }) {
  return (
    <div className="control-cantidad">
      {/* Boton restar: se deshabilita en el minimo (1) */}
      <button
        type="button"
        className="btn-cantidad"
        aria-label="Restar un cilindro"
        onClick={onDecrementar}
        disabled={cantidad <= 1}
      >
        -
      </button>

      {/* Input readonly: muestra la cantidad actual, no se edita a mano */}
      <input
        type="number"
        aria-label="Cantidad de cilindros"
        value={cantidad}
        min="1"
        max="10"
        readOnly
      />

      {/* Boton sumar: se deshabilita en el maximo (10) */}
      <button
        type="button"
        className="btn-cantidad"
        aria-label="Sumar un cilindro"
        onClick={onIncrementar}
        disabled={cantidad >= 10}
      >
        +
      </button>
    </div>
  );
}

export default ControlCantidad;