let palabra = prompt("Pon la palabra HOLA.");
for (let i = 0; i < palabra.length; i++) {
    document.getElementsByClassName("letras")[i].textContent = palabra.charAt(i);
}