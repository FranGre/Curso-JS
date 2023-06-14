let monitor = {
    nombre: "Monitor 4K 21 pulgadas",
    precio: 499,
    disponible: true
}

console.log(monitor)

//  AGREGAR PROPIEDAD

// Si color existiera, de esta forma lo sobreescribes
// Como estamos fuera del obj si que usamos el =
monitor.color = 'negro mate'

console.log(monitor)

//  ELIMINAR PROPIEDAD

delete monitor.color

console.log(monitor)