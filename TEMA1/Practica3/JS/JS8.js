let boton = document.getElementById("enviarFechaNaci");
if (boton) {
    boton.addEventListener('click', function () {
        comprobarFecha();
    });
}

function comprobarFecha() {
    let inputFecha = document.getElementById("fechaNacimiento").value;

    if (inputFecha) {
        let fechaNacimiento = new Date(inputFecha);
        let hoy = new Date();

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let mesDiferencia = hoy.getMonth() - fechaNacimiento.getMonth();
        let diaDiferencia = hoy.getDate() - fechaNacimiento.getDate();

        if (mesDiferencia < 0 || (mesDiferencia === 0 && diaDiferencia < 0)) {
            edad--;
        }

        alert("Han transcurrido " + edad + " años, aproximadamente, desde que naciste");
    } else {
        alert("Por favor, selecciona una fecha válida.");
    }
}