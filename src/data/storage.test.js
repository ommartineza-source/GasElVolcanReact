import { describe, it, expect } from 'vitest'
import {
  guardarUsuario, obtenerUsuarios, guardarSesion, obtenerSesion,
  guardarComentario, obtenerComentarios,
} from './storage'

describe('Storage: usuarios, sesión y comentarios', () => {
  it('PU-009: rechaza un correo duplicado sin distinguir mayúsculas', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const usuario = { nombre: 'Ana', email: 'ana.pruebas@gmail.com', password: 'Prueba123!' }
    guardarUsuario(usuario)
    const cantidadAnterior = obtenerUsuarios().length

    // 2. ACCIÓN (ACT)
    const resultado = guardarUsuario({ ...usuario, email: 'ANA.PRUEBAS@GMAIL.COM' })

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(resultado).toBe(false)
    expect(obtenerUsuarios()).toHaveLength(cantidadAnterior)
    expect(obtenerUsuarios().filter((cuenta) => cuenta.email.toLowerCase() === usuario.email)).toHaveLength(1)
  })

  it('PU-010: guarda y recupera una sesión sin incluir la contraseña', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const usuario = { nombre: 'Ana', email: 'ana.pruebas@gmail.com', rol: 'usuario', password: 'Prueba123!' }

    // 2. ACCIÓN (ACT)
    guardarSesion(usuario)
    const sesion = obtenerSesion()
    const datosGuardados = JSON.parse(localStorage.getItem('usuarioActivo'))

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(sesion).toEqual({ nombre: 'Ana', email: 'ana.pruebas@gmail.com', rol: 'usuario' })
    expect(datosGuardados).not.toHaveProperty('password')
    expect(usuario.password).toBe('Prueba123!')
  })

  it('PU-011: recupera los comentarios sin mezclarlos entre productos', () => {
    // 1. PREPARACIÓN (ARRANGE)
    const anterior = { autor: 'Ana', mensaje: 'Primer comentario', fecha: '22-10-2026' }
    const nuevo = { autor: 'Juan', mensaje: 'Segundo comentario', fecha: '22-10-2026' }
    const otroProducto = { autor: 'Empresa', mensaje: 'Comentario de 11 kg', fecha: '22-10-2026' }
    guardarComentario('5kg', anterior)
    guardarComentario('11kg', otroProducto)

    // 2. ACCIÓN (ACT)
    guardarComentario('5kg', nuevo)
    const comentarios5kg = obtenerComentarios('5kg')
    const comentarios11kg = obtenerComentarios('11kg')

    // 3. RESULTADO ESPERADO (ASSERT)
    expect(comentarios5kg).toEqual([nuevo, anterior])
    expect(comentarios11kg).toEqual([otroProducto])
    expect(obtenerComentarios('15kg')).toEqual([])
  })
})
