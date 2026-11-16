function temporizador(tiempo) {
    return new Promise((resolve, reject) => {
        let error = setTimeout(() => {
            reject("El tiempo no va bien");
        }, tiempo * 2);

        setTimeout(() => {
            clearTimeout(error);
            resolve("Tiempo concluido");
        }, tiempo);
    });
}

temporizador(5000)
    .then(mensaje => {
        document.getElementById("resultado").textContent = mensaje;
    })
    .catch(error => {
        document.getElementById("resultado").textContent = error;
    });
