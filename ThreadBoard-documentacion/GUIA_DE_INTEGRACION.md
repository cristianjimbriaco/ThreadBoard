# Guía para integrar esta documentación

Este paquete está preparado para copiarse sobre la raíz del repositorio ThreadBoard.

## 1. Revisar el contenido

Antes de copiarlo, conserva una copia del README actual por seguridad:

```powershell
Copy-Item README.md README.backup.md
```

## 2. Copiar los archivos

Copia a la raíz del repositorio:

- `README.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- la carpeta completa `docs/`

La colección Postman quedará en:

```text
docs/api/ThreadBoard_API_Sprint_1.postman_collection.json
```

## 3. Verificar enlaces y estado

Desde la raíz del repositorio:

```powershell
git status
git diff -- README.md CHANGELOG.md CONTRIBUTING.md docs
```

## 4. Crear una rama documental

```powershell
git switch develop
git pull --ff-only origin develop
git switch -c docs/project-documentation-baseline
```

## 5. Registrar los archivos

```powershell
git add README.md CHANGELOG.md CONTRIBUTING.md docs
git commit -m "docs: add project documentation baseline"
git push -u origin docs/project-documentation-baseline
```

## 6. Integrar mediante pull request

Crea un pull request desde `docs/project-documentation-baseline` hacia `develop`. Revisa especialmente:

- Que el estado del Sprint 1 coincida con el repositorio.
- Que los comandos de `package.json` tengan exactamente los nombres documentados.
- Que el modelo Prisma vigente coincida con `docs/02-diseno/modelo-de-datos.md`.
- Que cualquier endpoint implementado pero ausente en Postman se agregue también a la documentación.

## 7. Uso desde el Sprint 2

Al iniciar el Sprint 2:

1. Copia `docs/03-desarrollo/plantilla-sprint.md` como `sprint-02.md`.
2. Completa objetivo, alcance, criterios y riesgos antes de programar.
3. Registra decisiones nuevas como ADR.
4. Añade incidencias relevantes al registro.
5. Actualiza el informe al cerrar cada bloque de trabajo.
