let numero = 144

let resultado = Math.sqrt(numero)
console.log(`Raiz cuadrada de ${numero} es ${resultado}`)

const a = 5,
b = 2,
c = 4,
d = 0,
e = 5;
let numeroMin = Math.min(a,b,c,d,e)
let numeroMax = Math.max(a,b,c,d,e)

// Tenemos que redondear con floor, ya que random devuevle 
// numeros randoms con decimales
let numeroRandom = Math.floor(Math.random() * (e - b)+ b) 
console.log(`El numero mínimo de ${a},${b},${c},${d},${e} es ${numeroMin}`)
console.log(`El numero mínimo de ${a},${b},${c},${d},${e} es ${numeroMax}`)
console.log(`Generar numero aleatorio entre ${b} y ${e} : ${numeroRandom}`)