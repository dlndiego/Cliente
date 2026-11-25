class Estudiante{

    constructor(nombre, apell, edad, correo){
        this.nombre=nombre;
        this.apell=apell;
        this.edad=Number(edad);
        this.correo=correo;
    }

    getnombre(){
        return "Este es el nombre: "+ this.nombre; 
    }

    getapell(){
        return "Este es el apellido: "+ this.apell; 
    }

    getedad() {
        return this.edad; 
    }
    
    getcorreo(){
        return "Este es el correo: "+ this.correo; 
    }


    quienEsMayor(edad2){
        
        if(this.edad < edad2){
            return this.nombre + " es menor.";
        }else if(this.edad > edad2){
            return this.nombre +" es mayor.";
        }else{
            return this.nombre + " tiene la misma edad.";
        }

    } 
    
    toString(){
        return "Nombre : "+this.nombre +"\n" + "Apellido : " + this.apell +" \nEdad : "+this.edad+" \nCorreo : "+this.correo;
    }
}

let Maria = new Estudiante("Maria","Angeles",18,"maria@gmail.com");
let Toreto = new Estudiante("Toreto","Aguilar",19,"toreto@gmail.com");

console.log("TOSTRING DE MARIA:");
console.log(Maria.toString() + "\n");

console.log("TOSTRING DE TORETO");
console.log(Toreto.toString() + "\n");

console.log(""+ Toreto.quienEsMayor(Maria.getedad()));