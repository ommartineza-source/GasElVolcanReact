

export default function PresentacionEmpresa() {
  return (
<section className="presentacion">
        <article className="detalle-empresa">
          <span className="eyebrow">Somos Gas El Volcán</span>
          <h2>Calidez que nos une.</h2>
          <p>
            En Distribuidora de Gas El Volcán abastecemos a la comuna de Chillán
            y sectores aledaños con formatos de 5kg, 11kg y 15kg. Nuestro compromiso
            es mantener tu hogar siempre calefaccionado y con energía.
          </p>
        </article>

        <article className="video-seccion">
          <span className="eyebrow">Cerca de ti</span>
          <h2>Conoce nuestro reparto.</h2>
          {/* controls muestra los controles nativos; preload limita la precarga. */}
          <video controls preload="metadata">
            <source src="/videos/gas.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos HTML5.
          </video>
        </article>
      </section>
  )
}
