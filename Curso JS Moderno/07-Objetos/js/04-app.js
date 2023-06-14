let monitor = {
    nombre: "Monitor 4K 21 pulgadas",
    precio: 499,
    disponible: true,
    color: 'rojo'
}

// Manera antigua
// let nombre = monitor.nombre
// console.log(nombre) muestra el nombre del monitor


// Gracias a EM6 tenemos Destructuring Object
// Extrae y guardar de monitor
// Nombres tienen que coincidir

let { nombre } = monitor
let { precio } = monitor
console.log(nombre)
console.log(precio)

let {disponible, color} = monitor
console.log(disponible)
console.log(color)