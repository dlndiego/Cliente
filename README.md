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