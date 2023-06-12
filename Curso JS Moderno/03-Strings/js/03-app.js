let nombre = 'Fran '
let apellidos = 'Gregori Tandazo '

let nombreCompleto = nombre.concat(apellidos)
console.log(nombreCompleto)

//Estas dos son las mismas
nombreCompleto = nombre + apellidos
console.log(nombreCompleto) 
console.log(nombre, apellidos)

nombreCompleto = `Mi nombre es ${nombre}y mis apellidos son ${apellidos}`
console.log(nombreCompleto)