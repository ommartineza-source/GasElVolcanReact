import PresentacionInicio from '../components/PresentacionInicio.jsx'
import BeneficiosInicio from '../components/BeneficiosInicio.jsx'
import PresentacionEmpresa from '../components/PresentacionEmpresa.jsx'

export default function Home() {
  return (
    <main>
      {/* Presentación principal y enlace hacia el catálogo. */}
      <PresentacionInicio />

      <BeneficiosInicio />

      <PresentacionEmpresa />
    </main>
  )
}

