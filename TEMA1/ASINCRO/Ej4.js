/*
Escribe una función tirarDado() que devuelva una promesa. Pasado un segundo, la promesa debe: 

cumplirse con un número entero al azar entre 1 y 6, o bien 

rechazarse con un error con el mensaje «Ha salido un 1: pierdes» si el número es un 1. 

Consume la promesa con then y catch: si se cumple, escribe «Has sacado un N»; si se rechaza, escribe el mensaje del error. Añade un finally que escriba «Fin de la tirada». 

Pista: Math.floor(Math.random() * 6) + 1 genera un entero entre 1 y 6. 

*/

const simularPeticion = new Promise((resolve, reject) => {
  // Simulamos una operación asíncrona (ej. una petición a un servidor) con setTimeout
  setTimeout(() => {
    let random = Math.floor(Math.random() * 6) + 1 ;
    try {
        if(random != 1){
            console.log("Has sacado " + random);
        }else{
            error
        }
        
    } catch (error) {
        console.log("Has perdido ha salido 1.");
    } finally{
        console.log("Fin de la tirada.");
    }
  }, 1000)
});

