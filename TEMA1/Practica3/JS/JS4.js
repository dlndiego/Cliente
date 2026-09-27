let boton = document.getElementById("btnObtener1");

boton.addEventListener('click', () => {
    let numero = document.getElementById("cadenaSuministrada1").value;
    conversion(numero);
});



function conversion(numero){
    // a BINARIO
    let tempBin = numero;
    let binario = "";
    while (tempBin > 0) {
        binario = (tempBin % 2) + binario; // Residuos: 0 o 1
        tempBin = Math.floor(tempBin / 2);
    }

    // a Octal
    let tempOct = numero;
    let octal = "";
    while (tempOct > 0) {
        octal = (tempOct % 8) + octal; // Residuos: del 0 al 7
        tempOct = Math.floor(tempOct / 8);
    }
    let tempHex = numero;
    let hexadecimal = "";
    while (tempHex > 0) {
        let residuo = tempHex % 16;
        let caracterHex;

        // Evaluamos el residuo para saber si es número o letra (A-F)
        switch (residuo) {
            case 10: caracterHex = "A"; break;
            case 11: caracterHex = "B"; break;
            case 12: caracterHex = "C"; break;
            case 13: caracterHex = "D"; break;
            case 14: caracterHex = "E"; break;
            case 15: caracterHex = "F"; break;
            default: caracterHex = residuo.toString(); // Casos del 0 al 9
        }

        hexadecimal = caracterHex + hexadecimal;
        tempHex = Math.floor(tempHex / 16);
    }

    let tabla = document.getElementsByClassName("letras2");
    for (let i = 0; i < tabla.length; i++) {
        if (i == 0) {
            tabla[i].textContent= binario;
        }else if (i == 1){
            tabla[i].textContent = octal;
        }else if (i == 2) {
           tabla[i].textContent = hexadecimal; 
        }
        
    }
}