const btn = document.getElementById('btnNuevo');
        const lista = document.getElementById('listaNumeros');

        btn.addEventListener('click', () => {
            // Generamos un número aleatorio entre 1 y 100
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            
            // Creamos el elemento <li> y lo añadimos a la lista
            const li = document.createElement('li');
            li.textContent = "Número aleatorio: " + numeroAleatorio;
            lista.appendChild(li);
        });