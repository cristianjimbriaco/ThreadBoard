# Instalación para desarrollo

## Requisitos

- Git.
- Node.js 22.x.
- npm 10.x.
- PostgreSQL.
- Editor recomendado: Visual Studio Code.

## Clonar

```bash
git clone https://github.com/cristianjimbriaco/ThreadBoard.git
cd ThreadBoard
```

## Backend

```bash
cd backend
npm install --include=dev
```

Crear `.env` a partir de `.env.example` y configurar `DATABASE_URL`.

```bash
npx prisma generate
npx prisma validate
npx prisma migrate dev
npm run start:dev
```

La API usa por defecto `http://localhost:3000`, salvo que el proyecto configure otro puerto mediante variable de entorno.

## Frontend

En otra terminal:

```bash
cd frontend
npm install --include=dev
npm run dev
```

## Verificación inicial

```bash
# backend
npm run build
npm test
npm run test:e2e

# frontend
npm run lint
npm run build
```

## Postman

Importar:

```text
docs/api/ThreadBoard_API_Sprint_1.postman_collection.json
```

Configurar `baseUrl` y ejecutar las solicitudes en el orden documentado.

## Nota sobre dependencias de desarrollo

No usar una instalación que omita dependencias de desarrollo cuando se pretenda compilar o ejecutar Jest. El Sprint 1 registró un error de tipos de Jest causado por esa situación.
