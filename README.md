# ThreadBoard

ThreadBoard es una aplicación visual para organizar escenas, teorías y conexiones narrativas mediante un tablero inspirado en los paneles de investigación con pistas e hilos.

El proyecto utiliza una arquitectura monorepo con una API REST, una aplicación web y una base de datos PostgreSQL.

## Estado del proyecto

✅ Sprint 0 — Preparación completado
✅ Sprint 1 — Base del producto completado
🚧 Sprint 2 — Escenas y teorías reales pendiente

El Sprint 1 incluye:

- API REST construida con NestJS.
- Persistencia mediante PostgreSQL y Prisma.
- Entidades Board, Node, Scene, Theory y Connection.
- Validación de solicitudes mediante DTO.
- Reglas de negocio y respuestas HTTP consistentes.
- Pruebas unitarias y end-to-end.
- Colección de Postman verificada.
- Canvas interactivo con nodos mockeados.
- Arrastre de nodos, zoom, pan y selección.
- Layout base con sidebar y área de trabajo.

El frontend todavía utiliza nodos temporales. La carga de datos reales desde el backend y la persistencia de posiciones en el canvas corresponden al Sprint 2.

## Estructura del repositorio

```text
ThreadBoard/
├── backend/                  # API REST con NestJS y Prisma
├── frontend/                 # Aplicación web con React y Vite
├── docs/
│   ├── arquitectura.md       # Arquitectura y modelo de dominio
│   ├── roadmap.md            # Plan de desarrollo por sprints
│   └── postman/              # Colección de Postman
└── README.md
```

## Stack tecnológico

### Backend

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Jest
- Supertest

### Frontend

- React
- TypeScript
- Vite
- React Flow
- ESLint
- Prettier

### Desarrollo

- Git y GitHub
- Postman
- Monorepo
- Variables de entorno
- Sin autenticación durante el MVP inicial

## Requisitos

Antes de iniciar el proyecto debes tener instalado:

- Node.js en la versión indicada por `.nvmrc`.
- npm.
- PostgreSQL.
- Git.

## Configuración inicial

Clona el repositorio e instala las dependencias por separado:

```bash
git clone https://github.com/cristianjimbriaco/ThreadBoard.git
cd ThreadBoard

cd backend
npm install

cd ../frontend
npm install
```

## Configurar el backend

Copia el archivo de ejemplo:

```bash
cd backend
cp .env.example .env
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Configura en `.env`:

```env
DATABASE_URL="postgresql://USUARIO:CONTRASEÑA@localhost:5432/threadboard"
PORT=3000
FRONTEND_URL="http://localhost:5173"
```

Después prepara Prisma:

```bash
npx prisma generate
npx prisma migrate dev
```

## Ejecutar el backend

Desde `backend`:

```bash
npm run start:dev
```

API disponible en:

```text
http://localhost:3000
```

Para compilar y ejecutar producción local:

```bash
npm run build
npm run start:prod
```

## Ejecutar el frontend

Desde `frontend`:

```bash
npm run dev
```

Aplicación disponible normalmente en:

```text
http://localhost:5173
```

El backend y el frontend deben ejecutarse en terminales separadas.

## Pruebas del backend

Desde `backend`:

```bash
npm test
npm run test:e2e
npm run build
```

Las pruebas unitarias utilizan mocks de Prisma. Las pruebas end-to-end utilizan la base de datos PostgreSQL configurada en `.env`.

## Verificaciones del frontend

Desde `frontend`:

```bash
npm run format:check
npm run lint
npm run build
```

## Colección de Postman

La colección verificada del Sprint 1 se encuentra en:

```text
docs/postman/ThreadBoard-Sprint1.postman_collection.json
```

Puede importarse en Postman para probar:

- Boards.
- Nodes.
- Scenes.
- Theories.
- Connections.
- Vistas de grafo.
- Validaciones.
- Limpieza de datos de prueba.

## Flujo de ramas

El desarrollo se organiza de esta manera:

```text
main
└── develop
    └── sprint-N
        └── feat/*, fix/*, test/*, docs/*, chore/*
```

Cada cambio se desarrolla en una rama específica y se integra mediante Pull Request.

Al finalizar un sprint, su rama se fusiona en `develop`. La rama `main` se reserva para versiones estables y verificadas.

## Alcance pendiente

El Sprint 2 incorporará:

- Obtención de nodos reales desde el backend.
- Creación de escenas y teorías desde el frontend.
- Formularios de creación y edición.
- Persistencia de posiciones del canvas.
- Vista de detalles.
- Eliminación de nodos desde la interfaz.

## Licencia

La licencia definitiva del proyecto todavía no ha sido seleccionada.
