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