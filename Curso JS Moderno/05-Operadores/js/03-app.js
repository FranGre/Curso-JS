// Creo la variable pero no la asigno
//  Valor es undefined
//  Es de tipo undefined
let numero;

console.log(`${numero} y su tipo es ${typeof numero}`)

// En null
//  Valor es null
//  Es de tipo Object
// Es de tipo Object porque JS lo definió así
let numero2 = null
console.log(`${numero2} y su tipo es ${typeof numero2}`)

console.log("¿Qué pasaría si los comparamos?")
// Si usamos el normal se lo traga, son iguales
console.log(`${numero} es == que ${numero2} : ${numero == numero2}`)

// Si usamos el estricto, dicen que no son iguales
console.log(`${numero} es === que ${numero2} : ${numero === numero2}`)
