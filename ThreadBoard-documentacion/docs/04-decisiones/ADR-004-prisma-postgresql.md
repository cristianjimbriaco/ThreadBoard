# ADR-004 — PostgreSQL con Prisma

- **Estado:** aceptada
- **Fecha:** Sprint 0; revisada en Sprint 1

## Contexto

El dominio contiene relaciones fuertes: tableros, nodos, contenido especializado y conexiones con origen y destino. Se requiere integridad, consultas agregadas y migraciones controladas.

## Decisión

Usar PostgreSQL como base de datos y Prisma ORM con el adaptador PostgreSQL.

## Razones

- Modelo relacional adecuado para claves foráneas y cascadas.
- Migraciones versionables.
- Cliente tipado para TypeScript.
- Buena integración con NestJS.

## Consecuencias

- El desarrollo requiere una instancia PostgreSQL y `DATABASE_URL`.
- Las actualizaciones de Prisma deben realizarse de forma coordinada.
- El Sprint 1 confirmó la inicialización del adaptador mediante `{ connectionString }`.
- El esquema Prisma es la fuente ejecutable del modelo.
