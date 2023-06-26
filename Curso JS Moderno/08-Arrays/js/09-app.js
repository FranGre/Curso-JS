// forEach

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

// Un bucle for o un forEach son exactamente lo mismo.
// Ninguno es más rápido

carrito.forEach(function (producto) {
  console.log(`${producto.nombre} cuesta ${producto.precio}€`);
});
