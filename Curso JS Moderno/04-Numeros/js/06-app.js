let numero1 = "20";
let numero2 = "20.2"
let numero3 = "Uno"


numero1 = Number.parseInt(numero1)
numero2 = Number.parseFloat(numero2)

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(numero2)
console.log(`${numero3} es entero?`)
console.log(Number.isInteger(numero3))
console.log(`${numero2} es entero?`)
console.log(Number.isInteger(numero2))
console.log(`${numero1} es entero?`)
console.log(Number.isInteger(numero1))