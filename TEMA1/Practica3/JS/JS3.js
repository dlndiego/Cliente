let palabra = prompt("Pon la palabra HOLA.");
for (let i = 0; i < palabra.length; i++) {
    document.getElementsByClassName("letras1")[i].textContent = palabra.charAt(i).toUpperCase();
}