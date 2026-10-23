//Creamo el Array de nums:
const nums = [2, 4, 6, 8, 10];

// iterativa
function sumarIterativo(arrNums) {
    let suma = 0;
    for (let i = 0; i < arrNums.length; i++) {
        suma += arrNums[i];
    }
    return suma;
}

// recursiva
function sumarRecursivo(arrNums, i = 0) {
    if (i === arrNums.length) {
        return 0;
    }
    return arrNums[i] + sumarRecursivo(arrNums, i + 1);
}

console.log("Iterativo:", sumarIterativo(nums));
console.log("Recursivo:", sumarRecursivo(nums));