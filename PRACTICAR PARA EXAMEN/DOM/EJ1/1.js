let ul = document.getElementById("lista");
let total = document.getElementById("contador");
let añadir = document.getElementById("agregar");
let cont = 0;
añadir.addEventListener('click', function () {
    cont++;
    let flag = false;
    let li = document.createElement("li");
    let texto = document.getElementById("tarea");
    let boton = document.createElement("button");
    boton.textContent = "BORRAR";
    boton.id="Boton:"+cont;
    boton.value= cont;
    li.textContent = texto.value+" ";
    li.id ="id"+cont;
    li.appendChild(boton);
    ul.appendChild(li);
    
    total.textContent= "Total de tareas: "+cont;
    texto.value = "";
    boton.addEventListener('click',function(){
        li.remove();
        cont--;
        total.textContent = "Total de tareas: " + cont;
    });
    li.addEventListener('click',function(){
        if(!flag){
            li.style.textDecoration= "line-through";
            flag = true;
        }else{
            li.style.textDecoration= "none";
            flag=false;
        }
        
    })
});

