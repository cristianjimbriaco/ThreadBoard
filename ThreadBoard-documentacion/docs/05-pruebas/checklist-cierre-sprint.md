# Checklist de cierre de sprint

## Código y alcance

- [ ] Todas las historias comprometidas tienen resultado registrado.
- [ ] Los elementos no terminados fueron trasladados explícitamente.
- [ ] No quedan cambios locales sin identificar.
- [ ] No hay archivos generados accidentalmente en Git.

## Backend

- [ ] `npm audit --omit=dev` revisado.
- [ ] `npx prisma validate` aprobado.
- [ ] migraciones revisadas.
- [ ] `npm run build` aprobado.
- [ ] `npm test` aprobado.
- [ ] `npm run test:e2e` aprobado.
- [ ] Postman actualizado.

## Frontend

- [ ] `npm audit --omit=dev` revisado.
- [ ] formato aprobado.
- [ ] lint aprobado.
- [ ] build aprobado.
- [ ] flujos principales probados manualmente.
- [ ] estados de error revisados.

## Documentación

- [ ] informe del sprint actualizado.
- [ ] changelog actualizado.
- [ ] API/modelo/arquitectura actualizados.
- [ ] ADR creados o actualizados.
- [ ] incidencias registradas.
- [ ] deuda técnica actualizada.
- [ ] evidencias organizadas.

## Git

- [ ] rama del sprint sincronizada.
- [ ] pull request revisado.
- [ ] integración en `develop` completada.
- [ ] `develop` actualizado localmente.
- [ ] rama local eliminada cuando corresponda.
- [ ] `git status` limpio.

## Declaración de cierre

- [ ] El sprint puede declararse cerrado sin depender de trabajo oculto o no documentado.
