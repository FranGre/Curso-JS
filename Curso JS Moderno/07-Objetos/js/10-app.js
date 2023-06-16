// COPIAR 2 OBJETOS

const monitor = {
    marca : 'LG',
    modelo : 'AS107',
    precio : '499',
    color : 'blanco'
}


const informacion = {
    peso : '1kg',
    pulgadas : '27 pulgadas'
}

console.log(monitor)
console.log(informacion)

// 1 forma
console.log('Objetos unidos con Object.assign(objeto, objeto)')
const resultado = Object.assign(monitor,informacion)
console.log(resultado)


// 2 forma
console.log('Objetos unidos por Spread Operator o Rest Operator')
const resultado2 = { ...monitor, ...informacion }
console.log(resultado2)