import { Link } from 'react-router-dom'
import { useState } from 'react'

import { guardarUsuario } from '../data/storage'

import FormularioRegistro from '../components/FormularioRegistro.jsx'


export default function Register() {
  const [tipoCliente, setTipoCliente] = useState('particular')

function validarUsuario(usuario, confirmarPassword) {
  if (!['particular', 'empresa'].includes(usuario.tipoCliente)) {
    return 'Selecciona Particular o Empresa como tipo de cliente.'
  }

  const regexNombreApellido =
    /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+( [a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]+)*$/

  if (usuario.tipoCliente === 'particular') {
    if (!regexNombreApellido.test(usuario.nombre)) {
      return 'El nombre es obligatorio y solo debe contener letras y espacios entre palabras.'
    }

    if (!regexNombreApellido.test(usuario.apellido)) {
      return 'El apellido es obligatorio y solo debe contener letras y espacios entre palabras.'
    }
  } else if (!usuario.nombreEmpresa) {
    return 'El nombre de la empresa es obligatorio.'
  }

  const regexEmail =
    /^[a-zA-Z0-9._%+-]+@(duocuc\.cl|gmail\.com|hotmail\.com)$/i

  if (!regexEmail.test(usuario.email)) {
    return 'El correo debe ser @duocuc.cl, @gmail.com o @hotmail.com.'
  }

  if (!/^\+569[0-9]{8}$/.test(usuario.telefono)) {
    return 'Ingresa un celular chileno de 9 dígitos que comience con 9.'
  }

  if (!usuario.direccion) {
    return 'La dirección de despacho es obligatoria.'
  }

  if (!usuario.fechaNacimiento) {
    return 'La fecha de nacimiento es obligatoria.'
  }

  const hoy = new Date()
  const [anio, mes, dia] = usuario.fechaNacimiento.split('-').map(Number)

  let edad = hoy.getFullYear() - anio

  const mesActual = hoy.getMonth() + 1
  const diaActual = hoy.getDate()

  if (
    mesActual < mes ||
    (mesActual === mes && diaActual < dia)
  ) {
    edad--
  }

  if (edad < 18) {
    return 'Debes tener al menos 18 años para registrarte.'
  }

  if (usuario.password.length < 6) {
    return 'La contraseña debe tener al menos 6 caracteres.'
  }

  if (!/[A-Z]/.test(usuario.password)) {
    return 'La contraseña debe incluir al menos una letra mayúscula.'
  }

  const regexSimbolo = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/

  if (!regexSimbolo.test(usuario.password)) {
    return 'La contraseña debe incluir al menos un símbolo, como @, #, $ o !.'
  }

  if (usuario.password !== confirmarPassword) {
    return 'Las contraseñas no coinciden.'
  }

  return null
}

function registrar(event) {
  event.preventDefault()

  const formulario = event.currentTarget
  const datos = new FormData(formulario)

  const usuario = {
    tipoCliente,
    rol: 'usuario',
    email: datos.get('email').trim().toLowerCase(),
    telefono: `+56${datos.get('telefono').trim()}`,
    direccion: datos.get('direccion').trim(),
    fechaNacimiento: datos.get('fecha_nacimiento'),
    password: datos.get('password'),
  }

  if (tipoCliente === 'particular') {
    usuario.nombre = datos.get('nombre').trim()
    usuario.apellido = datos.get('apellido').trim()
  } else {
    usuario.nombreEmpresa = datos.get('nombreEmpresa').trim()
  }

  const confirmarPassword = datos.get('confirm_password')

  const error = validarUsuario(usuario, confirmarPassword)

  if (error) {
    alert(error)
    return
  }

  try {
    const guardado = guardarUsuario(usuario)

    if (!guardado) {
      alert('Ese correo ya está registrado.')
      return
    }

    alert('Usuario registrado correctamente.')
    formulario.reset()
    setTipoCliente('particular')
  } catch {
    alert('No se pudieron guardar los datos. Inténtalo nuevamente.')
  }
}


  return (
    <main className="login-main">
      <section className="login-card registro-card">
        <span className="eyebrow">Bienvenido a Gas El Volcán</span>
        <h1>Comienza por aquí.</h1>
        <p className="form-intro">Crea tu cuenta y siéntete como en casa.</p>

        <FormularioRegistro tipoCliente={tipoCliente} setTipoCliente={setTipoCliente} onEnviar={registrar} />

        <div className="login-footer-link">
          <p>¿Ya tienes una cuenta? <Link to="/login" className="link-registro">Iniciar sesión</Link></p>
        </div>
      </section>
    </main>
  )
}
