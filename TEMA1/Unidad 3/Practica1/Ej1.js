//Creamos el array de objetos con los datos de las personas
let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];

//Añadimos dos mas
data.push({name: "Pedro", telephone: "611944444", age: 25});
data.push({name: "Julia", phone: "633232323", age: 37});

//Comprobamos por consola que se han añadido correctamente
console.log(data);

//ordenamos de menor a mayor por edad
data.sort((a, b) => a.age - b.age);

//Mostramos por consola el array ordenado
data.forEach((persona) => {
  // Manejamos que algunos tengan 'phone' y otros 'telephone'
  let telefono = persona.telephone || persona.phone;
  console.log(`${persona.name} tiene ${persona.age} años y su teléfono es ${telefono}`);
});

console.log("\n");

// Ordenamos por nombre alfabéticamente
data.sort((a, b) => a.name.localeCompare(b.name));

//Mostramos por consola el array ordenado por nombre
console.log("Ordenado por nombre:");
data.forEach((persona) => {
  let telefono = persona.telephone || persona.phone;
  console.log(`${persona.name} tiene ${persona.age} años y su teléfono es ${telefono}`);
});

console.log("\n");

// creamos un array con los nombres de las personas mayores de 30 años
let mayoresDe30 = data.filter(persona => persona.age > 30);
console.log("Personas mayores de 30 años:\n");
mayoresDe30.forEach((persona) => {
    let telefono = persona.telephone || persona.phone;
    console.log(`${persona.name} tiene ${persona.age} años y su teléfono es ${telefono}`);
});
