// Array para almacenar las palabras introducidas por el usuario
let palabras = [];
let entrada;

// Bucle para pedir palabras continuamente hasta que se cancele o se deje vacío
do {
    entrada = prompt("Introduce una palabra (deja vacío o pulsa cancelar para terminar):");
    if (entrada !== null && entrada.trim() !== "") {
        palabras.push(entrada.trim());
    }
} while (entrada !== null && entrada.trim() !== "");

// Eliminamos los duplicados usando un Set y ordenamos de la Z a la A respetando el español
let palabrasUnicas = [...new Set(palabras)];

let resultadoOrdenado = palabrasUnicas.sort((a, b) => 
    b.localeCompare(a, 'es', { sensitivity: 'base' })
);

// Seleccionamos el contenedor del HTML
const contenedorResultado = document.getElementById("resultado");

// Mostramos el resultado de forma moderna dentro del div
if (resultadoOrdenado.length > 0) {
    contenedorResultado.innerHTML = "<h2>Resultado del procesamiento:</h2><p><strong>Palabras únicas ordenadas (Z-A):</strong> " + resultadoOrdenado.join(", ") + "</p>";
} else {
    contenedorResultado.innerHTML = "<p>No se introdujo ninguna palabra.</p>";
}