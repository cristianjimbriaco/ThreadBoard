# Arquitectura — ThreadBoard

## Visión general

ThreadBoard es una aplicación visual orientada a organizar escenas, teorías y relaciones narrativas mediante un tablero interactivo.

El proyecto utiliza una arquitectura monorepo formada por:

- Una API REST.
- Una aplicación web SPA.
- Una base de datos relacional.
- Comunicación HTTP mediante JSON.

## Componentes

### Frontend

Tecnologías:

- React.
- TypeScript.
- Vite.
- React Flow.

Responsabilidades actuales:

- Mostrar el layout principal.
- Renderizar el canvas.
- Mostrar nodos temporales.
- Permitir arrastre, zoom, pan y selección.

Durante el Sprint 1 el frontend no consume todavía la API.

### Backend

Tecnologías:

- NestJS.
- TypeScript.
- Prisma ORM.
- PostgreSQL.

Responsabilidades:

- Validar las solicitudes.
- Aplicar reglas de negocio.
- Administrar tableros y nodos.
- Persistir escenas, teorías y conexiones.
- Proporcionar representaciones de grafo.
- Devolver errores HTTP consistentes.

### Base de datos

PostgreSQL almacena las entidades del dominio. Prisma administra el esquema, las consultas y las migraciones.

## Flujo general

```text
React/Vite
    ↓ HTTP + JSON
NestJS Controllers
    ↓ DTO + ValidationPipe
NestJS Services
    ↓ Prisma Client
PostgreSQL
```

Durante el Sprint 1 este flujo está disponible en el backend y verificado mediante Postman y pruebas end-to-end. La integración desde React se realizará en el Sprint 2.

## Modelo de dominio

### Board

Representa un espacio de trabajo.

Atributos principales:

- `id`
- `title`
- `description`
- `createdAt`
- `updatedAt`

Relaciones:

- Tiene muchos nodos.
- Tiene muchas conexiones.

### Node

Representa un elemento posicionado dentro del tablero.

Atributos:

- `id`
- `boardId`
- `type`
- `positionX`
- `positionY`
- `createdAt`
- `updatedAt`

Tipos permitidos:

- `SCENE`
- `THEORY`

Relaciones:

- Pertenece a un Board.
- Puede tener una Scene o una Theory.
- Puede ser origen o destino de conexiones.

### Scene

Representa un momento relevante de una obra.

Su clave primaria es también la clave externa del nodo asociado:

- `nodeId`

Atributos:

- `title`
- `imageUrl`
- `season`
- `episode`
- `minute`
- `description`
- `location`
- `note`

Solo puede crearse sobre un nodo de tipo `SCENE`.

### Theory

Representa una hipótesis o interpretación narrativa.

Su clave primaria es también la clave externa del nodo asociado:

- `nodeId`

Atributos:

- `title`
- `description`
- `imageUrl`

Solo puede crearse sobre un nodo de tipo `THEORY`.

### Connection

Representa una relación dirigida entre dos nodos.

Atributos:

- `id`
- `boardId`
- `sourceNodeId`
- `targetNodeId`
- `type`
- `createdAt`

Tipos permitidos:

- `CAUSES`
- `LEADS_TO`
- `PARALLEL`
- `CONTRADICTS`

Reglas principales:

- El origen y el destino deben ser diferentes.
- Ambos nodos deben existir.
- Ambos nodos deben pertenecer al mismo tablero.
- El tablero indicado debe coincidir con el tablero de los nodos.
- No se permiten conexiones duplicadas idénticas.

### Character y SceneCharacter

El esquema de Prisma contempla personajes y una relación muchos-a-muchos entre escenas y personajes.

Estas entidades todavía no tienen módulos ni endpoints públicos dentro del Sprint 1 y no deben considerarse funcionalidad terminada.

## API por módulos

La API está organizada en:

```text
boards
nodes
scenes
theories
connections
prisma
```

Cada módulo utiliza controladores y servicios separados.

## Validación

La aplicación utiliza un `ValidationPipe` global con:

- Eliminación de propiedades no reconocidas.
- Rechazo de propiedades adicionales.
- Transformación de datos.
- Validadores de DTO.
- Validación de UUID en parámetros de rutas.

## Manejo de errores

Los principales códigos utilizados son:

- `400 Bad Request`: datos o reglas inválidas.
- `404 Not Found`: recurso inexistente.
- `409 Conflict`: duplicación o incompatibilidad de estado.

## Pruebas

### Unitarias

Las pruebas unitarias aíslan servicios y controladores mediante mocks de Prisma.

### End-to-end

Las pruebas end-to-end levantan una aplicación NestJS real y utilizan PostgreSQL para verificar:

- Endpoint raíz.
- Validación de DTO.
- Ciclo de creación, consulta y eliminación de un tablero.

### Postman

La colección del Sprint 1 prueba los módulos principales y ejecuta una limpieza de datos al finalizar.

## Variables de entorno

El backend utiliza:

```env
DATABASE_URL
PORT
FRONTEND_URL
```

El archivo `.env` no debe versionarse. El repositorio conserva `.env.example` como referencia.

## Decisiones actuales

- Monorepo.
- API REST.
- SPA con React.
- PostgreSQL como base relacional.
- Prisma como ORM.
- NestJS como backend.
- React Flow para el canvas.
- Sin autenticación durante esta etapa del MVP.
- Rutas y relaciones explícitas.
- Pruebas antes de integrar cada sprint.

## Límites del Sprint 1

Incluye:

- Persistencia en backend.
- API funcional.
- Pruebas.
- Canvas interactivo con datos mockeados.
- Documentación y colección de Postman.

No incluye:

- Consumo de la API desde el frontend.
- Formularios de contenido.
- Persistencia del arrastre desde el frontend.
- Conexiones visuales.
- Autenticación.
- Funciones sociales.
