// Função que exibe aleatoriamente de acordo com dados do IBGE

let button = document.querySelector("#btn");

button.addEventListener("click", clicar);

function clicar() {
    let result = document.querySelector("#result");
    const numero = Math.random() * 10000;
    console.log(numero);
    if (numero <= 863 && numero > 0) {
        result.innerHTML = 'Você é uma mulher idosa';
    } else if (numero > 863 && numero <= 1670) {
        result.innerHTML = 'Você é um homem idoso';
    } else if (numero > 1670 && numero <= 5977) {
        result.innerHTML = 'Você é uma mulher jovem';
    } else {
        result.innerHTML = 'Você é um homem jovem';
    }
}