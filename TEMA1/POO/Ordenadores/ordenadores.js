const Ordenador = {
    "marca" : "",
    "modelo" : "",
    "RAM" : Number(4),
    "disk" : Number(512),  
    "pulgadas" : Number(17),


    init(marca, modelo,ram,disk,pulgadas){
        this.marca = marca;
        this.modelo = modelo;
        if(ram !== undefined ) this.RAM = ram;
        if(disk !== undefined ) this.disk = disk;
        if(pulgadas !== undefined ) this.pulgadas = pulgadas;
        return this;
    },

    toString() {
       return "Marca: " + this.marca +" Modelo: " + this.modelo +" RAM: "+ this.RAM +"GB Disco: "+this.disk+"GB Pulgadas: "+this.pulgadas+"``";
    }

}

const Portatil = Object.create(Ordenador);

Portatil.init = function(marca, modelo, ram, disk, pulgadas, autonomia){
    Ordenador.init.call(
        this,
        marca,
        modelo,
        ram !== undefined ? ram : 4, 
        disk !== undefined ? disk : 256, 
        pulgadas !== undefined ? pulgadas : 12
    );
    this.autonomia = autonomia !== undefined ? Number(autonomia) : 4;
    return this;
}

Portatil.toString = function(){
    return Ordenador.toString.call(this) + "Autonomía: " +this.autonomia+ "h";
};

urus = Object.create(Portatil);
urus.init("Lenovo","Workstation",16,512,14,6);

msi = Object.create(Ordenador);
msi.init("MSI","4982H",32, 1000,23);

document.getElementsByClassName("crear")[0].textContent= "msi = Object.create(Ordenador);";
document.getElementsByClassName("crear")[1].textContent= "urus = Object.create(Portatil);";


document.getElementsByClassName("inizializar")[0].textContent= "msi.init('MSI','4982H',32, 1000,23);";
document.getElementsByClassName("inizializar")[1].textContent= "urus.init('Lenovo','Workstation',16,512,14,6);";


document.getElementsByClassName("toString")[0].textContent= msi.toString();
document.getElementsByClassName("toString")[1].textContent= urus.toString();


