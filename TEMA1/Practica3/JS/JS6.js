let fechaActual = new Date();
let day = fechaActual.getDate();
let month = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1 para obtener el mes correcto
let year = fechaActual.getFullYear();
alert("ESTAMOS A "+ day + " DEL MES "+month + " Y DEL AÑO " + year);