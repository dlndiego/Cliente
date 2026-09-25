let letra = prompt("Dime que color prefieres:");
    
for (let i = 0; i < letra.length; i++) {
   if(letra.charAt(0) == 'R' || letra.charAt(0) == 'r'){
        document.body.style.backgroundColor = ' #950606';
    }
    if(letra.charAt(0) == 'V' || letra.charAt(0) == 'v'){
        document.body.style.backgroundColor = '#198f02';
    }
    if(letra.charAt(0) == 'B' || letra.charAt(0) == 'b'){
        document.body.style.backgroundColor = '#0000FF';
    }

}
