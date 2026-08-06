# Configuración del entorno

## Node.js

El repositorio contiene `.nvmrc` para fijar la línea de Node utilizada por el proyecto. El entorno registrado durante Sprint 1 fue Node.js 22.16.0 y npm 10.9.2.

## Variables de backend

Archivo de ejemplo: `backend/.env.example`.

Variable esencial:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

No se deben versionar credenciales reales.

## Variables futuras de frontend

Cuando se implemente la integración:

```env
VITE_API_URL="http://localhost:3000"
```

El nombre exacto deberá coincidir con el código del Sprint 2.

## Finales de línea y editor

- `.gitattributes` normaliza los archivos de texto.
- `.editorconfig` define UTF-8, espacios, sangría y línea final.
- Scripts de Windows pueden conservar CRLF cuando la regla lo determine.

## Base de datos

Recomendaciones:

- una base de desarrollo;
- una base separada para E2E;
- usuario con permisos limitados cuando llegue producción;
- migraciones versionadas;
- no usar la base productiva para pruebas.

## Seguridad

- Auditar dependencias de producción por aplicación.
- No aplicar `npm audit fix --force` sin revisar cambios mayores.
- No subir `.env`.
- Rotar credenciales si se publican accidentalmente.
