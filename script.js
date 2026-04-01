btnCarrinho = document.getElementById("carrinho")

btnCarrinho = addEventListener("click", () => {
    if (document.querySelector('aside').style.display === "none"){
        document.querySelector('aside').style.display = "block";
        document.querySelector('main').style.height = "1500px";
    } else {
        document.getElementById("aside").style.display = "none";
        document.querySelector('main').style.height = "780px";
    }
});