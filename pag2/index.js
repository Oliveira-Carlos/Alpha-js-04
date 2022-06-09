// Função que exibe um valor entre o mínimo e o máximo colocado pelo usuário

let button = document.querySelector("#btn");

button.addEventListener("click", clicar);


function clicar() {

    let text1 = parseInt(document.querySelector("#min").value);

    let text2 = parseInt(document.querySelector("#max").value);

    let result = document.querySelector("#result");

    let min = Math.ceil(text1);
    let max = Math.floor(text2);

    let random = Math.floor(Math.random() * (max - min + 1) + min);

    //Verifica se o valor é um número inteiro

    if (text1 === "" || isNaN(text1)) {
        result.innerHTML = alert("O valor inserido não é válido, por favor insira um número");
    }

    else if (text2 === "" || isNaN(text2)) {
        result.innerHTML = alert("O valor inserido não é válido, por favor insira um número");
    }

    // Se for um número executa:

    // Inpede que o min seja maior que o max
    if (text1 > text2) {
        console.error('O segundo valor deve ser maior que o primeiro');
        alert('O segundo valor deve ser maior que o primeiro')
    }

    // Sorteia o número randômico
    else {
        result.innerHTML = random;
    }

}