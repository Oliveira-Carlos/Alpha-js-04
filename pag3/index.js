// Função que mostra o menor e o maior número inteiro do valor inserido pelo usuário

let button = document.querySelector("#btn");

button.addEventListener("click", clicar);


function clicar() {

    let text1 = parseFloat(document.querySelector("#text1").value
        .replace(",", "."));

    let result = document.querySelector("#result");
    let result2 = document.querySelector("#result2");

    let min = Math.ceil(text1);
    let max = Math.floor(text1);

    //Verifica se o valor é um número 

    if (text1 === "" || isNaN(text1)) {
        result.innerHTML = alert("O valor inserido não é válido, por favor insira um número");
    }

    // Se for um número executa:

    // Apresenta o maior e menor inteiro
    else {
        result.innerHTML = ('Maior ' + min);
        result2.innerHTML = ('Menor ' + max);
    }

}