"use strict";

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses);

// Delete last element in array (Mayo)
meses.pop();
console.table(meses);

// Delete first element in array (Enero)
meses.shift();
console.table(meses);

// Delete other element (Marzo y Abril)
// desde donde , cuantos elementos quiero eliminar
meses.splice(1, 2);
console.table(meses);
