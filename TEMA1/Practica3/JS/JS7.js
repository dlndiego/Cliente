let fechaEntrada = prompt("¿Qué día naciste? YYYY/MM/DD");

if (fechaEntrada) {
    // Creamos los objetos Date para la fecha introducida y la actual
    let fechaNacimiento = new Date(fechaEntrada);
    let fechaHoy = new Date();

    // Restamos ambas fechas; el resultado se obtiene en milisegundos
    let diferenciaMilisegundos = fechaHoy - fechaNacimiento;

    // Convertimos de milisegundos a días: ms / (1000 ms * 60 s * 60 min * 24 h)
    let diasTranscurridos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    // Mostramos el mensaje en la ventana emergente
    alert("Han transcurrido " + diasTranscurridos + " días, aproximadamente, desde que naciste");
}