import { describe, it, expect } from 'vitest'
import { agregarProducto, eliminarProducto } from './carrito'

describe('Carrito: operaciones de la lista', () => {
  it('PU-006: añade un producto nuevo sin perder los anteriores', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const anterior = { id: '5kg', nombre: 'Gas 5 kg', precio: '$10.500', imagen: 'gas5.jpg', cantidad: 1 }
    const producto = { id: '11kg', nombre: 'Gas 11 kg', precio: '$17.500', imagen: 'gas11.jpg' }
    const carrito = [anterior]

    // 2. ACCIÓN (ACT)
    const resultado = agregarProducto(carrito, producto, 2)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(resultado).toEqual([anterior, { ...producto, cantidad: 2 }])
    expect(carrito).toEqual([anterior])
  })

  it('PU-007: suma cantidades de un producto existente sin duplicar su fila', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const producto = { id: '5kg', nombre: 'Gas 5 kg', precio: '$10.500', imagen: 'gas5.jpg' }
    const otro = { id: '11kg', nombre: 'Gas 11 kg', cantidad: 1 }
    const carrito = [{ ...producto, cantidad: 2 }, otro]

    // 2. ACCIÓN (ACT)
    const resultado = agregarProducto(carrito, producto, 3)

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(resultado).toHaveLength(2)
    expect(resultado[0]).toEqual({ ...producto, cantidad: 5 })
    expect(resultado[1]).toEqual(otro)
    expect(carrito[0].cantidad).toBe(2)
  })

  it('PU-008: elimina únicamente el producto seleccionado', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const primero = { id: '5kg', cantidad: 2 }
    const segundo = { id: '11kg', cantidad: 3 }
    const carrito = [primero, segundo]

    // 2. ACCIÓN (ACT)
    const resultado = eliminarProducto(carrito, '5kg')

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(resultado).toEqual([segundo])
    expect(carrito).toEqual([primero, segundo])
  })
})
