let monitor = {
    nombre: "Monitor 4K 21 pulgadas",
    precio: 499,
    disponible: true
}

console.log(monitor)
// Acceder datos del obj

// 1ra forma
console.log(`El nombre del monitor es ${monitor.nombre}`)

// 2da forma POCO COMUN
// Dentro de los corchetes, pongo el nombre de la llave a acceder
// El nombre de la llave tiene que ser tal cual
console.log(`El nombre del monitor es ${monitor['nombre']}`)
