function guardar() {
    let nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") return;

    document.cookie = "nombre=" + encodeURIComponent(nombre) + "; max-age=604800; path=/";
    saludar(nombre);
}

function saludar(nombre) {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("resultado").textContent = "¡Bienvenido, " + nombre + "!";
}

let cookies = document.cookie.split("; ");
for (let cookie of cookies) {
    let partes = cookie.split("=");
    if (partes[0] === "nombre") {
        saludar(decodeURIComponent(partes.slice(1).join("=")));
    }
}
