# ADR-005 — Node como base de Scene y Theory

- **Estado:** aceptada
- **Fecha:** planificación del MVP

## Contexto

Escenas y teorías comparten comportamiento visual: pertenecen a un tablero, tienen posición y participan en conexiones. Duplicar esos campos complicaría las consultas y el canvas.

## Decisión

Crear una entidad `Node` con tipo, tablero y posición. `Scene` y `Theory` almacenan el contenido especializado asociado al nodo.

## Razones

- Unifica el comportamiento visual.
- Simplifica Graph y Graph View.
- Permite agregar tipos nuevos en el futuro.
- Centraliza conexiones entrantes y salientes.

## Consecuencias

- La creación de contenido puede requerir una operación compuesta o dos pasos.
- Debe validarse que el tipo de Node corresponda al contenido asociado.
- La eliminación debe manejar contenido y conexiones dependientes.
- Los campos definitivos de Scene y Theory deben estabilizarse antes de ampliar el dominio.
