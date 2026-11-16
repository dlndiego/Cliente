let visitas = 0;

for (let cookie of document.cookie.split("; ")) {
    let partes = cookie.split("=");
    if (partes[0] === "visitas") {
        visitas = Number(partes[1]);
    }
}

visitas++;

if (visitas > 10) {
    visitas = 0;
    document.cookie = "visitas=; max-age=0; path=/";
} else {
    document.cookie = "visitas=" + visitas + "; max-age=2592000; path=/";
}

document.getElementById("resultado").textContent =
    "Has visitado esta página " + visitas + " veces.";
