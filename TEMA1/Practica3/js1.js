
let boton = document.getElementById("btnObtener");

boton.addEventListener('click', () => {
    let texto = document.getElementById("cadenaSuministrada").value;
    invertirCadena(texto);
    convertirEnMayusculas(texto);
    repetirCadenas(texto);
    invertidaEnMayusuclas(texto);
});


function invertirCadena(texto){
let textoInvertido = "";
    for (let i = texto.length -1; i >= 0; i--) {
        textoInvertido += texto.charAt(i);
       
    }
    document.getElementsByClassName("Texto1")[0].value = textoInvertido;
}

function convertirEnMayusculas(texto){
let textoEnMayusculas = texto.toUpperCase();
document.getElementsByClassName("Texto1")[1].value = textoEnMayusculas;
}

function repetirCadenas(texto){
    let textoRepetido = ""
    for (let i = 0; i < 3; i++) {
        textoRepetido += texto;
    }
    document.getElementsByClassName("Texto1")[2].value = textoRepetido;

}
function invertidaEnMayusuclas(texto) {
    let cadenaInvertida = invertirCadena(texto);
    let invertidaYenMayusculas = convertirEnMayusculas(cadenaInvertida);
}
