class Cuadrado{
    
    width=0;
    heigth=0;

    constructor(width,heigth){
        if(width <= 0 ){
           Number(this.width= 1);
        }else if(heigth <= 0){
            Number(this.height = 1);
        }else{
            Number(this.heigth= heigth);
            Number(this.width=width);
        }
        
    }

    cambiarDimensiones(w,h){
        this.width=w;
        this.heigth=h;
    }

    calculaArea(){
        let area = Number(this.width * this.heigth);
        console.log(area);
        return area;
    };

    copiaRectangulo(){
        let copia = new Cuadrado(this.width,this.height);
        return copia;
    }

    comparar(rectangulo){
        let area1 = this.calculaArea();
        let area2 = rectangulo.calculaArea();
        if(area1 > area2){
            return "MAYOR";
        }
        if(area1 < area2){
            return "MENOR";
        }
        return "IGUALES";
    }
}

cuadr1 = new Cuadrado(4,6);

document.getElementsByClassName("crearClases")[0].textContent = "cuadr1 = new Cuadrado(4,6);";

cuadr1.cambiarDimensiones(6,4);

document.getElementsByClassName("ValidacionConstructor")[0].textContent = "cuadr1.cambiarDimensiones(6,4);";

let area = cuadr1.calculaArea();

document.getElementsByClassName("calcularArea")[0].textContent = "cuadr1.calculaArea(); = " + area;

cuadr2 = cuadr1.copiaRectangulo();

document.getElementsByClassName("copiarRectangulo")[0].textContent = "cuadr2 = cuadr1.copiaRectangulo();";

let comparacion = cuadr1.comparar(cuadr2);

document.getElementsByClassName("compararRectangulos")[0].textContent = "cuadr1.comparar(cuadr2); = " + comparacion;
