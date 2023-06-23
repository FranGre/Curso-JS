// Declarar arrays

"use strict";

// Los arrays empiezan por 0.
// Posicion 0 -> Enero
// Posicion 1 -> Febrero
const numeros = [1, 2, 3, 4];

// Esta forma casi no se usa
const mesesAnyo = new Array("Enero", "Febrero", "Marzo");

console.log(numeros);
console.log(mesesAnyo);

// Los arrays en JS pueden contener datos de todo tipo, inlcuso array dentro de array

const arrayMixto = [
  "fran",
  1.8,
  "piel morena",
  90,
  "¿ojos azules?",
  false,
  ["peil grasa", "hiperpigmentacion"],
];
console.log(arrayMixto);
