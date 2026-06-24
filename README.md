# Tarea 7 - JavaScript

Ejercicios de JavaScript. Todo el código está en `front/dist/js/script.js` y se ejecuta junto al abrir `front/index.html`. Cada ejercicio está separado con un `console.log` y comentarios.

## Ejercicio 1 - El Rastro del Código

La consigna pedía elegir un valor mayor a 30 y otro menor a 15. Elegí el array `[12, 35]`.

Seguimiento de la variable `result`:

- `result` arranca en 10.
- Con el 12: `procesar(12)` -> 12 no es mayor a 15, entonces devuelve 12 + 5 = 17. Como 17 no es mayor a 30, se resta: result = 10 - 17 = -7.
- Con el 35: `procesar(35)` -> 35 sí es mayor a 15, entonces devuelve (35 * 2) + 5 = 75. Como 75 es mayor a 30, se suma: result = -7 + 75 = 68.

Resultado final que imprime la consola: 68

## Ejercicio 2 - El Repasador de Precios

Array de objetos `bibliotecaSteam` y función flecha `mostrarJuego` que muestra el precio y avisa "¡Oferta!" si es menor a 500.

## Ejercicio 3 - El Gestor de Servidores

Array `servidores`, función flecha `verificarEstado` con un switch para los usuarios, un while que simula el escaneo del 1 al 3 y un forEach que solo evalúa los servidores online.

## Ejercicio 4 - Boss Fight

Variable global `hp = 1000`. Cada click en el botón "Atacar" resta 50 y actualiza el `<h2>` con innerText. Al llegar a 0 muestra "¡Jefe Derrotado!". 

WIP: Deshabilitar el botón. Al seguir clickeando no pasa nada pero lo pide la letra de la tarea.
