import Form from 'react-bootstrap/Form'

export default function CampoFormulario({ id, etiqueta, ...props }) {
  return (
    <Form.Group className="campo-grupo" controlId={id}>
      <Form.Label>{etiqueta}</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  )
}
