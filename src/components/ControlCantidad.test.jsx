import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ControlCantidad from './ControlCantidad'

describe('ControlCantidad', () => {
  it('PU-001: ejecuta la función de incrementar al pulsar +', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const incrementarMock = vi.fn()
    const decrementarMock = vi.fn()
    render(<ControlCantidad cantidad={2} onIncrementar={incrementarMock} onDecrementar={decrementarMock} />)

    // 2. ACCIÓN (ACT)
    fireEvent.click(screen.getByRole('button', { name: 'Sumar un cilindro' }))

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(incrementarMock).toHaveBeenCalledTimes(1)
    expect(decrementarMock).not.toHaveBeenCalled()
  })

  it('PU-002: deshabilita restar cuando la cantidad es 1', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const decrementarMock = vi.fn()
    render(<ControlCantidad cantidad={1} onIncrementar={vi.fn()} onDecrementar={decrementarMock} />)
    const botonRestar = screen.getByRole('button', { name: 'Restar un cilindro' })

    // 2. ACCIÓN (ACT)
    fireEvent.click(botonRestar)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(botonRestar).toBeDisabled()
    expect(decrementarMock).not.toHaveBeenCalled()
    expect(screen.getByRole('spinbutton', { name: 'Cantidad de cilindros' })).toHaveValue(1)
  })

  it('PU-003: deshabilita sumar cuando la cantidad es 10', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const incrementarMock = vi.fn()
    render(<ControlCantidad cantidad={10} onIncrementar={incrementarMock} onDecrementar={vi.fn()} />)
    const botonSumar = screen.getByRole('button', { name: 'Sumar un cilindro' })

    // 2. ACCIÓN (ACT)
    fireEvent.click(botonSumar)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(botonSumar).toBeDisabled()
    expect(incrementarMock).not.toHaveBeenCalled()
    expect(screen.getByRole('spinbutton', { name: 'Cantidad de cilindros' })).toHaveValue(10)
  })
})
