# ADR-003 — React con Vite para el frontend

- **Estado:** aceptada
- **Fecha de consolidación:** Sprint 0

## Contexto

El planteamiento inicial mencionó Next.js, pero el MVP es una aplicación cliente centrada en un canvas y no requiere renderizado de servidor, rutas públicas indexables ni funciones backend dentro del framework frontend.

## Decisión

Usar React con TypeScript y Vite.

## Razones

- Menor complejidad inicial.
- Arranque y build rápidos.
- Separación explícita respecto a la API NestJS.
- Integración directa con `@xyflow/react`.

## Consecuencias

- El frontend debe gestionar la URL del backend mediante variables de entorno.
- La navegación futura requerirá una solución de routing explícita.
- El despliegue será estático y separado del backend.
- Si se necesitara SSR en el futuro, la decisión deberá revisarse mediante un ADR nuevo.
