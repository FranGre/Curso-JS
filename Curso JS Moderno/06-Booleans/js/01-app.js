// Un booleano solo tiene 2 valores
// true 
// false

let meGustaMac = true
let odioMac = false

console.log(typeof meGustaMac)
console.log(typeof odioMac)

console.log(`Me gusta Mac? ${meGustaMac}`)
console.log(`Odio Mac? ${odioMac}`)

let adoroMac = "true"
console.log(typeof adoroMac)

// En este caso tanto el normal como el estricto no lo pasan por alto
console.log(`${meGustaMac} es == que ${adoroMac}? ${meGustaMac==adoroMac}`)
console.log(`${meGustaMac} es === que ${adoroMac}? ${meGustaMac===adoroMac}`)

let booleanObject = new Boolean(true)
console.log(`Boolean creado con new, su tipo es de ${typeof booleanObject}`)