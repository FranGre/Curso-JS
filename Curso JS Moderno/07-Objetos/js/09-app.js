"use strict";

const monitor = {
    nombre: "Monitor 4K 21 pulgadas",
    precio: 499,
    disponible: true
}

console.log(monitor)

// Seal solo permite modificar las propiedades existentes

// No permite elminar ni añadir nuevas propiedades
Object.seal(monitor)

monitor.disponible = false

console.log(`El monitor esta sealed? ${Object.isSealed(monitor)}`)
console.log(monitor)
