/*abrir o carrinho quando clicar no icone*/
btnCarrinho = document.getElementById("carrinho")

btnCarrinho.addEventListener("click", () => {
    if (document.querySelector('aside').style.display === "none"){
        document.querySelector('aside').style.display = "block";
        document.querySelector('main').style.height = "1500px";
    } else {
        document.getElementById("aside").style.display = "none";
        document.querySelector('main').style.height = "780px";
    }
});

/*aparecer os produtos no html*/
let todos = document.querySelector('.produtos');
const displayContagem = document.getElementById('contagem')
 
let ovoFerrero = {
    titulo: "Ovo de Páscoa Ferrero Rocher",
    precoAntigo: "R$143,99",
    precoNovo: "R$99,99",
    foto: "./ovo_pascoa_ferrero_rocher_365gr_6279cfbf-9f38-4ac0-ba24-94157bac9744.jpg"
};
 
let ovos = Array(7).fill(ovoFerrero);
 
function mostrarProdutos() {
    if (todos) {
        todos.innerHTML = ovos.map(ovo => `
            <div class="caixas">
                <img src="${ovo.foto}" alt="${ovo.titulo}">
                <h2>${ovo.titulo}</h2>
                <h2 class="preco1">${ovo.precoAntigo}</h2>
                <h2 class="preco2">${ovo.precoNovo}</h2>
                <button class="botaoadd" data-index="${index}">Adicionar ao carrinho</button>
            </div>
        `).join('');
    }
}
 
mostrarProdutos();

/* */
let arraycarrinho = [];
const listaCarrinho = document.getElementById("listacarrinho");
btnAddCarrinho = document.querySelectorAll(".botaoadd");

btnAddCarrinho.forEach(botao => {
    botao.addEventListener("click", () => {
        const index = botao.getAttribute("data-index").
        arraycarrinho.push(ovos[index]);
        displayContagem.innerText = arraycarrinho.length;
        botarnoCarrinho();
    });
    
});


function botarnoCarrinho() {
    if (arraycarrinho.length === 0) {
        listaCarrinho.innerText("Seu carrinho está vazio.")
        return;
    } else {
      listaCarrinho.innerHTML = arraycarrinho.map(item => `
        <p>${item.titulo}</p>
        <p>${item.precoNovo}</p>
     `).join('');
    }
};