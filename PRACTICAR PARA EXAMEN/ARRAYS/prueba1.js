let numeros = [4,6,7,8,9,10];
let mostrar = "";


for (let i = 0; i < numeros.length; i++) {
    mostrar += numeros[i] +" ";
}

console.log(mostrar);

console.log("INSERTANDO Y COMPROBANDO SI EXISTE:");


insertar(8,numeros);


console.log("DESPUES DE INSERTAR:");

mostrar="";

for (let i = 0; i < numeros.length; i++) {
    mostrar += numeros[i] +" ";
}

console.log(mostrar);


function insertar(num, numeros){
    if(!numeros.includes(num)){
        numeros.push(num);
        console.log("Añadido con exito");
    }else{
        console.log("Este numero ya existe");
    }
}
