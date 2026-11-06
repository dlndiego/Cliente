const parrafos = document.querySelectorAll('.parrafo');
const btnReaparecer = document.getElementById('btnReaparecer');

parrafos.forEach(p => {
    // Clic izquierdo: oculta 
    p.addEventListener('click', () => {
        p.style.display = 'none';
    });

    // Clic derecho: elimina 
    p.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        p.remove();
    });
});

// Botón reaparecer: construye los elementos ocultos
btnReaparecer.addEventListener('click', () => {
    const actualizados = document.querySelectorAll('.parrafo');
    actualizados.forEach(p => {
        if (p.style.display === 'none') {
            p.style.display = 'block';
        }
    });
});