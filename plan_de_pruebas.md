# Plan de Pruebas Unitarias

**Proyecto:** Gas El Volcán — React.

**Componentes / módulos evaluados:** ControlCantidad, ItemCarrito, operaciones del carrito, almacenamiento local y RutaAdmin.

**Fecha de ejecución:** 22-10-2026, zona horaria America/Santiago.

## Objetivo y alcance

Comprobar comportamientos reales de los componentes y funciones críticos: límites de cantidad, cálculo de subtotales, incorporación y eliminación de productos, correos duplicados, sesiones sin contraseña, recuperación de comentarios y acceso al Panel según la sesión y el rol.

Se implementan **14 pruebas**, distribuidas en cinco archivos. Cada `it` identifica su caso PU y contiene los pasos del patrón **AAA**:

1. **Arrange / Preparación:** crear datos ficticios, funciones mock o componentes necesarios.
2. **Act / Acción:** simular una interacción, renderizar una pantalla o ejecutar la función real.
3. **Assert / Resultado esperado:** comprobar el resultado con `expect`.

Se sigue la estructura del ejemplo de clase: `describe`, `it`, `render`, `screen`, `fireEvent` y `expect`. `vi.fn()` permite comprobar las llamadas que los componentes comunican a sus padres.

## Casos de prueba

| ID | Componente / módulo (`describe`) | Caso de prueba (`it`) | Preparación (Arrange: props, mocks) | Acción (Act: render, fireEvent, funciones) | Resultado esperado (Assert: expect) | Estado |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PU-001** | `ControlCantidad` | Ejecuta incrementar al pulsar +. | Renderizar con cantidad 2 y funciones `vi.fn()`. | Pulsar Sumar un cilindro mediante `fireEvent.click`. | Incrementar se ejecuta una vez y decrementar no se ejecuta. | **Pasa** |
| **PU-002** | `ControlCantidad` | Impide restar por debajo de 1. | Renderizar con cantidad 1 y función de decrementar mock. | Intentar pulsar Restar un cilindro. | Botón deshabilitado, ninguna llamada a decrementar y cantidad mostrada 1. | **Pasa** |
| **PU-003** | `ControlCantidad` | Impide sumar por encima de 10. | Renderizar con cantidad 10 y función de incrementar mock. | Intentar pulsar Sumar un cilindro. | Botón deshabilitado, ninguna llamada a incrementar y cantidad mostrada 10. | **Pasa** |
| **PU-004** | `ItemCarrito` | Muestra el subtotal correcto. | Crear producto ficticio con precio $10.500 y cantidad 2. | Renderizar la fila del carrito. | Se muestran $21.000 de subtotal, $10.500 c/u y x2. | **Pasa** |
| **PU-005** | `ItemCarrito` | Entrega el ID correcto al eliminar. | Renderizar producto 5kg y función `onEliminar` mock. | Pulsar Eliminar. | La función se ejecuta una vez con el ID `5kg`. | **Pasa** |
| **PU-006** | Operaciones del carrito | Añade un producto nuevo conservando los anteriores. | Crear carrito con 5kg y producto nuevo 11kg. | Ejecutar `agregarProducto` con cantidad 2. | La lista contiene ambos productos, el nuevo tiene cantidad 2 y la lista original no cambia. | **Pasa** |
| **PU-007** | Operaciones del carrito | Suma cantidades sin duplicar filas. | Crear carrito con 2 unidades de 5kg y otro producto. | Añadir otras 3 unidades de 5kg. | Quedan 5 unidades en una sola fila; el otro producto y la lista original se conservan. | **Pasa** |
| **PU-008** | Operaciones del carrito | Elimina solo el producto seleccionado. | Crear carrito con 5kg y 11kg. | Ejecutar `eliminarProducto` con `5kg`. | Solo queda 11kg y la lista original no cambia. | **Pasa** |
| **PU-009** | Storage | Rechaza un correo duplicado sin distinguir mayúsculas. | Registrar una cuenta ficticia y contar las cuentas existentes. | Intentar guardar el mismo correo en mayúsculas. | Devuelve `false`, no aumenta el número de cuentas y el correo aparece una sola vez. | **Pasa** |
| **PU-010** | Storage | Guarda y recupera sesión sin contraseña. | Crear usuario ficticio con nombre, correo, rol y contraseña. | Ejecutar `guardarSesion` y `obtenerSesion`. | Se recuperan nombre, correo y rol; la contraseña no se almacena en la sesión y el objeto original se conserva. | **Pasa** |
| **PU-011** | Storage | Recupera comentarios separados por producto. | Guardar comentarios ficticios para 5kg y 11kg. | Añadir otro comentario a 5kg y volver a leer ambas listas. | 5kg conserva los dos comentarios, con el nuevo primero; 11kg conserva solo el suyo; 15kg devuelve una lista vacía. | **Pasa** |
| **PU-012** | `RutaAdmin` | Redirige a Login sin sesión. | Preparar `MemoryRouter` en `/panel`, con usuario `null` y destinos de prueba. | Renderizar las rutas usando el componente real `RutaAdmin`. | Aparece Login y no aparece el contenido protegido. | **Pasa** |
| **PU-013** | `RutaAdmin` | Redirige al inicio a un usuario normal. | Preparar las mismas rutas con `rol: 'usuario'`. | Renderizar el escenario desde `/panel`. | Aparece Inicio y no aparece el contenido protegido. | **Pasa** |
| **PU-014** | `RutaAdmin` | Permite entrar al administrador. | Preparar las mismas rutas con `rol: 'admin'`. | Renderizar el escenario desde `/panel`. | Aparece el contenido protegido, sin Login ni Inicio. | **Pasa** |

## Archivos y configuración

| Archivo | Casos |
| :--- | :--- |
| `src/components/ControlCantidad.test.jsx` | PU-001 a PU-003 |
| `src/components/ItemCarrito.test.jsx` | PU-004 a PU-005 |
| `src/data/carrito.test.js` | PU-006 a PU-008 |
| `src/data/storage.test.js` | PU-009 a PU-011 |
| `src/routes/RutaAdmin.test.jsx` | PU-012 a PU-014 |

- `vite.config.js`: usa el entorno `jsdom` y carga `src/setupTests.js`.
- `src/setupTests.js`: activa las comprobaciones de jest-dom para Vitest y limpia componentes y almacenamiento después de cada prueba.
- Los datos son ficticios. El `localStorage` de las pruebas pertenece a jsdom y no modifica el almacenamiento del navegador habitual.
- Las redirecciones se prueban con `MemoryRouter`; no se sustituyen los permisos de `RutaAdmin` por un mock.
- Los archivos `.test.js` y `.test.jsx` contienen el código ejecutable; este documento describe los casos y registra su última ejecución. Su estado no se actualiza automáticamente.

## Ejecución

Instalar las dependencias del proyecto, si no están instaladas:

```bash
npm install
```

Abrir Vitest en modo de seguimiento:

```bash
npm test
```

Ejecutar todas las pruebas una sola vez:

```bash
npm test -- --run
```

Para ver los nombres de todos los casos:

```bash
npm test -- --run --reporter=verbose
```

## Resultado de la ejecución

Comando ejecutado: `npm test -- --run`.

- Archivos de prueba: **5 aprobados de 5**.
- Pruebas: **14 aprobadas de 14**.
- Pruebas fallidas: **0**.

Estas pruebas no equivalen a una auditoría completa de la aplicación. El aspecto visual, la adaptación a móviles y la fidelidad al HTML original se comprueban por separado en el navegador. No se simulan pagos reales ni se certifica seguridad de un backend.
