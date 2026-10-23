//Array
const productos = [ 
    { nombre: "Camiseta", precio: 20 }, 
    { nombre: "Pantalón", precio: 30 }, 
    { nombre: "Zapatos", precio: 50 } 
];

// 10%
productos.forEach(producto => {
    producto.precio *= 1.10;
});

//Mostrar
console.log("Productos con el precio actualizado:");
console.log(productos);