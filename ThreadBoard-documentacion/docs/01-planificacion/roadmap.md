# Roadmap de desarrollo

El roadmap original se conserva, pero sus entregables se ajustan al estado real del proyecto. Las fechas son estimaciones, no compromisos públicos.

## Sprint 0 — Preparación

**Estado:** completado.

**Objetivo:** dejar el repositorio y las decisiones básicas listos para desarrollar.

**Resultado real:**

- monorepo con backend, frontend y documentación;
- stack definitivo seleccionado;
- configuración de Git, finales de línea, Node y variables de entorno;
- arquitectura y modelo inicial;
- roadmap inicial.

## Sprint 1 — Base del producto

**Estado:** completado el 3 de agosto de 2026.

**Objetivo:** disponer del esqueleto técnico y de una primera interacción visual.

**Resultado real:**

- backend persistente con entidades y endpoints principales;
- vistas de grafo;
- pruebas backend;
- colección Postman;
- layout frontend con canvas React Flow;
- nodos mock, arrastre, selección, zoom y paneo.

**Diferencia respecto al plan inicial:** la integración frontend-backend y la persistencia desde el canvas no quedaron dentro del Sprint 1.

## Sprint 2 — Escenas y teorías reales

**Estado:** pendiente.

**Objetivo:** permitir que el usuario cree y manipule contenido real desde la interfaz.

**Alcance previsto:**

- conexión del frontend con la API;
- carga del grafo real;
- formulario de escena;
- formulario de teoría;
- vista de detalle;
- edición y eliminación;
- persistencia de posiciones;
- estados de carga y error.

**Entregable:** canvas alimentado por datos reales con creación y edición básicas.

## Sprint 3 — Conexiones visuales

**Objetivo:** completar el núcleo conceptual del producto.

- crear conexión desde el canvas;
- persistirla;
- renderizar líneas reales;
- editar descripción;
- eliminar conexión;
- validar reglas de negocio desde frontend y backend.

## Sprint 4 — Onboarding y primera experiencia

- tablero de ejemplo;
- ayuda contextual;
- flujo inicial entendible;
- mejoras de usabilidad.

## Sprint 5 — Estabilidad y refinamiento

- validaciones completas;
- manejo consistente de errores;
- mejor retroalimentación visual;
- rendimiento del canvas;
- revisión de accesibilidad;
- posible deshacer básico.

## Sprint 6 — Despliegue y usuarios reales

- base de datos en la nube;
- despliegue de backend y frontend;
- dominio y configuración segura;
- observabilidad mínima;
- feedback de usuarios iniciales.

## Criterio de actualización

Al finalizar cada sprint, reemplazar el alcance previsto por el resultado real, registrar lo trasladado y explicar cualquier desviación relevante.
