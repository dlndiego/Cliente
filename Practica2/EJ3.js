let frase = prompt("Dime una frase:");
let letra = 0;
for (let index = 0; index < frase.length; index++){
    if(frase.charAt(index) == 'a' || frase.charAt(index) == 'A'){
        letra++;
    }
}
alert("La frase tiene un total de "+ letra +" letras 'a'");