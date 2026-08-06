# Sprint 1 — Base del producto

| Campo | Valor |
|---|---|
| Estado | Completado y cerrado |
| Fecha de cierre documentada | 3 de agosto de 2026 |
| Rama principal | `sprint-1` |
| Integración | `sprint-1` → `develop` |
| Objetivo | Construir la base persistente y una primera experiencia visual del tablero |

## 1. Objetivo original

Mostrar un tablero utilizable, aunque todavía no estuviera refinado, con nodos movibles y una base backend persistente.

## 2. Resultado real

El Sprint 1 produjo dos bases complementarias:

- un backend funcional y probado para el dominio principal;
- un frontend visual interactivo con datos locales.

La integración entre ambos se aplazó al Sprint 2 para cerrar el sprint con una línea técnica estable.

## 3. Backend implementado

- Boards.
- Nodes.
- Scenes.
- Theories.
- Connections.
- Graph.
- Graph View compatible con React Flow.
- PostgreSQL mediante Prisma.
- DTO y validaciones.
- Pruebas unitarias.
- Pruebas E2E.
- Colección Postman.

## 4. Frontend implementado

- Layout con sidebar.
- Canvas usando `@xyflow/react`.
- Nodos mock `Opening Scene` y `Hidden Connection`.
- Arrastre de nodos.
- Selección.
- Zoom y paneo.
- Controles del canvas.

## 5. Trabajo de mantenimiento del repositorio

- `.editorconfig`.
- `.gitattributes`.
- `.gitignore`.
- `.nvmrc`.
- `backend/.env.example`.
- Normalización de archivos de dependencias.

La rama `chore/repository-baseline` se integró en `sprint-1` y posteriormente se eliminó localmente.

## 6. Incidencias relevantes

### INC-001 — Backend de producción no encontraba el archivo principal

**Síntoma:** `npm run start:prod` buscaba `dist/main`, mientras la salida del build no coincidía con esa ruta.

**Tratamiento:** se revisó la configuración de compilación y el script de producción hasta alinear la salida generada con el punto de entrada ejecutado.

**Resultado:** build y ejecución de producción quedaron verificables. El cambio exacto debe mantenerse reflejado en los archivos actuales de configuración.

### INC-002 — Tipos de Jest ausentes

**Síntoma:** `TS2688: Cannot find type definition file for 'jest'`.

**Causa:** `tsconfig.json` incluía `node` y `jest`, pero los tipos de Jest no estaban instalados físicamente después de una instalación sin dependencias de desarrollo.

**Solución:** restaurar dependencias de desarrollo con `npm install --include=dev`; comprobar `@types/jest` y, de ser necesario, instalarlo como dependencia de desarrollo. Después se repitieron build, pruebas unitarias y E2E.

### INC-003 — Compatibilidad de Prisma 7

**Síntoma:** desalineación entre Prisma CLI, cliente y adaptador, además de una inicialización incompatible del adaptador PostgreSQL.

**Solución:** alinear `prisma`, `@prisma/client` y `@prisma/adapter-pg` en 7.9.1. `PrismaService` pasó a crear `PrismaPg` mediante `{ connectionString }`, eliminando la gestión manual del `Pool` y conservando `$disconnect()`.

**Resultado:** las pruebas E2E volvieron a pasar.

### INC-004 — Auditorías de dependencias

Se analizaron vulnerabilidades de backend y frontend. Las correcciones se aplicaron sin `--force`, seguidas de build, pruebas y nuevas auditorías. El cierre documentado registró cero vulnerabilidades de producción.

## 7. Verificaciones de cierre

### Backend

- `npm audit --omit=dev`: aprobado al cierre.
- `npx prisma validate`: aprobado.
- `npm run build`: aprobado.
- pruebas Jest: aprobadas.
- pruebas E2E: aprobadas.
- colección Postman: verificada.

### Frontend

- auditoría de producción: aprobada.
- formato: aprobado.
- lint: aprobado.
- build: aprobado.

## 8. Criterios de aceptación

| Criterio | Resultado |
|---|---|
| API de recursos principales disponible | Cumplido |
| Persistencia PostgreSQL | Cumplido |
| Grafo recuperable | Cumplido |
| Canvas visible | Cumplido |
| Nodos movibles | Cumplido localmente |
| Zoom y paneo | Cumplido |
| Frontend conectado a datos reales | Trasladado a Sprint 2 |
| Posiciones persistidas desde frontend | Trasladado a Sprint 2 |

## 9. Deuda trasladada

- Integrar frontend con `/graph-view/:boardId`.
- Crear escenas y teorías desde formularios.
- Persistir movimiento del canvas.
- Crear y eliminar conexiones visualmente.
- Reconciliar campos definitivos de Scene y Theory.
- Completar estados de carga, error y vacío.
- Agregar evidencias visuales al repositorio.

## 10. Conclusión

El Sprint 1 queda cerrado porque las dos aplicaciones compilan, las verificaciones definidas pasan y la rama se integró en `develop`. El producto todavía no es una experiencia completa para usuario final, pero dispone de una base técnica suficiente para comenzar el Sprint 2 sin reabrir el alcance del sprint anterior.
