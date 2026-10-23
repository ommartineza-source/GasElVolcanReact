import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ItemCarrito from './ItemCarrito'

describe('ItemCarrito', () => {
  it('PU-004: muestra $21.000 como subtotal de dos cilindros de $10.500', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const productoMock = {
      id: '5kg', nombre: 'Cilindro de Gas 5 kg', precio: '$10.500',
      imagen: '/imagenes/cilindro-gas-normal-5-kg-1.jpg', cantidad: 2,
    }

    // 2. ACCIÓN (ACT)
    render(<ItemCarrito item={productoMock} onEliminar={vi.fn()} />)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(screen.getByText('$21.000', { exact: true })).toBeInTheDocument()
    expect(screen.getByText('$10.500 c/u', { exact: true })).toBeInTheDocument()
    expect(screen.getByText('x2', { exact: true })).toBeInTheDocument()
  })

  it('PU-005: entrega el ID del producto al pulsar Eliminar', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const productoMock = {
      id: '5kg', nombre: 'Cilindro de Gas 5 kg', precio: '$10.500',
      imagen: '/imagenes/cilindro-gas-normal-5-kg-1.jpg', cantidad: 2,
    }
    const eliminarMock = vi.fn()
    render(<ItemCarrito item={productoMock} onEliminar={eliminarMock} />)

    // 2. ACCIÓN (ACT)
    fireEvent.click(screen.getByRole('button', { name: 'Eliminar' }))

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(eliminarMock).toHaveBeenCalledTimes(1)
    expect(eliminarMock).toHaveBeenCalledWith('5kg')
  })
})
