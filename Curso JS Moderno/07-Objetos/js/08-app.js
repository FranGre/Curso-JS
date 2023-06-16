// Vamos a hacer que el objt sea estricto, es decir
// que no se puedan añadir, modificar o eliminar propiedades

"use strict";
// quiere decir que hay que seguir ciertas reglas

const monitor = {
    nombre: "Monitor 4K 21 pulgadas",
    precio: 499,
    disponible: true
}

// Permite que el objeto sea solo de lectura, no escritura
Object.freeze(monitor)

console.log(`El obj monitor está congelado? ${Object.isFrozen(monitor)}`)
console.log(monitor)

// No podremos modificar, añadir o eliminar

monitor.disponible = false

monitor.hz = '144'

delete monitor.disponible
