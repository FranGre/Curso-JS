const monitor = {
    nombre: "Monitor 4K 21 pulgadas",
    precio: 499,
    disponible: true
}
console.log(monitor)

// Como dijimos el tipo de dato const, no se podia modificar
// Sin embargo, al ser un obj esta norma se la salta

// Por ello, podemos modificar, añadir o eliminar valores del obj

monitor.color = 'azul'
console.log(monitor)

monitor.resolucion = '4k'
console.log(monitor)

delete monitor.disponible
console.log(monitor)