"# Arquitectura" 
# Arquitectura — Threadboard

## Visión general

Threadboard es una aplicación orientada a la construcción de teorías narrativas
a partir de escenas de obras audiovisuales, utilizando una representación visual
inspirada en tableros de detectives.

---

## Arquitectura general

- Monorepo
- Backend: API REST
- Frontend: SPA
- Comunicación vía HTTP (JSON)

---

## Modelo de dominio (v1)

### Board (Tablero)
Representa un espacio de trabajo donde el usuario organiza escenas y teorías

**Atributos**
- id
- title
- description
- createdAt
- updatedAt

**Relaciones**
- Un Board tiene muchas Scenes
- Un Board tiene muchas Theories

---

### Node (Nodo)
Es la entidad padre de Scene y Theory

**Atributos**
- id 
- boardId
- type (SCENE | THEORY)
- positionX
- positionY
- createdAt
- updatedAt

### Scene (Escena)
Representa un momento relevante de una obra audiovisual

**Atributos**
- nodeId (PK/FK)
- title
- imageUrl
- season
- episode
- minute
- description
- location
- note

**Relaciones**
- Una Scene pertenece a un Board
- Una Scene puede tener muchos Characters

---

### Character (Personaje)
Representa un personaje de la obra

**Atributos**
- id
- name

**Relaciones**
- Un Character puede aparecer en muchas Scenes

---

### SceneCharacter
Entidad intermedia para modelar la relación muchos-a-muchos entre Scene y Character.

**Atributos**
- sceneNodeId
- characterId

---

### Theory (Teoría)
Representa una hipótesis o interpretación narrativa del usuario.

**Atributos**
- NodeId (PK/FK)
- title
- description
- imageUrl

---

### Connection (Coneccion)
Representa la coneccion entre dos nodos (teorias o escenas) que sirve para guardar las caracteristicas de la coneccion

**Atributos**
- id
- boardId
- sourceNodeId
- targetNodeId
- description
- createdAt

---

## Decisiones técnicas clave

- Base de datos relacional (PostgreSQL)
- ORM: Prisma
- Backend con NestJS
- Sin autenticación en MVP
- Relaciones explícitas (no campos string ambiguos)

---

## Alcance actual (Sprint 1)

Incluye:
- Boards
- Scenes
- Characters
- Theories (estructura, sin conexiones)

No incluye:
- Conexiones visuales
- Canvas interactivo
- Autenticación
- Comunidad

---

## Notas

Este documento evoluciona junto al proyecto.
Cualquier cambio estructural relevante debe reflejarse aquí.
