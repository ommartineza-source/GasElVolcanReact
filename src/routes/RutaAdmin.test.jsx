import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import RutaAdmin from './RutaAdmin'

// Destinos pequeños de prueba para comprobar las redirecciones reales.
function escenarioRutas(usuario) {
  return (
    <MemoryRouter initialEntries={['/panel']}>
      <Routes>
        <Route path="/" element={<h1>Inicio de prueba</h1>} />
        <Route path="/login" element={<h1>Login de prueba</h1>} />
        <Route path="/panel" element={
          <RutaAdmin usuario={usuario}>
            <h1>Panel protegido de prueba</h1>
          </RutaAdmin>
        } />
      </Routes>
    </MemoryRouter>
  )
}

describe('RutaAdmin', () => {
  it('PU-012: redirige a Login cuando no hay sesión', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const pantalla = escenarioRutas(null)

    // 2. ACCIÓN (ACT)
    render(pantalla)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(screen.getByRole('heading', { name: 'Login de prueba' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Panel protegido de prueba' })).not.toBeInTheDocument()
  })

  it('PU-013: redirige al inicio a un usuario sin rol admin', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const pantalla = escenarioRutas({ nombre: 'Ana', rol: 'usuario' })

    // 2. ACCIÓN (ACT)
    render(pantalla)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(screen.getByRole('heading', { name: 'Inicio de prueba' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Panel protegido de prueba' })).not.toBeInTheDocument()
  })

  it('PU-014: muestra el contenido protegido al administrador', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const pantalla = escenarioRutas({ nombre: 'Administrador', rol: 'admin' })

    // 2. ACCIÓN (ACT)
    render(pantalla)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(screen.getByRole('heading', { name: 'Panel protegido de prueba' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Login de prueba' })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Inicio de prueba' })).not.toBeInTheDocument()
  })
})
