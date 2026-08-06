# Guía de contribución

Aunque ThreadBoard se desarrolla actualmente como proyecto personal, estas normas mantienen el historial claro y preparan el repositorio para futuras colaboraciones.

## Ramas

- `main`: versiones estables o publicables.
- `develop`: integración de sprints terminados y verificados.
- `sprint-N`: trabajo consolidado del sprint en curso.
- `feature/<nombre>`: funcionalidad aislada.
- `fix/<nombre>`: corrección de error.
- `chore/<nombre>`: configuración, dependencias o mantenimiento.
- `docs/<nombre>`: cambios exclusivamente documentales.

Las ramas auxiliares se crean desde la rama del sprint y se integran nuevamente en ella. Al cerrar un sprint, `sprint-N` se integra en `develop`. `main` solo recibe una versión global probada.

## Convención de commits

Usar mensajes breves en presente y con un prefijo coherente:

```text
feat: add board creation endpoint
fix: restore jest type definitions
refactor: simplify prisma service
chore: update repository baseline
docs: document Sprint 1 closure
test: add connection e2e coverage
```

## Flujo recomendado

```bash
git switch sprint-N
git pull --ff-only origin sprint-N
git switch -c feature/nombre-descriptivo
```

Después de implementar y verificar:

```bash
git status
git add <archivos>
git commit -m "feat: describe the change"
git push -u origin feature/nombre-descriptivo
```

La integración debe realizarse mediante pull request cuando sea posible.

## Criterios antes de integrar

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

## Documentación obligatoria

Cada cambio relevante debe actualizar al menos uno de estos elementos:

- Informe del sprint.
- `CHANGELOG.md`.
- Documento de API, arquitectura o modelo de datos.
- ADR cuando se tome una decisión difícil de revertir.
- Registro de incidencias cuando el problema pueda repetirse.

## Definición de terminado

Una tarea se considera terminada cuando:

1. Cumple sus criterios de aceptación.
2. El código compila.
3. Las pruebas relacionadas pasan.
4. No introduce vulnerabilidades de producción conocidas.
5. La documentación afectada está actualizada.
6. Los cambios están integrados en la rama correcta.
