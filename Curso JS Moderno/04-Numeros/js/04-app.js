/** 
 * El orden en el que se ejecutan las operaciones es igual
 * al orden de la escuela
 * 
 * 1ro -> * y /
 * 2do -> + y -
 * 
 * Si queremos dar prioridad a algo usamos los () 
*/
let a = 20, 
b = 30,
c = 2;

let resultado = a + b * c
console.log(`${a} + ${b} * ${c} = ${resultado}`)

resultado = (20 + 30) * 2
console.log(`(${a} + ${b}) * ${c} = ${resultado}`)