const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const btnEnviar = document.getElementById('btnEnviar');

// Expresin regular : xxxx@yyyy.zzZZ
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validarTodo() {
    const emailOk = regexEmail.test(emailInput.value);
    const passOk = passwordInput.value.length >= 8 && passwordInput.value.length <= 10;

    if (emailOk && passOk) {
        btnEnviar.disabled = false;
        btnEnviar.style.backgroundColor = '';
    } else {
        btnEnviar.disabled = true;
        btnEnviar.style.backgroundColor = 'lightgray';
    }
}

// Validacion al perder el foco (blur)
emailInput.addEventListener('blur', () => {
    if (!regexEmail.test(emailInput.value)) {
        errorEmail.textContent = "Formato esperado incorrecto. Ejemplo: xxxx@yyyy.zzZZ";
    }
    validarTodo();
});

passwordInput.addEventListener('blur', () => {
    const len = passwordInput.value.length;
    if (len < 8 || len > 10) {
        errorPassword.textContent = "El password debe tener una longitud entre 8 y 10 caracteres.";
    }
    validarTodo();
});

// Borrar mensajes de error al volver a escribir en los campos
emailInput.addEventListener('input', () => {
    errorEmail.textContent = "";
    validarTodo();
});

passwordInput.addEventListener('input', () => {
    errorPassword.textContent = "";
    validarTodo();
});

document.getElementById('miFormulario').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Formulario validado y enviado con éxito!");
});