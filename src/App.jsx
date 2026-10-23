import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { obtenerSesion, eliminarSesion } from './data/storage'
import { agregarProducto, eliminarProducto } from './data/carrito'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import RutaAdmin from './routes/RutaAdmin.jsx'
import Home from './views/Home'
import Productos from './views/Productos'
import Producto from './views/Producto'
import Panel from './views/Panel'
import { productos as productosIniciales } from './data/productos'
import Register from './views/register'
import Login from './views/Login'
import MiPerfil from './views/MiPerfil'
import NoEncontrada from './views/NoEncontrada'
import Carrito from './views/Carrito'
import { useEffect, useState } from 'react'


function App() {
  const navigate = useNavigate()
  const { pathname: pagina, search } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pagina, search])


  const [usuario, setUsuario] = useState(obtenerSesion)
  const [productos, setProductos] = useState(productosIniciales)
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(producto, cantidad) {
    setCarrito((actual) => agregarProducto(actual, producto, cantidad))
  }

  function eliminarDelCarrito(id) {
    setCarrito((actual) => eliminarProducto(actual, id))
  }

  function vaciarCarrito() {
    setCarrito([])
  }

  function cerrarSesion() {
    try {
      eliminarSesion()
      setUsuario(null)
      navigate('/', { replace: true })
    } catch {
      window.alert('No se pudo cerrar la sesión. Inténtalo nuevamente.')
    }
  }

  return(
    <div className="app-layout">
    <Header
        pagina={pagina}
        usuario={usuario}
        cantidadCarrito={carrito.reduce((total, item) => total + item.cantidad, 0)}
      />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos productos={productos}/>} />
      <Route path="/producto/:id" element={<Producto productos={productos} usuario={usuario} agregarAlCarrito={agregarAlCarrito} />} />
      <Route path="/carrito" element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} vaciarCarrito={vaciarCarrito} />} />
      <Route
        path="/panel"
        element={
          <RutaAdmin usuario={usuario}>
            <Panel productos={productos} setProductos={setProductos} />
          </RutaAdmin>
        }
      />
      <Route path="*" element={<NoEncontrada />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={usuario ? <Navigate to="/mi-perfil" replace /> : <Login onIniciarSesion={setUsuario} />} />
      <Route path="/mi-perfil" element={usuario ? <MiPerfil usuario={usuario} onCerrarSesion={cerrarSesion} /> : <Navigate to="/login" replace />} />
    </Routes>
    <Footer />
    </div>
  )

}

export default App
