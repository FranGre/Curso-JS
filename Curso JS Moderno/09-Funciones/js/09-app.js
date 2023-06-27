// Añadir funciones en un Objeto

// Se conoce como método de propiedades reproducir()

let reproductor = {
  reproducir(titulo) {
    console.log(`Reproduciendo canción... ${titulo}`);
  },
  pausar() {
    console.log("Pausando canción...");
  },
  crearPlayList(listaCanciones) {
    for (let i = 0; i < listaCanciones.length; i++) {
      console.log(`Añadida la canción ${listaCanciones[i]}`);
    }
  },
};

reproductor.reproducir("La bachata - Manuel Turizo");
reproductor.pausar();

reproductor.pasarCancion = function () {
  console.log("Pasando de canción");
};

reproductor.pasarCancion();

let canciones = [
  "La bachata - Manuel Turizo",
  "Veneno - Delaossa",
  "Cosa Guapa - Rauw Alejandro",
  "Nostálgico - Rauw Alejandro & Chris Brown",
  "Un verano sin ti - Bad Bunny",
];

reproductor.crearPlayList(canciones);
