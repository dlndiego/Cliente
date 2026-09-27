let boton = document.getElementById("enviarFechaNaci");
if (boton) {
    boton.addEventListener('click', function () {
        validarFecha();
    });
}



function validarFecha() {
    // Obtenemos el texto introducido en el campo
    let texto = document.getElementById("inputFecha").value;
    let patronFecha = /^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/;

    // Comprobamos si el texto cumple con el patrón
    if (patronFecha.test(texto)) {
        alert("Gràcies per introduir la data");
    } else {
        alert("El format de data no és correcte");
    }
}