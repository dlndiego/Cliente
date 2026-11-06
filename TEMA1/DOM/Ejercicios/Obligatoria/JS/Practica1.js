const contenedor = document.getElementById('imagen');

document.addEventListener('keydown', (e) => {
    // Comprobamos si se pulsa la tecla Alt junto con F12
    if (e.altKey && e.code === 'F12') {
        e.preventDefault(); // Evita el comportamiento por defecto de la tecla si lo hubiera

        // Cargamos una imagen aleatoria desde picsum
        const urlAleatoria = `https://picsum.photos/1920/1080?random=${Math.random()}`;
        contenedor.style.backgroundImage = `url('${urlAleatoria}')`;
    }
});