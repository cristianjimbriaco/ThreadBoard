# Requisitos del sistema

## Requisitos funcionales

| ID | Requisito | Estado al Sprint 1 |
|---|---|---|
| RF-01 | El sistema debe permitir crear un tablero. | Backend implementado |
| RF-02 | El sistema debe listar y consultar tableros. | Backend implementado |
| RF-03 | El sistema debe permitir eliminar un tablero. | Backend implementado |
| RF-04 | El sistema debe crear nodos de tipo escena o teoría dentro de un tablero. | Backend implementado |
| RF-05 | El sistema debe conservar la posición X/Y de cada nodo. | Backend implementado; frontend pendiente de integración |
| RF-06 | El sistema debe crear y editar escenas asociadas a nodos. | Backend implementado; interfaz pendiente |
| RF-07 | El sistema debe crear y editar teorías asociadas a nodos. | Backend implementado; interfaz pendiente |
| RF-08 | El sistema debe crear conexiones entre nodos del mismo tablero. | Backend implementado; interfaz visual pendiente |
| RF-09 | El sistema debe eliminar conexiones. | Backend implementado |
| RF-10 | El sistema debe recuperar el grafo completo de un tablero. | Implementado |
| RF-11 | El frontend debe mostrar nodos sobre un canvas interactivo. | Implementado con datos locales |
| RF-12 | El usuario debe poder arrastrar nodos, hacer zoom y desplazar el canvas. | Implementado con datos locales |
| RF-13 | El frontend debe consumir la API para mostrar datos reales. | Pendiente Sprint 2 |
| RF-14 | El frontend debe crear escenas y teorías mediante formularios. | Pendiente Sprint 2 |

## Requisitos no funcionales

| ID | Requisito | Criterio |
|---|---|---|
| RNF-01 | Mantenibilidad | Código separado por dominios y documentación versionada. |
| RNF-02 | Integridad | No deben existir conexiones entre nodos de tableros diferentes. |
| RNF-03 | Validación | Los datos de entrada deben validarse antes de llegar a persistencia. |
| RNF-04 | Trazabilidad | Los cambios relevantes deben asociarse a commits, sprints y decisiones. |
| RNF-05 | Calidad | Backend y frontend deben compilar antes de integrar un sprint. |
| RNF-06 | Pruebas | Los servicios críticos deben tener pruebas unitarias o E2E. |
| RNF-07 | Seguridad de dependencias | La auditoría de producción no debe conservar vulnerabilidades conocidas sin justificación. |
| RNF-08 | Compatibilidad | El entorno objetivo utiliza Node.js 22.x y npm 10.x. |
| RNF-09 | Usabilidad | La interacción principal debe apoyarse en acciones visuales directas. |
| RNF-10 | Rendimiento | El canvas debe seguir siendo utilizable con una cantidad creciente de nodos; el umbral se definirá con pruebas futuras. |

## Reglas de negocio

1. Todo nodo pertenece a un tablero.
2. El tipo del nodo determina si puede asociarse a una escena o una teoría.
3. Una conexión relaciona un nodo de origen y uno de destino.
4. Ambos nodos de una conexión deben pertenecer al mismo tablero.
5. Eliminar un nodo elimina o invalida sus conexiones asociadas.
6. La posición del nodo es parte del estado persistente.
7. Durante el MVP no existe autenticación ni propiedad por usuario.
