let btnEntrega = document.getElementById("btnObtener2");

btnEntrega.addEventListener('click',() => {
    let numero = document.getElementsByClassName("numMayor1");
    getMayor(numero);
})

function getMayor(nums) {
    let numMayor = 0;
    for (let i = 0; i < nums.length; i++) {
        if(i == 0){
            let numMayor = nums[i].value;
        }else{
            if (nums[i].value > numMayor) {
                numMayor = nums[i].value;
            }
        }
    }
    alert("El número mayor es: " + numMayor);
    console.log("El numero mayor es:" + numMayor);
}