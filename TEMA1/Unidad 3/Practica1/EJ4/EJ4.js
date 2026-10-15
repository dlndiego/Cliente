//Creamos 50 combinaciones aleatorias de la loteria primitiva
function generarCombinaciones() {
    const combinaciones = [];
    while (combinaciones.length < 50) {
        const combinacion = generarCombinacion();
        if (!combinaciones.some(c => arraysIguales(c, combinacion))) {
            combinaciones.push(combinacion);
        }
    }
    return combinaciones;
}

//Generamos la combinación aleatoria de 6 números entre 1 y 49
function generarCombinacion() {
    const numeros = new Set();
    while (numeros.size < 6) {
        const numero = Math.floor(Math.random() * 49) + 1;
        numeros.add(numero);
    }
    // Convertimos el Set a un array y lo ordenamos de menor a mayor
    return Array.from(numeros).sort((a, b) => a - b);
}

//Comparamos combinaciones para asegurarnos de que no se repitan
function arraysIguales(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Generamos las combinaciones y las mostramos por consola
const combinaciones = generarCombinaciones();
combinaciones.forEach((combinacion, index) => {
    console.log(`Combinación ${index + 1}: ${combinacion.join(", ")}`);
}); 