// Create new array spread operator

"use strict";

const carrito = [];

const producto1 = new Producto("Monitor de 26 pulgadas", 399);
const producto2 = new Producto("MacBook Pro 2023", 1700);
const producto3 = new Producto("Xiaomi Mi 6", 499);

// forma declarativa -> programacion funcional
let resultado = [...carrito, producto1];

console.table(resultado);

// Agregar al final
resultado = [...resultado, producto2];
console.table(resultado);

// Agregar al inicio
resultado = [producto3, ...resultado];

console.table(resultado);

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}
