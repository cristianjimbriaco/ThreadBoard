# Documentación de ThreadBoard

Esta carpeta constituye la fuente documental versionada del proyecto. Su finalidad es conservar la trazabilidad entre la idea original, las decisiones de ingeniería, el código implementado, las pruebas y la evolución por sprints.

## Estado documental

- Planificación inicial: consolidada.
- Sprint 0: documentado retrospectivamente.
- Sprint 1: documentado y cerrado.
- Sprint 2: preparado mediante plantilla, todavía no iniciado en esta línea base.
- Cierre del MVP: documentos creados como estructura pendiente de completar.

## Índice

### Documento maestro

- [Documento maestro de ingeniería](00-documento-maestro.md)
- [Glosario](glosario.md)
- [Fuentes y limitaciones](FUENTES_Y_LIMITACIONES.md)
- [Documento Maestro en Word](formal/Documento_Maestro_ThreadBoard_Sprint_1.docx)

### 1. Planificación

- [Visión y objetivos](01-planificacion/vision-y-objetivos.md)
- [Alcance del MVP](01-planificacion/alcance-mvp.md)
- [Requisitos](01-planificacion/requisitos.md)
- [Casos de uso](01-planificacion/casos-de-uso.md)
- [Roadmap](01-planificacion/roadmap.md)
- [Riesgos](01-planificacion/riesgos.md)

### 2. Diseño

- [Arquitectura](02-diseno/arquitectura.md)
- [Modelo de datos](02-diseno/modelo-de-datos.md)
- [API](02-diseno/api.md)
- [Interfaz](02-diseno/interfaz.md)

### 3. Desarrollo

- [Sprint 0](03-desarrollo/sprint-00.md)
- [Sprint 1](03-desarrollo/sprint-01.md)
- [Plantilla de sprint](03-desarrollo/plantilla-sprint.md)
- [Registro de incidencias](03-desarrollo/registro-incidencias.md)

### 4. Decisiones arquitectónicas

- [Índice de ADR](04-decisiones/README.md)
- [ADR-001: stack tecnológico](04-decisiones/ADR-001-stack-tecnologico.md)
- [ADR-002: estructura de monorepo](04-decisiones/ADR-002-monorepo.md)
- [ADR-003: React con Vite](04-decisiones/ADR-003-frontend-react-vite.md)
- [ADR-004: PostgreSQL con Prisma](04-decisiones/ADR-004-prisma-postgresql.md)
- [ADR-005: modelo de nodos](04-decisiones/ADR-005-modelo-nodos.md)
- [Plantilla de ADR](04-decisiones/plantilla-adr.md)

### 5. Pruebas

- [Estrategia de pruebas](05-pruebas/estrategia-de-pruebas.md)
- [Resultados del Sprint 1](05-pruebas/resultados-sprint-01.md)
- [Lista de cierre de sprint](05-pruebas/checklist-cierre-sprint.md)

### 6. Operación

- [Instalación de desarrollo](06-operacion/instalacion-desarrollo.md)
- [Configuración del entorno](06-operacion/configuracion-entorno.md)
- [Despliegue](06-operacion/despliegue.md)

### 7. Cierre

- [Evaluación final](07-cierre/evaluacion-final.md)
- [Deuda técnica](07-cierre/deuda-tecnica.md)
- [Conclusiones](07-cierre/conclusiones.md)

### Evidencias y API

- [Organización de evidencias](evidencias/README.md)
- [Colección Postman del Sprint 1](api/ThreadBoard_API_Sprint_1.postman_collection.json)

## Regla de mantenimiento

La documentación debe actualizarse en la misma rama que introduce el cambio. No se debe cerrar un sprint si el informe, el changelog y los documentos técnicos afectados siguen describiendo un estado anterior.
