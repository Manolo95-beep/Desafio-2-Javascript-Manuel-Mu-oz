const dig1 = document.querySelector("#primer-digito")
const dig2 = document.querySelector("#segundo-digito")
const dig3 = document.querySelector("#tercer-digito")

const verif = document.querySelector("#verificacion-password")

const btnver = document.querySelector("#btn-ingresar")



btnver.addEventListener('click', () => {
    const password = dig1.value + dig2.value + dig3.value

    if (password === "911" || password === "714"){
        verif.innerHTML = "El password es correcto"
    }  else{
        verif.innerHTML = "El password es incorrrecto"
    }

})
