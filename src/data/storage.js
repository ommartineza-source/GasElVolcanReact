// Cuentas ficticias para probar el login durante el desarrollo.
const usuariosPrueba = [
  {
    tipoCliente: 'particular',
    rol: 'usuario',
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'particular.prueba@gmail.com',
    telefono: '+56912345678',
    direccion: 'Dirección de prueba, Chillán',
    fechaNacimiento: '2000-01-15',
    password: 'Prueba123!',
  },
  {
    tipoCliente: 'empresa',
    rol: 'usuario',
    nombreEmpresa: 'Empresa de Prueba SpA',
    email: 'empresa.prueba@gmail.com',
    telefono: '+56987654321',
    direccion: 'Dirección de empresa de prueba, Chillán',
    fechaNacimiento: '1990-06-20',
    password: 'Prueba123!',
  },
  {
    tipoCliente: 'particular',
    rol: 'admin',
    nombre: 'Administrador',
    apellido: 'Prueba',
    email: 'admin.prueba@gmail.com',
    telefono: '+56912345678',
    direccion: 'Dirección de prueba, Chillán',
    fechaNacimiento: '1990-01-15',
    password: 'Prueba123!',
  },
]

export function obtenerUsuarios() {
  const usuarios = JSON.parse(
    localStorage.getItem('usuariosRegistrados') || '[]'
  )

  // Solo agrega las cuentas de prueba que todavía no estén registradas.
  const faltantes = usuariosPrueba.filter(
    (prueba) => !usuarios.some(
      (usuario) => usuario.email.toLowerCase() === prueba.email
    )
  )

  if (faltantes.length > 0) {
    usuarios.push(...faltantes)
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios))
  }

  return usuarios.map((usuario) => ({
    ...usuario,
    rol: usuario.rol || 'usuario',
  }))
}

export function guardarSesion(usuario) {
  const sesion = { ...usuario, rol: usuario.rol || 'usuario' }
  delete sesion.password
  localStorage.setItem('usuarioActivo', JSON.stringify(sesion))
}

export function obtenerSesion() {
  try {
    const sesion = JSON.parse(localStorage.getItem('usuarioActivo') || 'null')
    return sesion ? { ...sesion, rol: sesion.rol || 'usuario' } : null
  } catch {
    return null
  }
}

export function eliminarSesion() {
  localStorage.removeItem('usuarioActivo')
}

export function obtenerComentarios(idProducto) {
  try {
    const comentarios = JSON.parse(
      localStorage.getItem(`comentarios_${idProducto}`) || '[]'
    )
    return Array.isArray(comentarios) ? comentarios : []
  } catch {
    return []
  }
}

export function guardarComentario(idProducto, comentario) {
  const comentarios = [comentario, ...obtenerComentarios(idProducto)]
  localStorage.setItem(`comentarios_${idProducto}`, JSON.stringify(comentarios))
  return comentarios
}

export function guardarUsuario(usuario) {
  const usuarios = obtenerUsuarios()

  const existe = usuarios.some(
    (registrado) =>
      registrado.email.toLowerCase() === usuario.email.toLowerCase()
  )

  if (existe) {
    return false
  }

  usuarios.push(usuario)

  localStorage.setItem(
    'usuariosRegistrados',
    JSON.stringify(usuarios)
  )

  return true
}
