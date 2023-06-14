let monitor = {
    nombre: "Monitor 4K 21 pulgadas",
    precio: 499,
    disponible: true,
    color: 'rojo',
    informacion: {
        peso:'1kg',
        hz: '144',
        fabricacion:{
            pais: 'España',
            provincia: 'Alicante'
        }
    }
}

// Se pueden anidar tantos objs dentro de objs como quieras
// Accedes a ellos mediante .

console.log(monitor)

console.log(monitor.color)
console.log(monitor.informacion.hz)
console.log(monitor.informacion.fabricacion.pais)