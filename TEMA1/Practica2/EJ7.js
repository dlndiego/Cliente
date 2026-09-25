let elemento = document.getElementById('cambCol');


elemento.addEventListener('mouseenter', () => {
  elemento.style.backgroundColor = '#eec06c';
});

elemento.addEventListener('mouseleave', () => {
  elemento.style.backgroundColor = 'transparent';
});
