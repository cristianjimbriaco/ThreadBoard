# ADR-002 — Estructura de monorepo

- **Estado:** aceptada
- **Fecha:** 3 de febrero de 2026

## Contexto

ThreadBoard contiene una API, una aplicación web y documentación estrechamente relacionadas, desarrolladas por una sola persona durante el MVP.

## Decisión

Mantener ambos proyectos en un repositorio único:

```text
backend/
frontend/
docs/
```

Cada aplicación conserva su propio `package.json` y `package-lock.json`.

## Razones

- Cambios coordinados en API y frontend se revisan juntos.
- La documentación evoluciona junto al código.
- Se simplifica la gestión para un desarrollador individual.
- No se obliga todavía a introducir herramientas de workspace adicionales.

## Consecuencias

- Los comandos npm deben ejecutarse dentro de cada aplicación, no desde la raíz salvo que se agreguen scripts raíz en el futuro.
- Las auditorías y dependencias se gestionan por separado.
- Los pull requests pueden afectar varias carpetas.
