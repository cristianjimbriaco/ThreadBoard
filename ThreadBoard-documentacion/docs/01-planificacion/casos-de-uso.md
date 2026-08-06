# Casos de uso principales

## CU-01 — Crear tablero

**Actor:** usuario.

**Precondición:** aplicación disponible.

**Flujo principal:**

1. El usuario selecciona crear tablero.
2. El sistema muestra el formulario.
3. El usuario introduce título y descripción.
4. El usuario guarda.
5. El sistema valida los datos.
6. El sistema crea el tablero y confirma el resultado.

**Flujo alterno:** si un campo es inválido, el sistema informa el error y conserva el formulario para corrección.

## CU-02 — Abrir tablero

**Precondición:** existe al menos un tablero.

1. El sistema muestra la lista de tableros.
2. El usuario selecciona uno.
3. El sistema recupera nodos y conexiones.
4. El sistema representa el grafo en el canvas.

## CU-03 — Crear escena

**Precondición:** el usuario se encuentra dentro de un tablero.

1. El usuario selecciona crear escena.
2. El sistema muestra el formulario.
3. El usuario completa los datos disponibles.
4. El sistema crea un nodo de tipo escena.
5. El sistema crea el contenido de escena asociado.
6. El nuevo nodo aparece en el canvas.

**Regla:** la escena debe disponer al menos del contenido mínimo que establezca la validación vigente.

## CU-04 — Crear teoría

1. El usuario selecciona crear teoría.
2. El sistema muestra el formulario.
3. El usuario introduce título, hipótesis, análisis u otros campos vigentes.
4. El sistema crea un nodo de tipo teoría.
5. El sistema crea la teoría asociada.
6. El nodo aparece en el canvas.

## CU-05 — Mover nodo

1. El usuario arrastra un nodo.
2. El canvas actualiza su posición visual.
3. Al finalizar el movimiento, el frontend envía las coordenadas a la API.
4. El backend valida y persiste la posición.
5. Al volver a abrir el tablero, el nodo aparece en la misma posición.

**Estado:** interacción local implementada; persistencia desde frontend pendiente.

## CU-06 — Crear conexión

**Precondición:** existen al menos dos nodos compatibles en el mismo tablero.

1. El usuario inicia una conexión desde un nodo.
2. Arrastra hasta el nodo destino.
3. El sistema valida que ambos pertenezcan al mismo tablero.
4. El sistema crea la conexión.
5. La línea aparece en el canvas.
6. Opcionalmente, el usuario agrega una descripción.

## CU-07 — Eliminar nodo

1. El usuario selecciona un nodo.
2. Solicita eliminarlo.
3. El sistema solicita confirmación.
4. El backend elimina el nodo y sus conexiones dependientes.
5. El canvas actualiza el grafo.

## CU-08 — Ver detalle

1. El usuario selecciona una escena o teoría.
2. El sistema identifica su tipo.
3. Recupera el contenido asociado.
4. Muestra el detalle.
5. El usuario cierra o edita la información.
