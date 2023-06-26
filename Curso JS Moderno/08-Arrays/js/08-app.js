// Destructing
// Consiste en extrar el valor, crear la variable y guardarla en ella
// Todo en un mismo paso

const producto = {
  nomnbre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
};

// Destructing arreglos
// Es decir crea variables para cada posición del array
// Importante Primero es la 0, no es necesario ponerle el nombre primero
// Se puede llamar a por ejemplo

let array = [10, 20, 30, 40];

const [primero, segundo, tercero] = array;
console.log([tercero]);

// Es lo mismo pero sin crear variables
const [, , x] = array;
console.log([x]);

// Quiero solo sacar dos pero el resto de numeros quiero que sigan en un array
// Para ello usamos los ...

const [a, b, ...resto] = array;
console.log(resto);
