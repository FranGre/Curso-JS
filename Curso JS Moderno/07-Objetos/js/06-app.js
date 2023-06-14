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

// Destructuring Objetos anidados

let { color, informacion , informacion: {fabricacion: {pais}} } = monitor

// Podré acceder a la variable/objeto que esté más cerca de la coma
console.log(color)
console.log(pais)
console.log(informacion)

// En caso contrario, nos tira error
console.log(fabricacion)
