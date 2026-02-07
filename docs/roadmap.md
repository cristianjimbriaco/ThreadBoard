# 📍 Roadmap de Desarrollo - Threadboard

Este documento detalla el plan de ejecución y los objetivos por fases para el desarrollo de **Threadboard**.

# 📍 Roadmap de Desarrollo - Threadboard

## 🛠️ Stack Tecnológico
![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)

---

## 🏗️ Sprint 0 — Preparación
**Duración:** 2-3 días  
**Objetivo:** Dejar todo listo para desarrollar sin fricción.

### Tareas
* **Repositorio:** Creación del repo oficial.
* **Stack final:**
    * Next.js + React + TS
    * Node + Express
    * PostgreSQL
* **Setup básico:**
    * Configuración de ESLint / Prettier.
    * Gestión de variables de entorno (`.env`).
* **Diseño:** Wireframes finales a mano.

**Entregables:**
- [x] Repo listo.
- [x] Decisiones técnicas cerradas.

---

## 🦴 Sprint 1 — Base del producto (Esqueleto funcional)
**Duración:** 1–2 semanas  
**Objetivo:** Ver un tablero en pantalla que se pueda usar, aunque sea feo.

### Tareas
* **Frontend:**
    * Layout base (canvas + sidebar).
    * Renderizar nodos mockeados.
    * Drag & drop de nodos.
    * Zoom / pan básico.
* **Backend:**
    * Crear entidades: `Board`, `Node`, `Scene`, `Theory`, `Connection`.
    * Endpoints CRUD básicos.
    * Conexión a base de datos.

**Entregables:**
- Tablero visible.
- Nodos movibles.
- Datos persistidos.

---

## 📝 Sprint 2 — Escenas y teorías reales
**Duración:** 1–2 semanas  
**Objetivo:** Que el usuario pueda crear contenido propio.

### Tareas
* Crear escena (formulario simple).
* Crear teoría.
* Guardar posiciones en el canvas.
* Ver detalle de escena / teoría.
* Eliminar nodos.

**Entregables:**
- Crear y editar nodos reales.
- Canvas refleja datos reales de la DB.

---

## 🟢 Sprint 3 — Conexiones (El corazón)
**Duración:** 1 semana  
**Objetivo:** Alcanzar el *aha moment* del producto.

### Tareas
* Crear conexión mediante drag.
* Guardar conexión en DB.
* Renderizar líneas de unión.
* Editar descripción de conexión.
* Eliminar conexión.

**Entregables:**
- Escenas y teorías conectadas.
- El producto empieza a “tener sentido”.

---

## 🟢 Sprint 4 — Onboarding + primera experiencia
**Duración:** 1 semana  
**Objetivo:** Que un usuario nuevo entienda y se enganche.

### Tareas
* Generación de tablero de ejemplo automático.
* Implementación de tooltips contextuales.
* Lógica para eliminar ejemplo al crear nodos propios.
* Primera UX pulida (usable y funcional).

**Entregables:**
- [x] Onboarding sin fricción.
- [x] Primer “wow” del usuario.

---

## 🟢 Sprint 5 — Estabilidad y polish
**Duración:** 1 semana  
**Objetivo:** Que la aplicación no se sienta frágil.

### Tareas
* Validaciones de datos.
* Manejo de errores amigable.
* Sistema de "Undo" (deshacer) básico.
* Mejor feedback visual.
* Optimización de performance del canvas.

**Entregables:**
- App estable.
- Lista para usuarios reales.

---

## 🚀 Sprint 6 — Deploy + usuarios reales
**Duración:** 3–5 días  
**Objetivo:** Que la app exista en el mundo.

### Tareas
* Deploy del Frontend.
* Deploy del Backend.
* Configuración de DB en la nube.
* Configuración de dominio.
* Recolección de feedback de primeros usuarios.

**Entregables:**
- Threadboard online.
- Usuarios reales interactuando con la plataforma.