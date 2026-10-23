// Función que recibe el array de palabras y devuelve un Map con el recuento
function contarFrecuencias(arrayPalabras) {
    const mapaFrecuencias = new Map();
    arrayPalabras.forEach(palabra => {
        let conteoActual = mapaFrecuencias.get(palabra) || 0;
        mapaFrecuencias.set(palabra, conteoActual + 1);
    });
    return mapaFrecuencias;
}

// Array para ir guardando las palabras que meta el usuario
let listaPalabras = [];
let textoPopup;

// Bucle para pedir palabras continuamente hasta cancelar o dejarlo vacío
do {
    textoPopup = prompt("Introduce una palabra (deja vacío o pulsa cancelar para salir):");
    if (textoPopup !== null && textoPopup.trim() !== "") {
        listaPalabras.push(textoPopup.trim());
    }
} while (textoPopup !== null && textoPopup.trim() !== "");

// Llamamos a la función para obtener el Map con las frecuencias
const mapaResultado = contarFrecuencias(listaPalabras);

// Buscamos el contenedor en el HTML
const cajaResultado = document.getElementById("resultado");

// Construimos el HTML de forma dinámica usando innerHTML
if (mapaResultado.size > 0) {
    let htmlGenerado = "<h3>Resultados del recuento:</h3><ul>";
    
    // Recorremos el Map con forEach para rellenar la lista
    mapaResultado.forEach((frecuencia, palabra) => {
        htmlGenerado += `<li><strong>${palabra}</strong>: ${frecuencia} vez/veces</li>`;
    });
    
    htmlGenerado += "</ul>";
    cajaResultado.innerHTML = htmlGenerado;
} else {
    cajaResultado.innerHTML = "<p>Vaya, parece que no introduciste ninguna palabra.</p>";
}