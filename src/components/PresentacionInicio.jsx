import { Link } from 'react-router-dom'
import imagenChillan from '../assets/img/chillan_gas.jpg'

export default function PresentacionInicio() {
  return (
<section className="hero">
        <div className="hero-contenido">
          <span className="eyebrow">Chillán · Región de Ñuble</span>
          <h1>
            La energía de<br />tu hogar, <span>siempre cerca.</span>
          </h1>
          <p>
            Gas licuado a domicilio, con la calidez y confianza de quienes
            te acompañan desde 1998.
          </p>
          <Link to="/productos" className="btn">
            Explorar cilindros <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-visual">
          <img
            src={imagenChillan}
            alt="Paisaje de la región de Ñuble"
            className="imagen-paisaje"
          />
          <div className="hero-ubicacion">
            <strong>De nuestra tierra a tu hogar.</strong>
            <span>Reparto en Chillán y sectores aledaños</span>
          </div>
        </div>
      </section>
  )
}
