// Declaracion de function (Function Declaration)

// Llamar a la función
console.log(sumar(2, 2));

// Si llamamos a la función y luego la creamos, esto funciona
function sumar(a, b) {
  return a + b;
}

// Llamar a la function expresion, nos tira error
console.log(resta(2, 2));

// Si llamamos a la function expresion y luego la creamos, NO funciona
const resta = function (a, b) {
  return a - b;
};

// Esto sucede debido al hosting. JS se ejecuta en dos vueltas.
// 1ra JS escanea todo el documento y determina que variables va a crear -> Etapa de creación
// 2da vuelta, cuando se ejecuta JS ejecuta todo

/**
 * Seria como hacer esto
 * const division;
 *
 * division();
 *
 * Es una variable pero lo llamo como funcion
 */
