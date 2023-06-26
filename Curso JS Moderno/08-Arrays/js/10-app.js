// map

const carrito = [
  {
    nombre: "Monitor LG",
    precio: 500,
  },
  {
    nombre: "Iphone 15",
    precio: 900,
  },
  {
    nombre: "Samsung",
    precio: 500,
  },
  {
    nombre: "Teclado",
    precio: 150,
  },
];

// Diferencia map y forEach
// .map crea un nuevo array y se puede retornar
// forEach no crear un nuevo array, por lo tanto no se puede retornar

let carritoMap = carrito.map(function (producto) {
  return `${producto.nombre} cuesta ${producto.precio}€`;
});

let carritoForEach = carrito.forEach(function (producto) {
  return `${producto.nombre} cuesta ${producto.precio}€`;
});

console.log("carrito con .map");
console.log(carritoMap);
console.log("carrito con forEach");
console.log(carritoForEach);
