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
![FOTO DEL CONSOLE LOG](TEMA1/Unidad%203/Practica1/IMG/console.log1.png)
```
