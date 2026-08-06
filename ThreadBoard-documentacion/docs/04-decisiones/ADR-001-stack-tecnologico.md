# ADR-001 — Stack tecnológico

- **Estado:** aceptada
- **Fecha inicial:** 3 de febrero de 2026
- **Actualización:** 5 de agosto de 2026

## Contexto

El proyecto requiere una interfaz visual rica, una API estructurada y una base relacional capaz de preservar integridad entre tableros, nodos y conexiones.

## Decisión

- Frontend: React + TypeScript + Vite.
- Canvas: `@xyflow/react`.
- Backend: NestJS + TypeScript.
- Persistencia: PostgreSQL + Prisma ORM.
- Runtime local: Node.js 22.x.

## Alternativas consideradas

- Next.js para frontend.
- Express sin framework estructurado para backend.
- Konva.js para el canvas.
- Bases no relacionales.

## Razones

- React Flow se adapta directamente a nodos y aristas.
- NestJS ofrece módulos, inyección de dependencias, validación y pruebas estructuradas.
- PostgreSQL protege relaciones e integridad.
- Prisma facilita el modelo y las migraciones.
- Vite mantiene una aplicación cliente simple sin introducir renderizado de servidor innecesario en el MVP.

## Consecuencias

- Frontend y backend se despliegan como aplicaciones separadas.
- Se requiere configurar CORS y URL de API.
- Las actualizaciones de Prisma deben alinear CLI, client y adapter.
- La autenticación futura debe integrarse en ambas capas.
