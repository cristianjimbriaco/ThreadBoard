# Roadmap de desarrollo — ThreadBoard

Este documento registra el alcance previsto y el estado de cada sprint de ThreadBoard.

## Stack actual

### Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Jest y Supertest

### Frontend

- React
- TypeScript
- Vite
- React Flow

### Herramientas

- Git y GitHub
- Postman
- ESLint
- Prettier

---

## Sprint 0 — Preparación

**Estado:** Completado

**Objetivo:** Preparar el repositorio y el entorno técnico.

### Trabajo realizado

- Creación del repositorio.
- Estructura monorepo.
- Backend y frontend iniciales.
- Configuración de Git.
- Normalización de finales de línea.
- EditorConfig.
- `.gitignore`.
- Versión de Node.js.
- Variables de entorno de ejemplo.
- Configuración inicial de PostgreSQL y Prisma.

### Entregables

- Repositorio funcional.
- Stack técnico definido.
- Entornos backend y frontend instalables.

---

## Sprint 1 — Base del producto

**Estado:** Completado

**Objetivo:** Construir un esqueleto funcional con persistencia y un canvas interactivo.

### Backend completado

- Entidades Board, Node, Scene, Theory y Connection.
- Migraciones y cliente de Prisma.
- Conexión a PostgreSQL.
- Endpoints principales.
- Validación global de DTO.
- Validación de UUID.
- Reglas de creación y consistencia de dominio.
- Manejo de registros inexistentes.
- Prevención de conexiones inválidas o duplicadas.
- Configuración de CORS y variables de entorno.
- Compilación de producción.
- Cierre controlado de Prisma y PostgreSQL.
- Pruebas unitarias.
- Pruebas end-to-end.
- Colección de Postman verificada.

### Frontend completado

- Layout principal.
- Sidebar.
- Canvas mediante React Flow.
- Nodos mockeados de escena y teoría.
- Arrastre de nodos.
- Zoom.
- Pan.
- Controles de navegación.
- Selección visual.
- Configuración de ESLint y Prettier.
- Compilación de producción.

### Entregables

- Tablero visible.
- Nodos movibles.
- Backend con datos persistidos.
- API verificable mediante Postman.
- Base automatizada de pruebas.

### Limitaciones conocidas

- Los nodos del frontend todavía son temporales.
- El frontend todavía no consume la API.
- Las posiciones movidas en el canvas no se guardan.
- Las conexiones todavía no se dibujan en el frontend.
- No existe autenticación.

---

## Sprint 2 — Escenas y teorías reales

**Estado:** Pendiente

**Objetivo:** Sustituir los nodos mockeados por contenido real administrado por el usuario.

### Trabajo previsto

- Crear capa de acceso a la API en el frontend.
- Cargar tableros y nodos desde PostgreSQL.
- Crear escenas.
- Crear teorías.
- Editar escenas y teorías.
- Mostrar detalles.
- Guardar posiciones al finalizar el arrastre.
- Eliminar nodos desde la interfaz.
- Manejar estados de carga y error.
- Añadir pruebas para los nuevos flujos.

### Entregables

- Canvas alimentado por datos reales.
- Creación y edición desde el frontend.
- Posiciones persistidas.

---

## Sprint 3 — Conexiones visuales

**Estado:** Pendiente

**Objetivo:** Permitir que el usuario relacione visualmente escenas y teorías.

### Trabajo previsto

- Crear conexiones mediante interacción en el canvas.
- Persistir conexiones.
- Renderizar líneas entre nodos.
- Diferenciar visualmente los tipos de conexión.
- Eliminar conexiones.
- Manejar conexiones inválidas.

### Entregables

- Nodos conectados visualmente.
- Relaciones persistidas en PostgreSQL.

---

## Sprint 4 — Primera experiencia

**Estado:** Pendiente

**Objetivo:** Facilitar que un usuario nuevo comprenda la aplicación.

### Trabajo previsto

- Tablero de ejemplo.
- Mensajes y ayudas contextuales.
- Estados vacíos.
- Mejoras iniciales de experiencia de usuario.
- Flujo guiado para crear el primer contenido.

---

## Sprint 5 — Estabilidad

**Estado:** Pendiente

**Objetivo:** Preparar la aplicación para pruebas con usuarios.

### Trabajo previsto

- Manejo de errores amigable.
- Feedback visual.
- Acciones de deshacer cuando sean necesarias.
- Optimización del canvas.
- Ampliación de pruebas.
- Revisión de accesibilidad.
- Revisión de seguridad.
- Revisión de dependencias.

---

## Sprint 6 — Despliegue

**Estado:** Pendiente

**Objetivo:** Publicar una versión accesible de ThreadBoard.

### Trabajo previsto

- Base de datos en la nube.
- Despliegue del backend.
- Despliegue del frontend.
- Configuración de dominio.
- Variables de entorno de producción.
- Registro y análisis de errores.
- Recolección de feedback.
