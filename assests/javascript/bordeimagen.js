const clickimagen = document.querySelector("#touch-img")

let cuenta = 0;

clickimagen.addEventListener("click" , () =>{
    if (cuenta === 0){
        clickimagen.style.border = "solid 2px red"
        cuenta = 1;
    }
    
    else{
        clickimagen.style.border = "none"
        cuenta = 0
    
    }
    

})