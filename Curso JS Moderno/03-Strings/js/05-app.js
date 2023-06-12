let monitor = "Monitor de 20 pulgadas"

console.log(monitor)
//queremos cambiar pulgadas por Pulgadas

monitor = monitor.replace("pulgadas","Pulgadas")
console.log(monitor)

// Queremos cortar la cadena, tenemos dos formas 
console.log(monitor.slice(7,monitor.length))
console.log(monitor.slice(5))

console.log(monitor.slice(2,1))

console.log(monitor.substring(7,monitor.length))
console.log(monitor.substring(5))

console.log(monitor.substring(2,1))