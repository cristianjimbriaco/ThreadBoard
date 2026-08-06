# Resultados de pruebas — Sprint 1

| Área | Verificación | Resultado de cierre |
|---|---|---|
| Backend | Auditoría de producción | Aprobada; cero vulnerabilidades documentadas |
| Backend | `prisma validate` | Aprobada |
| Backend | Build | Aprobado |
| Backend | Pruebas unitarias Jest | Aprobadas |
| Backend | Pruebas E2E | Aprobadas |
| Backend | Colección Postman | Verificada |
| Frontend | Auditoría de producción | Aprobada |
| Frontend | Formato | Aprobado |
| Frontend | Lint | Aprobado |
| Frontend | Build | Aprobado |
| Frontend | Arrastre/selección/zoom/pan | Verificado manualmente |
| Integración | Consumo de API desde frontend | No aplica; pendiente Sprint 2 |

## Cobertura funcional de Postman

- Boards: crear, listar, consultar y eliminar.
- Nodes: crear por tipo, listar por tablero, mover y eliminar.
- Scenes: crear, listar, consultar y editar.
- Theories: crear, listar, consultar y editar.
- Connections: crear, listar y eliminar.
- Graph: datos internos.
- Graph View: formato React Flow.

## Incidencias detectadas durante la verificación

- tipos de Jest ausentes;
- incompatibilidad o desalineación de Prisma;
- vulnerabilidades npm;
- configuración de salida de producción del backend.

Todas quedaron resueltas o mitigadas hasta permitir el cierre. Las salidas completas no están incluidas en este paquete y deben guardarse como evidencia cuando se repitan verificaciones futuras.
