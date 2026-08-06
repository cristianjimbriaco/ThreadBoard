# Estrategia de pruebas

## Objetivo

Detectar regresiones en reglas de negocio, persistencia, contratos de API y construcción de las aplicaciones antes de integrar un sprint.

## Pirámide prevista

### Pruebas unitarias

Aplicables a servicios y reglas aisladas:

- validación de pertenencia al tablero;
- creación y eliminación de conexiones;
- transformación de datos de grafo;
- manejo de recursos inexistentes;
- servicios de escenas y teorías.

### Pruebas de integración/E2E

Aplicables al flujo HTTP con base de datos de prueba:

- crear y consultar Board;
- crear Node dentro de Board;
- asociar Scene o Theory;
- actualizar posición;
- crear Connection válida;
- rechazar Connection inválida;
- recuperar Graph y Graph View;
- eliminar y verificar dependencias.

### Pruebas de frontend

Durante Sprint 1 la verificación registrada fue principalmente de formato, lint, build y prueba manual de interacción. A partir del Sprint 2 se recomienda agregar pruebas de componentes y flujos críticos.

### Pruebas manuales

- colección Postman;
- interacción de arrastre;
- zoom y paneo;
- mensajes de error;
- persistencia después de recargar;
- comportamiento en estados vacíos.

## Entornos

- Desarrollo local.
- Base de datos de prueba separada para E2E.
- Entorno de despliegue futuro.

## Datos de prueba

Los tests deben crear y limpiar sus propios datos. No deben depender de identificadores copiados manualmente ni de una base compartida con desarrollo.

## Verificaciones mínimas por cierre

### Backend

```bash
npm audit --omit=dev
npx prisma validate
npm run build
npm test
npm run test:e2e
```

### Frontend

```bash
npm audit --omit=dev
npm run format
npm run lint
npm run build
```

## Evidencias

Cada informe de sprint debe registrar:

- comando ejecutado;
- resultado;
- fecha;
- error corregido, si existió;
- captura o log cuando sea relevante.
