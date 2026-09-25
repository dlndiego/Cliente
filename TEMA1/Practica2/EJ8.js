let botones = document.getElementsByClassName('nums');
console.log(botones.length);
let numMayor = 0;
let elemento= [];
for (let j = 0; j < 3; j++) {
    elemento[j] = [prompt("Dime un numero")];// esto tiene que ser un array. 
}
for (let i = 0; i < botones.length; i++) {
    botones[i].textContent=elemento[i];
    
}

for(let i = 0; i < elemento.length; i++) {// recorrer y comprar.
    if (i == 0) {
        numMayor =parseInt(elemento[i]) ;
    }else{
        if(numMayor < elemento[i]){
            numMayor = elemento[i];
        }
    }
}

alert("El numero mayor es: "+numMayor);