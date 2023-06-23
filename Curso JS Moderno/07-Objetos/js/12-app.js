"use strict";

// Crear objeto -> Object Literal
// El literal se suele usar más

const monitor = {
  marca: "LG",
  modelo: "AS107",
  precio: "499",
  color: "blanco",
  mostrarInfo: function () {
    console.log(
      `El monitor ${this.marca} ${this.modelo} cuesta ${this.precio}€`
    );
  },
};
console.log(monitor);

// Crear objeto -> Object Constructor

function Monitor(marca, modelo, precio, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.precio = precio;
  this.color = color;
}

const monitorFran = new Monitor("ASUS", "EX6", 399, "white");
console.log(monitorFran);
