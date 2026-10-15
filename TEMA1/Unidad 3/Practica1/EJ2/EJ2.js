let valores = Array(4,4,3,2,4,1,2,3,4,10,29,40,51);

console.log("Numeros de el array con repetidos");
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]+"\n");
}

//Creamos el set
let sinRepes = new Set();
for (let i = 0; i < valores.length; i++) {
    //metemos dentro del set los valores del array
    sinRepes.add(valores[i]);
}
console.log("\n");
//Mostramos el set por console log
console.log("Numeros sin repes");
console.log("\n");
sinRepes.forEach(nums => {
    console.log(nums +" ");
});
