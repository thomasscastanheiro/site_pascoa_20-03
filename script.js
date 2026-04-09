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
let produtos = document.querySelector('.produtos');
const displayContagem = document.getElementById('contagem')

 
let ovos = [{
    titulo: "Ovo de Páscoa Ferrero Rocher",
    precoAntigo: "R$143,99",
    precoNovo: "R$99,99",
    foto: "./imagens/ovo_pascoa_ferrero_rocher_365gr_6279cfbf-9f38-4ac0-ba24-94157bac9744.jpg"
}, 
{
    titulo: "Ovo de Páscoa Garoto Caribe",
    precoAntigo: "R$97,99",
    precoNovo: "R$59,99",
    foto: "./imagens/1653742c-OvoDePscoaGarotoCaribe229G_59540.webp"
},
{
    titulo: "Ovo de Páscoa Lacta Oreo",
    precoAntigo: "R$92,98",
    precoNovo: "R$57,99",
    foto: "./imagens/Ovo-de-Pascoa-Lacta-Oreo-239g-1-.webp"
}, 
{
    titulo: "Ovo de Páscoa Borussia",
    precoAntigo: "R$133,99",
    precoNovo: "R$79,99",
    foto: "./imagens/ovo_de_pascoa_chocolate_ao_leite_100gr_unidade_borussia_chocolates_557_1_89d4e2c760e9634da28948439f373b8f_20250925163501.webp"
},
{
    titulo: "Ovo de Páscoa ao leite Baton",
    precoAntigo: "R$121,99",
    precoNovo: "R$68,97",
    foto: "./imagens/ovo_de_pascoa_nestle_baton_chocolate_ao_leite_204g_e19912b8-0d34-4824-8af8-fc37fd914596.jpeg"
},
{
    titulo: "Ovo de Páscoa ao leite Cacauê",
    precoAntigo: "R$103,99",
    precoNovo: "R$73,99",
    foto: "./imagens/ovo-de-pascoa-ao-leite-140g-cacaue_1250812.webp"
},
{
    titulo: "Ovo de Páscoa Branco com Cookies TopMalu",
    precoAntigo: "R$113,99",
    precoNovo: "R$79,99",
    foto: "./imagens/5338270-800-auto.webp"
}];
 
produtos.innerHTML = ovos.map((ovo, index) => `
            <div class="caixas">
                <img src="${ovo.foto}" alt="${ovo.titulo}">
                <h2>${ovo.titulo}</h2>
                <h2 class="preco1">${ovo.precoAntigo}</h2>
                <h2 class="preco2">${ovo.precoNovo}</h2>
                <button class="botaoadd" data-index="${index}">Adicionar ao carrinho</button>
            </div>
        `).join('');
/* */
let arraycarrinho = [];
const listaCarrinho = document.getElementById("listacarrinho");
btnAddCarrinho = document.querySelectorAll(".botaoadd");

btnAddCarrinho.forEach(btnAddCarrinho => {
    btnAddCarrinho.addEventListener("click", () => {
        const index = btnAddCarrinho.getAttribute("data-index")
        arraycarrinho.push(ovos[index])
        displayContagem.innerText = arraycarrinho.length;
        if (document.querySelector('aside').style.display === "none"){
            document.querySelector('aside').style.display = "block";
            document.querySelector('main').style.height = "1500px";
        } else {
            document.querySelector('aside').style.display = "block";
        }
        botarnoCarrinho();
    })
    
});

const btnMais = document.getElementsByClassName("mais");
const btnMenos = document.getElementsByClassName("menos");
let total = 1

function botarnoCarrinho() {
    if (arraycarrinho.length === 0) {
        listaCarrinho.innerText = "Seu carrinho está vazio."
        return;
    } else {
      listaCarrinho.innerHTML = arraycarrinho.map(item => `
        <div class="produtocarrinho">
        <img src="${item.foto}">
        <h2>${item.titulo}</h2>
        <h2 class="precos">${item.precoNovo}</h2>
        <button class="menos">-</button>
        <p id="resultado">${total}</p>
        <button class="mais">+</button>
        </div>  
     `).join('');
    }
        
};
btnMais.addEventListener("click", () => {
    total = total + 1;
});
        btnMenos.addEventListener("click", () => {
    total = total - 1;
});

const precoTotal = listaCarrinho.getAttribute("h2.precos")
console.log(precoTotal)

