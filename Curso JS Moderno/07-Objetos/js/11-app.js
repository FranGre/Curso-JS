const monitor = {
    marca : 'LG',
    modelo : 'AS107',
    precio : '499',
    color : 'blanco',
    mostrarInfo: function(){
        console.log(`El monitor ${this.marca} ${this.modelo} cuesta ${this.precio}€`)
    }
}

// Si no pusiera this, se fijaría en la variable fuera del objeto

monitor.mostrarInfo()

