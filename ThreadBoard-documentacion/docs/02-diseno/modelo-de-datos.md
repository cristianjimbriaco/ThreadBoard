# Modelo de datos

Este documento describe el modelo conceptual consolidado. El archivo `schema.prisma` del repositorio es la fuente ejecutable y debe prevalecer ante cualquier diferencia.

## Diagrama conceptual

```mermaid
erDiagram
    BOARD ||--o{ NODE : contains
    BOARD ||--o{ CONNECTION : owns
    NODE ||--o| SCENE : may_have
    NODE ||--o| THEORY : may_have
    NODE ||--o{ CONNECTION : source
    NODE ||--o{ CONNECTION : target

    BOARD {
      uuid id PK
      string title
      string description
      datetime createdAt
      datetime updatedAt
    }

    NODE {
      uuid id PK
      uuid boardId FK
      enum type
      float positionX
      float positionY
      datetime createdAt
      datetime updatedAt
    }

    SCENE {
      uuid nodeId PK_FK
      string title
      string imageUrl
      int season
      int episode
      float minute
      string description
      string_array characters
      string location
      enum mediaType
      string notes
    }

    THEORY {
      uuid nodeId PK_FK
      string title
      string description
      string imageUrl
    }

    CONNECTION {
      uuid id PK
      uuid boardId FK
      uuid sourceNodeId FK
      uuid targetNodeId FK
      string description
      datetime createdAt
    }
```

## Entidades

### Board

Representa un tablero de investigación narrativa.

Campos previstos:

- `id`
- `title`
- `description`
- `createdAt`
- `updatedAt`

### Node

Representa un elemento posicionable del canvas.

- `id`
- `boardId`
- `type`: escena o teoría
- `positionX`
- `positionY`
- marcas temporales

### Scene

Contenido específico asociado a un nodo de escena. El planteamiento inicial incluyó título, imagen, temporada, episodio, minuto, descripción, personajes, lugar, tipo de medio y notas. El DTO y el esquema vigentes deben definir cuáles campos son obligatorios o están implementados en cada sprint.

### Theory

Contenido específico asociado a un nodo de teoría. El planteamiento original incluía título, descripción e imagen; la API de Sprint 1 usa también conceptos de hipótesis y análisis. Esta diferencia debe reconciliarse formalmente antes de estabilizar el contrato del Sprint 2.

### Connection

Relación entre dos nodos:

- pertenece a un Board;
- contiene origen y destino;
- puede incluir descripción;
- no debe relacionar nodos de tableros diferentes.

## Reglas de integridad

1. `Node.boardId` debe referenciar un Board existente.
2. Scene y Theory dependen de Node.
3. El tipo del Node debe coincidir con el contenido asociado.
4. Source y target de Connection deben existir.
5. Source y target deben pertenecer al `boardId` de Connection.
6. La eliminación de Node debe gestionar conexiones entrantes y salientes.

## Decisiones pendientes

- Confirmar si se permiten conexiones Theory-Theory en el MVP.
- Unificar los campos definitivos de Theory entre el planteamiento inicial y la API.
- Definir si `characters` seguirá como arreglo de texto o se convertirá en entidad futura.
- Definir política para conexiones duplicadas o auto-conexiones.
