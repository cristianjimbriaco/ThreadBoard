# Despliegue

**Estado:** no implementado. Documento preparado para el Sprint 6.

## Arquitectura prevista

- Frontend estático React/Vite.
- Backend Node/NestJS.
- PostgreSQL administrado.
- Variables de entorno separadas por ambiente.
- HTTPS.

## Decisiones pendientes

- proveedor de frontend;
- proveedor de backend;
- proveedor PostgreSQL;
- dominio;
- estrategia de migraciones;
- logs y monitoreo;
- backups;
- política de CORS;
- secretos;
- límites y protección de la API.

## Checklist futuro

- [ ] build reproducible.
- [ ] migraciones probadas.
- [ ] variables configuradas.
- [ ] CORS limitado al frontend.
- [ ] HTTPS.
- [ ] auditoría de producción.
- [ ] logs sin secretos.
- [ ] health check.
- [ ] backup y restauración probados.
- [ ] rollback documentado.
