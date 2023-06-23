// Añadir valores a un array forma cutre

// A pesar de que sea const, si es un array o un objeto, loa valores se pueden:
// modificar
// agregar
// eliminar

// En el caso de que sea un objeto, si esté se le da la propieda freeze, pues no se podrá hacer CreModiDel(CMD)
// En array no existe el freeze

const meses = ["Enero", "Febrero", "Marzo", "Abril"];

console.table(meses);

// Formas de agrear valores

meses[meses.length] = "Mayo";
console.table(meses);
