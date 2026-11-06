const pCoordenadas = document.getElementById('coordenadas');

//moviminto del ratón en todo el documento
document.addEventListener('mousemove', (evento) => {
    const x = evento.clientX;
    const y = evento.clientY;
    pCoordenadas.textContent = `Posición actual del ratón -> X: ${x}px, Y: ${y}px`;
});