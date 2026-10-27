class Cuadrado{
    
    width=0;
    heigth=0;

    constructor(width,heigth){
        if(width == 0 || heigth == 0){
            alert("DEBES PONER VALORES EN LOS PARAMETROS");
        }else{
            this.heigth= heigth;
            this.width=width;
        }
    }
}