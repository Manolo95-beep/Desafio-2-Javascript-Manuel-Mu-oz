const sticker1 = document.querySelector("#stickeruno")
const sticker2 = document.querySelector("#stickerdos")
const sticker3 = document.querySelector("#stickertres")

const btnbuy = document.querySelector("#button-buy")

btnbuy.addEventListener("click", () => {
    suma = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value)
    if (suma <= 10){
        document.querySelector("#cantidad-sticker").innerHTML = "Vas a comprar " + suma + " stickers. "
    }
    
    else{
        document.querySelector("#cantidad-sticker").innerHTML = "No puede comprar mas de 10 stickers"
    }
    
})