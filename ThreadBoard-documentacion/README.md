# ThreadBoard

ThreadBoard es una aplicación visual para capturar escenas relevantes de series, películas y videojuegos, organizarlas en tableros y conectarlas para construir teorías narrativas.

La experiencia se inspira en los tableros de investigación con tarjetas e hilos que relacionan pistas.

## Estado actual

**En desarrollo — Sprint 1 completado.**

El proyecto dispone de:

- API backend con persistencia en PostgreSQL para tableros, nodos, escenas, teorías y conexiones.
- Vistas de grafo en formato interno y en formato compatible con React Flow.
- Frontend base con sidebar, canvas React Flow, nodos de demostración, selección, arrastre, zoom, paneo y controles.
- Colección Postman para verificar los endpoints del Sprint 1.
- Configuración común del repositorio y documentación técnica versionada.

El frontend del Sprint 1 todavía utiliza datos locales de demostración y no persiste posiciones ni consume la API. Esa integración forma parte del trabajo posterior.

## Estructura del repositorio

```text
ThreadBoard/
├── backend/                  # API NestJS
├── frontend/                 # Aplicación React + Vite
├── docs/                     # Documentación técnica y de gestión
├── CHANGELOG.md
├── CONTRIBUTING.md
└── README.md
```

## Stack tecnológico

### Backend

- Node.js
- TypeScript
- NestJS 11
- Prisma ORM 7
- PostgreSQL
- `@prisma/adapter-pg`
- `class-validator`
- Jest y pruebas E2E

### Frontend

- React 19
- TypeScript
- Vite
- `@xyflow/react` para el canvas visual

### Repositorio

- Monorepo organizado por aplicaciones
- Git y GitHub
- Ramas por sprint y ramas auxiliares de tipo `feature`, `fix` o `chore`
- Sin autenticación durante el MVP

## Requisitos locales

- Node.js 22.x
- npm 10.x
- PostgreSQL
- Git

## Ejecución local

### Backend

```bash
cd backend
npm install --include=dev
cp .env.example .env
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

API disponible por defecto en `http://localhost:3000`.

### Frontend

```bash
cd frontend
npm install --include=dev
npm run dev
```

Vite mostrará en consola la dirección local del frontend.

## Verificaciones principales

### Backend

```bash
npm audit --omit=dev
npx prisma validate
npm run build
npm test
npm run test:e2e
```

### Frontend

```bash
npm audit --omit=dev
npm run format
npm run lint
npm run build
```

## Documentación

La documentación central se encuentra en [`docs/README.md`](docs/README.md). Allí se incluyen planificación, arquitectura, modelo de datos, API, informes de sprint, decisiones arquitectónicas, pruebas, instalación, deuda técnica y plantillas para continuar el proyecto.

## Próximo objetivo

El siguiente bloque de trabajo corresponde al **Sprint 2: escenas y teorías reales**, orientado a sustituir los datos de demostración del frontend por contenido creado por el usuario e integrado con la API.
