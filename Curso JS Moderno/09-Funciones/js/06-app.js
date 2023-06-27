// parametros por defecto

function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido} !!!`);
}

saludar();

// De esta forma no nos aparecerá undefined
function saludarConParametrosPorDefecto(nombre = "Unkown", apellido = "") {
  console.log(`Hola ${nombre} ${apellido} !!!`);
}

saludarConParametrosPorDefecto("Juan");
