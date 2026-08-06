# Registro de riesgos

| ID | Riesgo | Probabilidad | Impacto | Respuesta |
|---|---|---:|---:|---|
| R-01 | Desalineación entre contratos de API y necesidades del frontend. | Media | Alta | Documentar DTO, respuestas y errores; integrar por casos de uso pequeños. |
| R-02 | Modelo de nodos insuficiente para futuras entidades. | Media | Alta | Mantener Node como base y registrar cambios mediante ADR y migraciones. |
| R-03 | Conexiones inválidas entre tableros o tipos incompatibles. | Media | Alta | Validar en servicio backend y cubrir con E2E. |
| R-04 | Pérdida de posiciones o inconsistencias al arrastrar. | Media | Media | Persistir al finalizar el movimiento y manejar reintentos/errores. |
| R-05 | Rendimiento deficiente con grafos grandes. | Media | Media | Definir escenarios de carga y medir desde Sprint 5. |
| R-06 | Vulnerabilidades transitivas de npm. | Alta | Media | Auditar producción en cada cierre; actualizar sin `--force` salvo análisis explícito. |
| R-07 | Cambios mayores de Prisma o React Flow. | Media | Media | Fijar versiones, actualizar por separado y validar migraciones/build. |
| R-08 | Documentación desactualizada. | Alta | Alta | Incluir documentación en la definición de terminado. |
| R-09 | Alcance excesivo por funciones de comunidad o IA. | Alta | Alta | Mantenerlas fuera del MVP hasta validar el flujo central. |
| R-10 | Dependencia de un único desarrollador. | Alta | Media | Automatizar verificaciones y mantener instrucciones reproducibles. |

## Seguimiento

Los riesgos deben revisarse al inicio y cierre de cada sprint. Un riesgo que se materializa pasa también al registro de incidencias y puede generar deuda técnica o una nueva decisión arquitectónica.
