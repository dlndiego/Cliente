class Producto{
    constructor(id,nombre,precio,stock){
        this.id = Number(id);
        this.nombre=nombre;
        this.precio=Number(precio);
        this.stock=Number(stock);
    }

    calcularPrecioFinal() {
        let total = Number(this.precio*this.stock);
        let descuento = total * 0.21;
        return total - descuento;
    }

    toString(){
        return "ID: " +this.id+"\nNombre: "+this.nombre+"\nPrecio: "+this.precio+"\nStock: "+this.stock;
    }

    getPrecio(){
        return this.precio;
    }
    getId(){
        return this.id;
    }
    getStock(){
        return this.stock;
    }

    vender(num){
        num = Number(num);
        this.stock = this.stock - num;
        return this.stock;
    }

}

let pizzas = new Producto(1,"Peperoni",16,50);
console.log(pizzas.toString()); 
console.log("Calcular Precio Final: "+pizzas.calcularPrecioFinal());
console.log("Mostrar Stock: "+pizzas.getStock());
console.log("Quitamos 20 :"+ pizzas.vender(20));
console.log("Comprobamos que se ha quitado: "+ pizzas.getStock());

class Ordenador extends Producto{

    constructor(id,nombre,precio,stock,ram,procesador){
        super(id,nombre,precio,stock);
        this.ram = Number(ram);
        this.procesador = procesador;


    }

    toString(){
        return super.toString() + "\nRam: " + this.ram+"GB\nProcesador:" + this.procesador;
    }
}

class Movil extends Producto{
    
    constructor(id,nombre,precio,stock,almacenamiento,marca){
        super(id,nombre,precio,stock);
        this.almacenamiento = Number(almacenamiento);
        this.marca = marca;
    }

    toString(){
        return super.toString() +"\nAlmacenamiento: "+this.almacenamiento+"\nMarca: "+this.marca+"\n";
    }


}

class Tienda{

    productos;

    constructor(){
        this.productos = new Set();
    }   

    agregarProducto(producto){
        this.productos.add(producto);
    }

    eliminarProducto(id){
        this.productos.forEach(element => {
            if(element.getId() == id){
                this.productos.delete(element);
            }
        });
    }

    buscarProducto(id){
        this.productos.forEach(element => {
            if(element.getId() == id){
                console.log(element.getId());
                console.log(element.toString());
            }
        });
    }

    listarProductos(){
        this.productos.forEach(element => {
            console.log(element.toString()+"\n");
        });
    }

    filtrarPorPrecio(precio){
        precio = Number(precio);
        this.productos.forEach(element => {
            if(element.getPrecio() < precio){
                console.log(element.toString());
            }
        });
    }

    calcularValorInventario(){
        let precio = Number(0);
        let total = Number(0);
        this.productos.forEach(element => {
            precio = element.getPrecio() * element.getStock();
            total += precio;
        });
        return total;
    }
}

const tienda = new Tienda();

const p1 = new Ordenador(
    1, "Portátil ASUS", 800, 5, 16, "Intel i7"
);

const p2 = new Movil(
    2, "Galaxy S24", 600, 10, 256, "Samsung"
);

const p3 = new Producto(
    3, "Teclado", 50, 20
);

tienda.agregarProducto(p1);
tienda.agregarProducto(p2);
tienda.agregarProducto(p3);

p1.vender(2);

console.log("\nMostrar Productos: \n");

tienda.listarProductos();

console.log("\Buscar Productos: \n");
tienda.buscarProducto(2);

console.log("\nFiltrar por Precio: \n");
tienda.filtrarPorPrecio(700);

console.log("\Calcular valor Inventario: \n");
console.log(tienda.calcularValorInventario());