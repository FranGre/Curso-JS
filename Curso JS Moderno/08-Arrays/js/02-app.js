"use strict";

// Acceder a valores del array, un array comienza por la posicion 0

const array = [10, 20, 30, 40, [50, 60, 70], 80, 90, 100];

console.log(array);

// Para acceder al valor 10
console.log(array[0]);

// Para acceder al valor 40
console.log(array[3]);

// Para acceder al valor 60
console.log(array[4][1]);

// Para acceder al último valor -> 100
console.log(array[array.length - 1]);
