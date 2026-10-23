import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Cada prueba empieza sin componentes ni datos de la prueba anterior.
// Este localStorage pertenece a jsdom, no al navegador del usuario.
afterEach(() => {
  cleanup()
  localStorage.clear()
})
