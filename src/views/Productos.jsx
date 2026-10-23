import GaleriaProductos from '../components/GaleriaProductos.jsx';


//Productos:vista del catalogo completo.Muestra el header de la pagina y la grilla con todos los productos.
function Productos({ productos }) {
  return (
    <>

      <main>
        {/* Header de la pagina: titulo y descripcion del catalogo */}
        <section className="catalogo-header">
          <span className="eyebrow">Energía para cada día</span>
          <h1>Un formato para cada hogar.</h1>
          <p>
            Selecciona el formato ideal para tu hogar o negocio con despacho
            directo en Chillán y comunas aledañas.
          </p>
        </section>

        {/* Grilla con todos los productos del catalogo */}
        <GaleriaProductos productos={productos} />
      </main>

    </>
  );
}

export default Productos;
