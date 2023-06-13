let numero1 = 20
let numero2 = "20"

console.log(`tipo dato ${numero1}: ${typeof numero1}`)
console.log(`tipo dato ${numero2}: ${typeof numero2}`)

// Normal == no le importa el tipo de dato
// Estricto === le importa el tipo de dato

console.log(`Normal == 
${numero1} es == que ${numero2} : ${numero1 == numero2}`)

console.log(`Estricto se fija en el tipo de dato  ===
${numero1} es === que ${numero2} : ${numero1 === numero2}`)

// != Normal, no le importa el tipo de dato
// !=== Estricto, le importa tmb el tipo de dato

console.log(`Normal == 
${numero1} es != que ${numero2} : ${numero1 != numero2}`)

console.log(`Estricto se fija en el tipo de dato  ===
${numero1} es !== que ${numero2} : ${numero1 !== numero2}`)