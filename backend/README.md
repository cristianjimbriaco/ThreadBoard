# ThreadBoard Backend

API REST del proyecto ThreadBoard, construida con NestJS, Prisma y PostgreSQL.

## Tecnologías

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Jest
- Supertest

## Requisitos

Antes de ejecutar el backend debes tener instalado:

- Node.js en la versión indicada en el archivo `.nvmrc`.
- npm.
- PostgreSQL.

## Instalación

Desde la carpeta `backend`:

```powershell
npm install
```

## Variables de entorno

Copia el archivo de ejemplo:

```powershell
Copy-Item .env.example .env
```

Configura las siguientes variables dentro de `.env`:

```env
DATABASE_URL="postgresql://USUARIO:CONTRASEÑA@localhost:5432/threadboard"
PORT=3000
FRONTEND_URL="http://localhost:5173"
```

El archivo `.env` contiene información local y no debe subirse al repositorio.

## Configuración de Prisma

Genera el cliente de Prisma:

```powershell
npx prisma generate
```

Aplica las migraciones de la base de datos:

```powershell
npx prisma migrate dev
```

Para abrir Prisma Studio:

```powershell
npx prisma studio
```

## Ejecutar en desarrollo

```powershell
npm run start:dev
```

La API estará disponible normalmente en:

```text
http://localhost:3000
```

## Compilar el backend

```powershell
npm run build
```

La compilación se genera dentro de:

```text
backend/dist
```

## Ejecutar la compilación de producción

```powershell
npm run start:prod
```

Antes de ejecutar este comando debe existir una compilación generada mediante:

```powershell
npm run build
```

## Pruebas unitarias

```powershell
npm test
```

Para ejecutar las pruebas una después de otra:

```powershell
npx jest --runInBand
```

Las pruebas unitarias utilizan mocks de Prisma y no necesitan conectarse a PostgreSQL.

## Pruebas end-to-end

```powershell
npm run test:e2e -- --runInBand
```

Las pruebas end-to-end levantan una aplicación NestJS real y utilizan la base de datos PostgreSQL configurada en `.env`.

PostgreSQL debe estar iniciado antes de ejecutarlas.

## Verificación completa

```powershell
npm run build
npx jest --runInBand
npm run test:e2e -- --runInBand
```

Todos los comandos deben completarse sin errores antes de integrar cambios en una rama principal del proyecto.

## Módulos actuales

El backend está organizado en los siguientes módulos:

- Boards
- Nodes
- Scenes
- Theories
- Connections
- Prisma

## Entidades principales

### Board

Representa un tablero de trabajo.

### Node

Representa un elemento posicionado dentro del tablero.

Los tipos permitidos son:

- `SCENE`
- `THEORY`

### Scene

Representa una escena asociada a un nodo de tipo `SCENE`.

### Theory

Representa una teoría asociada a un nodo de tipo `THEORY`.

### Connection

Representa una relación dirigida entre dos nodos.

Los tipos permitidos son:

- `CAUSES`
- `LEADS_TO`
- `PARALLEL`
- `CONTRADICTS`

## Validación

El backend utiliza un `ValidationPipe` global con:

- Validación de DTO.
- Rechazo de propiedades no reconocidas.
- Transformación de datos.
- Validación de parámetros UUID.

## Respuestas de error

Los códigos principales utilizados son:

- `400 Bad Request`: datos o reglas de negocio inválidas.
- `404 Not Found`: recurso inexistente.
- `409 Conflict`: recurso duplicado o estado incompatible.

## Colección de Postman

La colección verificada del Sprint 1 se encuentra en:

```text
docs/postman/ThreadBoard-Sprint1.postman_collection.json
```

La colección incluye pruebas para:

- Boards.
- Nodes.
- Scenes.
- Theories.
- Connections.
- Vistas de grafo.
- Validaciones.
- Limpieza de datos de prueba.

## Estado del Sprint 1

Durante el Sprint 1 se completaron:

- Configuración de NestJS y Prisma.
- Conexión con PostgreSQL.
- Endpoints principales.
- Validación de solicitudes.
- Reglas de dominio.
- Manejo de errores HTTP.
- Pruebas unitarias.
- Pruebas end-to-end.
- Compilación de producción.
- Colección de Postman verificada.
