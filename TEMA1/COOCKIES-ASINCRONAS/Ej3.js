function simulaProceso(exito) {
    return new Promise((resolve, reject) => {
        if (exito) {
            resolve("Proceso exitoso");
        } else {
            reject("Hubo un error");
        }
    });
}

// Con then y catch
simulaProceso(true)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

simulaProceso(false)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

// Con async y await
async function probar(exito) {
    try {
        let mensaje = await simulaProceso(exito);
        console.log(mensaje);
    } catch (error) {
        console.log(error);
    }
}

probar(true);
probar(false);
