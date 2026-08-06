# Fuentes y limitaciones de esta línea base

## Fuentes utilizadas

Esta documentación se construyó a partir de:

1. El documento técnico inicial de ThreadBoard, que contiene visión, usuario objetivo, entidades, flujos, alcance, stack tentativo, roadmap y decisiones iniciales.
2. El README inicial del repositorio.
3. La colección Postman denominada `ThreadBoard API - Sprint 1 (Final)`.
4. El historial de desarrollo y las verificaciones comunicadas durante el cierre de los sprints 0 y 1.

## Criterio de consolidación

Cuando la planificación inicial y la implementación posterior difieren, se conserva la evolución mediante ADR y notas de desviación. Por ejemplo, el stack tentativo mencionaba Next.js y Express, mientras el proyecto consolidó React con Vite y NestJS.

## Limitaciones

- Esta generación no tuvo acceso directo al contenido completo del repositorio privado o no indexado en GitHub.
- El archivo `schema.prisma`, los `package.json`, los scripts npm y los DTO actuales deben considerarse la fuente ejecutable y revisarse antes de integrar la documentación.
- Las salidas completas de pruebas y auditorías no estaban disponibles como archivos independientes; los resultados se registran según el cierre documentado en la conversación.
- Los campos de Scene y Theory presentan diferencias entre el planteamiento inicial y los ejemplos de Postman. Esa diferencia se deja explícitamente pendiente de estabilización.

## Revisión recomendada antes del merge

1. Comparar `docs/02-diseno/modelo-de-datos.md` con `backend/prisma/schema.prisma`.
2. Comparar `docs/02-diseno/api.md` con controladores, DTO y colección Postman.
3. Confirmar los nombres reales de scripts de formato y pruebas en cada `package.json`.
4. Agregar capturas y logs del Sprint 1 en `docs/evidencias/`.
