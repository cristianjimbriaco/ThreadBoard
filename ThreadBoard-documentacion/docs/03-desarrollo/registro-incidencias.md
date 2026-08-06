# Registro de incidencias técnicas

## INC-001 — Ruta de salida del backend

- **Sprint:** 1
- **Estado:** resuelta
- **Síntoma:** `start:prod` no encontraba el módulo principal bajo `dist/main`.
- **Causa general:** desalineación entre la estructura emitida por TypeScript/Nest y el script de producción.
- **Resolución:** alinear configuración de build y punto de entrada; verificar mediante build y ejecución.
- **Prevención:** ejecutar `npm run build` y `npm run start:prod` en el checklist de cambios de compilación.

## INC-002 — Definiciones de tipo de Jest ausentes

- **Sprint:** 1
- **Estado:** resuelta
- **Síntoma:** `TS2688: Cannot find type definition file for 'jest'`.
- **Causa:** instalación sin dependencias de desarrollo mientras el `tsconfig` declaraba los tipos de Jest.
- **Resolución:** `npm install --include=dev`; verificar o instalar `@types/jest`; repetir build y pruebas.
- **Prevención:** no usar instalaciones omitiendo dependencias de desarrollo para compilar o probar localmente.

## INC-003 — Inicialización del adaptador Prisma PostgreSQL

- **Sprint:** 1
- **Estado:** resuelta
- **Síntoma:** fallos E2E después de actualizar o alinear Prisma.
- **Causa:** API de inicialización del adaptador incompatible y versiones desalineadas.
- **Resolución:** alinear paquetes Prisma a 7.9.1 y usar `new PrismaPg({ connectionString })`.
- **Prevención:** actualizar CLI, client y adapter juntos; ejecutar `prisma validate`, build y E2E.

## INC-004 — Vulnerabilidades npm transitivas

- **Sprint:** 1
- **Estado:** resuelta para producción al cierre; seguimiento continuo para desarrollo.
- **Síntoma:** auditorías con vulnerabilidades bajas, moderadas, altas y críticas.
- **Resolución:** aplicar actualizaciones compatibles y `npm audit fix` sin `--force`, seguido de verificaciones completas.
- **Prevención:** auditar por aplicación antes de cerrar cada sprint y separar producción de desarrollo.

## Plantilla

### INC-NNN — Título

- **Sprint:**
- **Estado:** abierta / mitigada / resuelta
- **Síntoma:**
- **Impacto:**
- **Causa raíz:**
- **Diagnóstico:**
- **Resolución:**
- **Archivos modificados:**
- **Pruebas:**
- **Prevención:**
