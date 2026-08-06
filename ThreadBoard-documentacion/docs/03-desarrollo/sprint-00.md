# Sprint 0 — Preparación

| Campo | Valor |
|---|---|
| Estado | Completado |
| Objetivo | Preparar el repositorio, el entorno y las decisiones base |
| Periodo | Febrero-julio de 2026, consolidado retrospectivamente |

## Alcance

- Crear repositorio.
- Elegir stack.
- Definir estructura.
- Configurar herramientas básicas.
- Elaborar visión, modelo y roadmap.

## Trabajo realizado

### Repositorio

- Estructura con `backend/`, `frontend/` y `docs/`.
- README inicial.
- Estrategia de ramas por sprint.

### Configuración base

Se registró una rama de mantenimiento del baseline con:

- `.gitattributes` para normalización de finales de línea;
- `.editorconfig`;
- `.gitignore` mejorado;
- `.nvmrc`;
- `backend/.env.example`;
- actualización de archivos `package.json` y `package-lock.json`.

### Stack consolidado

- Frontend: React, Vite y TypeScript.
- Backend: NestJS y TypeScript.
- Base de datos: PostgreSQL.
- ORM: Prisma.

## Desviaciones del planteamiento inicial

El documento original contempló Next.js en frontend y, en una sección temprana del roadmap, Node con Express. El proyecto real consolidó React con Vite y NestJS. Estas modificaciones se conservan mediante ADR para no perder la evolución de la decisión.

## Entregables

- Repositorio operativo.
- Aplicaciones base instaladas.
- Configuración reproducible.
- Modelo inicial.
- Roadmap.
- Decisiones de arquitectura iniciales.

## Lecciones

- Las decisiones tentativas deben marcarse como tales.
- El README no debe contener todo el roadmap; la documentación extensa pertenece a `docs/`.
- La normalización del entorno evita cambios innecesarios y problemas entre Windows y otros sistemas.
