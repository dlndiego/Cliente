function primeraTarea() {
    return Promise.resolve(10);
}

function segundaTarea(numero) {
    return Promise.resolve(numero * 2);
}

function terceraTarea(numero) {
    return Promise.resolve(numero + 5);
}

primeraTarea()
    .then(numero => segundaTarea(numero))
    .then(numero => terceraTarea(numero))
    .then(numero => console.log("Resultado:", numero))
    .catch(error => console.log(error));
