# Cliente

---

> [!NOTE]
> Esto es un **.md** para gestionar las **PRACTICAS** de ***Entornos de Desarollo en Cliente***.

---

## [Practica 3](TEMA1/Unidad%203/Practica1/);

### Ejercicio 1

#### `ENUNCIADO:`

1. Crea el siguiente array:
```JS
let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];
//e) Añade dos elementos al final:
{name: "Pedro", telephone: "611944444", age: 25},
{name: "Julia", phone: "633232323", age: 37}
//e) Comprueba con console.log (data) que se han añadido.
//e) Ordena el vector por edad, comprueba el resultado.
//e) Ordena el vector por nombre, comprueba el resultado.
//e) Crea y muestra un nuevo vector que contenga solo los mayores de 30 años.
```

---

#### `RESPUESTA:`

1) Añadimos los elementos de esta manera: 

```js
//Añadimos dos mas
data.push({name: "Pedro", telephone: "611944444", age: 25});
data.push({name: "Julia", phone: "633232323", age: 37});
```

2) Comprobamos en el console.log ( data ) que se han añadido:
   
```js
console.log(data);

```

![FOTO DEL CONSOLE LOG](TEMA1/Unidad%203/Practica1/IMG/console.log1.png)

3) Ordena el vector por edad, comprueba el resultado:

```js
//ordenamos de menor a mayor por edad
data.sort((a, b) => a.age - b.age);

//Mostramos por consola el array ordenado
data.forEach((persona) => {
  // Manejamos que algunos tengan 'phone' y otros 'telephone'
  let telefono = persona.telephone || persona.phone;
  console.log(`${persona.name} tiene ${persona.age} años y su teléfono es ${telefono}`);
});
```

Al recorrerlo nos fijamos en que algunos usuarios tienen PHONE y otros TELEPHONE, asi que hacemos el `or` para que filtre ambos casos.

Y esto queda asi: 
![ensiende el text](TEMA1/Unidad%203/Practica1/IMG/ordenadorEdad.png)

4) Ordenamos por nombre, comprobamos el resultado: 

```js
// Ordenamos por nombre alfabéticamente
data.sort((a, b) => a.name.localeCompare(b.name));

//Mostramos por consola el array ordenado por nombre
console.log("Ordenado por nombre:");
data.forEach((persona) => {
  let telefono = persona.telephone || persona.phone;
  console.log(`${persona.name} tiene ${persona.age} años y su teléfono es ${telefono}`);
});
```

Y esto queda asi:
![](TEMA1/Unidad%203/Practica1/IMG/ordenadoPorNombre.png)

5) Crea y muestra un nuevo vector que contenga solo los mayores de 30 años.

```js
/ creamos un array con los nombres de las personas mayores de 30 años
let mayoresDe30 = data.filter(persona => persona.age > 30);
console.log("Personas mayores de 30 años:\n");
mayoresDe30.forEach((persona) => {
    let telefono = persona.telephone || persona.phone;
    console.log(`${persona.name} tiene ${persona.age} años y su teléfono es ${telefono}`);
});
```

Y esto queda asi:
![](TEMA1/Unidad%203/Practica1/IMG/Mayores30.png)

---

### Ejercicio 2

#### `ENUNCIADO:`

1. Crea un array llamado valores que contenga números, algunos de los cuales son duplicados. Utiliza un Set para crear un nuevo array que contenga solo los números únicos y luego imprímelo.

#### `RESPUESTA:`

Array con numeros duplicados:

`- CODIGO:`
```js
let valores = Array(4,4,3,2,4,1,2,3,4,10,29,40,51);

console.log("Numeros de el array con repetidos");
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]+"\n");
}
```
y comprobamos en el **console.log** y esto se muestra asi: 

![alt text](TEMA1/Unidad%203/Practica1/IMG/arrayConRepetidos.png)

Ahora creamos el set y metemos los numeros y los mostramos:

```js
//Creamos el set
let sinRepes = new Set();
for (let i = 0; i < valores.length; i++) {
    //metemos dentro del set los valores del array
    sinRepes.add(valores[i]);
}
console.log("\n");
//Mostramos el set por console log
console.log("Numeros sin repes");
console.log("\n");
sinRepes.forEach(nums => {
    console.log(nums +" ");
});
```

y esto queda asi: 

![](TEMA1/Unidad%203/Practica1/IMG/arraySinRepes.png)

### Ejercicio 3

#### `ENUNCIADO:`

1. Crea un Map que almacene nombres como claves y edades como valores. Luego, agrega algunos nombres y edades, actualiza la edad de uno de ellos, y finalmente imprime todos los nombres con sus edades.
   
#### `RESPUESTA:`

- Creamos el mapa y guardamos las claves y los valores:
```js
let mapa = new Map();

// Añadir elementos al mapa
mapa.set("Juan", 32);
mapa.set("Paco", 26);
mapa.set("Manolo", 42);
mapa.set("Martin", 19);
mapa.set("Diego", 18);
mapa.set("Dani", 21);
mapa.set("Manuel", 30);
```
- Añadimos algunos mas:
```js
let mapa = new Map();

// Añadir elementos al mapa
mapa.set("Juan", 32);
mapa.set("Paco", 26);
mapa.set("Manolo", 42);
mapa.set("Martin", 19);
mapa.set("Diego", 18);
mapa.set("Dani", 21);
mapa.set("Manuel", 30);

// Aañadimos algun elemento mas
mapa.set("Alberto", 25);
```
- Actualizamos la edad de alguna persona:
```js
let mapa = new Map();

// Añadir elementos al mapa
mapa.set("Juan", 32);
mapa.set("Paco", 26);
mapa.set("Manolo", 42);
mapa.set("Martin", 19);
mapa.set("Diego", 18);
mapa.set("Dani", 21);
mapa.set("Manuel", 30);

// Aañadimos algun elemento mas
mapa.set("Alberto", 25);

//Actualizamos un elemento
mapa.set("Dani", 22);
```
- Y ahora mostramos todos los nombres con las edades:
```js
let mapa = new Map();

// Añadir elementos al mapa
mapa.set("Juan", 32);
mapa.set("Paco", 26);
mapa.set("Manolo", 42);
mapa.set("Martin", 19);
mapa.set("Diego", 18);
mapa.set("Dani", 21);
mapa.set("Manuel", 30);

// Aañadimos algun elemento mas
mapa.set("Alberto", 25);

//Actualizamos un elemento
mapa.set("Dani", 22);

//Mostramos el usuario con su edad
for (let [nombre, edad] of mapa) {
    console.log(`${nombre} tiene ${edad} años`);
    console.log("\n");
}
```
- Y esto se muestra en el **console.log** y queda asi:
![](TEMA1/Unidad%203/Practica1/IMG/mapaConEdades.png)

### Ejercicio 4

#### `ENUNCIADO:`

1. Mostrar por consola 50 combinaciones aleatorias de la lotería primitiva. Las combinaciones son 6 números del 1 al 49, pero debe tenerse en cuenta que no se pueden repetir los números en una misma combinación
   
#### `RESPUESTA:`

- Creamos la combinacion de 6 numeros del 1 al 49:
```js
//Generamos la combinación aleatoria de 6 números entre 1 y 49
function generarCombinacion() {
    const numeros = new Set();
    while (numeros.size < 6) {
        const numero = Math.floor(Math.random() * 49) + 1;
        numeros.add(numero);
    }
    // Convertimos el Set a un array y lo ordenamos de menor a mayor
    return Array.from(numeros).sort((a, b) => a - b);
}
```
- Comparamos arrays para comprobar que no tengan la misma combinacion:
```js
//Comparamos combinaciones para asegurarnos de que no se repitan
function arraysIguales(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
```
- Y ahora hacemos las 50 combinaciones: 
```js
//Creamos 50 combinaciones aleatorias de la loteria primitiva
function generarCombinaciones() {
    const combinaciones = [];
    while (combinaciones.length < 50) {
        const combinacion = generarCombinacion();
        if (!combinaciones.some(c => arraysIguales(c, combinacion))){//some revisa las combinaciones que ya estan guaradas
            combinaciones.push(combinacion);
        }
    }
    return combinaciones;
}
```
- Y esto se recorre/muestra de esta manera:
```js
// Generamos las combinaciones y las mostramos por consola
const combinaciones = generarCombinaciones();
combinaciones.forEach((combinacion, index) => {
    console.log(`Combinación ${index + 1}: ${combinacion.join(", ")}`);
}); 
```
- Y esto queda de esta manera:
  
![](TEMA1/Unidad%203/Practica1/IMG/combinaicion.png)