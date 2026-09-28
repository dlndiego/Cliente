let fila = document.getElementsByClassName("tabla1")[0].children[0];
let palabra = prompt("Pon la palabra");
for (let i = 0; i < palabra.length; i++){
    let hueco = document.createElement("td");
    hueco.className = "letra1";
    hueco.append(palabra.charAt(i).toUpperCase());
    fila.append(hueco);
}