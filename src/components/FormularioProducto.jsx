import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// FormularioProducto: formulario del Panel para crear un producto nuevo.
// Captura nombre, precio, descripcion corta, descripcion larga y peso, y avisa al padre con onAgregar.
// Usa React Bootstrap (formulario complejo de 5 campos).
// No pide imagen: el padre asigna la imagen generica.
function FormularioProducto({ onAgregar }) {
  // Un solo estado con objeto para los 5 campos del formulario
  //1 objeto y no 4 useState: los campos están relacionados y se actualizan juntos (al enviar). asi es más limpio y más fácil de resetear
  const [datos, setDatos] = useState({
    nombre: '',
    precio: '',
    descripcionCorta: '',
    descripcionLarga: '',
    pesoCarga: '',
  });

  // Actualiza un campo del estado sin perder los demas
  const cambiarCampo = (campo, valor) => {
    setDatos({
      ...datos,
      [campo]: valor,
    });
  };

  // Al enviar: previene recarga, valida que no este vacio, avisa al padre y resetea
  const manejarEnvio = (e) => {
    e.preventDefault();

    // Validacion minima: todos los campos deben tener texto
    if (
      !datos.nombre.trim() ||
      !datos.precio.trim() ||
      !datos.descripcionCorta.trim() ||
      !datos.descripcionLarga.trim() ||
      !datos.pesoCarga.trim()
    ) {
      return;
    }

    // Avisamos al padre con los datos del producto nuevo
    onAgregar({
      nombre: datos.nombre.trim(),
      precio: datos.precio.trim(),
      descripcionCorta: datos.descripcionCorta.trim(),
      descripcionLarga: datos.descripcionLarga.trim(),
      pesoCarga: datos.pesoCarga.trim(),
    });

    // Reseteamos el formulario
    setDatos({
      nombre: '',
      precio: '',
      descripcionCorta: '',
      descripcionLarga: '',
      pesoCarga: '',
    });
  };

  return (
    <Form onSubmit={manejarEnvio}>
      {/* Campo: nombre del producto */}
      <Form.Group className="mb-3" controlId="prodNombre">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Cilindro de Gas Licuado 45 Kg"
          value={datos.nombre}
          onChange={(e) => cambiarCampo('nombre', e.target.value)}
          required
        />
      </Form.Group>

      {/* Campo: precio */}
      <Form.Group className="mb-3" controlId="prodPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="Ej: 50000"
          value={datos.precio}
          onChange={(e) => cambiarCampo('precio', e.target.value)}
          required
        />
        <Form.Text className="text-muted">
            Ingresa solo números (ej: 10500 → $10.500).
        </Form.Text>
      </Form.Group>

      {/* Campo: descripcion corta (para el catalogo) */}
      <Form.Group className="mb-3" controlId="prodDescripcionCorta">
        <Form.Label>Descripción corta (catálogo)</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Descripción breve para el catálogo..."
          value={datos.descripcionCorta}
          onChange={(e) => cambiarCampo('descripcionCorta', e.target.value)}
          required
        />
      </Form.Group>

      {/* Campo: descripcion larga (para el detalle) */}
      <Form.Group className="mb-3" controlId="prodDescripcionLarga">
        <Form.Label>Descripción larga (detalle)</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Descripción completa para el detalle del producto..."
          value={datos.descripcionLarga}
          onChange={(e) => cambiarCampo('descripcionLarga', e.target.value)}
          required
        />
      </Form.Group>

      {/* Campo: peso de la carga, q su numero se usara como id */}
      <Form.Group className="mb-3" controlId="prodPeso">
        <Form.Label>Peso de la carga en Kg</Form.Label>
        <Form.Control
        type="number"
        min="1"
        placeholder="Ej: 45"
        value={datos.pesoCarga}
        onChange={(e) => cambiarCampo('pesoCarga', e.target.value)}
        required
        />
        <Form.Text className="text-muted">
            Este número se usará como ID único del producto (ej: 45 → id: 45kg).
        </Form.Text>
     </Form.Group>

      {/* Boton de envio */}
      <Button variant="primary" type="submit">
        Agregar producto
      </Button>
    </Form>
  );
}

export default FormularioProducto;