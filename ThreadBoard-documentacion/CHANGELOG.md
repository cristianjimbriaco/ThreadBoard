# Registro de cambios

Todos los cambios relevantes de ThreadBoard deben registrarse en este archivo. El formato sigue una adaptación de *Keep a Changelog* y el proyecto todavía no utiliza versionado semántico formal.

## [No publicado]

### Planificado

- Integración del frontend con la API.
- Creación de escenas y teorías desde la interfaz.
- Persistencia de posiciones de nodos.
- Visualización de detalles y eliminación de nodos.

## [Sprint 1] — 2026-08-03

### Añadido

- Backend NestJS organizado por dominios de tableros, nodos, escenas, teorías y conexiones.
- Persistencia con PostgreSQL y Prisma.
- Endpoints para datos de grafo y vista compatible con React Flow.
- DTO y validaciones para las operaciones principales.
- Pruebas unitarias y pruebas E2E del backend.
- Colección Postman del Sprint 1.
- Frontend base con sidebar y canvas React Flow.
- Nodos locales de demostración.
- Arrastre, selección, zoom, paneo y controles del canvas.

### Corregido

- Alineación de Prisma CLI, cliente y adaptador en la versión 7.9.1.
- Construcción del adaptador PostgreSQL mediante `connectionString`.
- Dependencias de desarrollo necesarias para compilar y ejecutar Jest.
- Configuración y verificación del build de producción del backend.
- Vulnerabilidades de dependencias de producción detectadas durante la auditoría.
- Dependencias vulnerables del entorno de desarrollo del frontend.

### Cambiado

- El stack frontend definitivo utiliza React con Vite en lugar del Next.js contemplado inicialmente.
- El backend utiliza NestJS en lugar del Express contemplado en una versión temprana del roadmap.
- El Sprint 1 se cerró con frontend visual desacoplado de la API; la integración se trasladó al Sprint 2.

## [Sprint 0] — 2026-07

### Añadido

- Repositorio y estructura inicial del monorepo.
- Aplicaciones `backend` y `frontend`.
- README inicial.
- `.editorconfig`, `.gitattributes`, `.gitignore`, `.nvmrc` y `backend/.env.example`.
- Normalización de finales de línea y configuración del entorno.
- Estrategia inicial de ramas y roadmap del MVP.
- Decisiones iniciales de arquitectura y modelo de datos.
