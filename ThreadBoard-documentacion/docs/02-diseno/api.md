# API REST — Estado del Sprint 1

## Convenciones

- URL base local: `http://localhost:3000`
- Formato: JSON
- Identificadores: UUID según el modelo previsto
- Validación: DTO con `class-validator`

La colección ejecutable se encuentra en `docs/api/ThreadBoard_API_Sprint_1.postman_collection.json`.

## Boards

| Método | Ruta | Propósito |
|---|---|---|
| POST | `/boards` | Crear tablero |
| GET | `/boards` | Listar tableros |
| GET | `/boards/:boardId` | Consultar tablero |
| DELETE | `/boards/:boardId` | Eliminar tablero |

Ejemplo de creación:

```json
{
  "title": "Investigation Board",
  "description": "Sprint 1 testing"
}
```

## Nodes

| Método | Ruta | Propósito |
|---|---|---|
| POST | `/nodes` | Crear nodo de escena o teoría |
| GET | `/boards/:boardId/nodes` | Listar nodos de un tablero |
| PATCH | `/nodes/:nodeId/position` | Actualizar posición |
| DELETE | `/nodes/:nodeId` | Eliminar nodo |

Ejemplo:

```json
{
  "boardId": "<uuid>",
  "type": "SCENE",
  "positionX": 100,
  "positionY": 150
}
```

## Scenes

| Método | Ruta | Propósito |
|---|---|---|
| POST | `/scenes` | Crear escena para un nodo existente |
| GET | `/scenes` | Listar escenas |
| GET | `/scenes/:sceneId` | Consultar escena |
| PATCH | `/scenes/:sceneId` | Editar escena |

Ejemplo usado en Postman:

```json
{
  "nodeId": "<uuid>",
  "title": "Opening Scene",
  "description": "Initial setup",
  "content": "Scene content here"
}
```

## Theories

| Método | Ruta | Propósito |
|---|---|---|
| POST | `/theories` | Crear teoría para un nodo existente |
| GET | `/theories` | Listar teorías |
| GET | `/theories/:theoryId` | Consultar teoría |
| PATCH | `/theories/:theoryId` | Editar teoría |

Ejemplo usado en Postman:

```json
{
  "nodeId": "<uuid>",
  "title": "Suspicion Theory",
  "hypothesis": "The suspect was at the scene",
  "analysis": "Based on timeline inconsistencies"
}
```

## Connections

| Método | Ruta | Propósito |
|---|---|---|
| POST | `/connections` | Crear conexión |
| GET | `/connections` | Listar conexiones |
| DELETE | `/connections/:connectionId` | Eliminar conexión |

```json
{
  "boardId": "<uuid>",
  "sourceNodeId": "<uuid>",
  "targetNodeId": "<uuid>"
}
```

## Graph

| Método | Ruta | Propósito |
|---|---|---|
| GET | `/graph/:boardId` | Recuperar datos agregados internos |
| GET | `/graph-view/:boardId` | Recuperar nodos y aristas adaptados a React Flow |

## Orden recomendado de prueba

1. Crear Board y guardar `boardId`.
2. Crear dos Nodes y guardar sus identificadores.
3. Crear Scene o Theory para cada nodo correspondiente.
4. Crear Connection.
5. Consultar Graph.
6. Consultar Graph View.
7. Actualizar posición.
8. Eliminar recursos y comprobar cascadas o errores esperados.

## Contratos pendientes de estabilización

- Respuesta de errores y estructura uniforme.
- Campos definitivos de Scene y Theory.
- Operaciones de actualización completas.
- Filtros de conexiones por tablero.
- Política de conexiones duplicadas y auto-conexiones.
- Documentación OpenAPI/Swagger, todavía no registrada como implementada.
