# Diseño de interfaz

## Objetivo de la interfaz

Ofrecer una superficie visual que permita comprender y modificar relaciones narrativas sin depender de listas o formularios extensos.

## Layout del Sprint 1

```text
┌─────────────────────────────────────────────────────────┐
│ Sidebar                     Canvas React Flow           │
│                                                         │
│ Acciones / información      Nodos de demostración       │
│                             Zoom / pan / selección       │
│                             Controles del canvas         │
└─────────────────────────────────────────────────────────┘
```

## Funcionalidad implementada

- Sidebar base.
- Canvas mediante `@xyflow/react`.
- Nodos mock `Opening Scene` y `Hidden Connection`.
- Selección de nodos.
- Arrastre.
- Zoom.
- Paneo.
- Controles visuales.

## Limitaciones actuales

- Los nodos se definen localmente.
- Las posiciones solo viven en memoria durante la sesión.
- No se consulta `/graph-view/:boardId`.
- No existen formularios reales de escena o teoría.
- No se crean ni eliminan conexiones desde la interfaz.
- No hay estados de carga, vacío o error conectados a backend.

## Principios de diseño

1. La acción principal debe ocurrir sobre el canvas.
2. La información secundaria debe aparecer en paneles sin ocultar innecesariamente el grafo.
3. Los tipos de nodo deben distinguirse claramente.
4. Las acciones destructivas deben pedir confirmación.
5. Los errores de persistencia deben ser visibles y recuperables.
6. La posición visual debe representar siempre el estado persistido conocido.

## Trabajo para Sprint 2

- Selector o lista de tableros.
- Carga del grafo real.
- Formularios de creación.
- Panel de detalles.
- Persistencia de movimiento.
- eliminación de nodos.
- estados de carga y mensajes de error.

## Evidencias

Las capturas del canvas deben guardarse en `docs/evidencias/capturas/sprint-01/` con nombres descriptivos y referencia desde el informe del sprint.
