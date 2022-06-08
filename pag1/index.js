// Função que calcula O IMC através do peso e altura fornecidos pelo usuário.

let button = document.querySelector("#btn");

button.addEventListener("click", calculateBMI);


function calculateBMI() {

    let altura = parseInt(document
        .querySelector("#height").value);

    let Peso = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");

    //Verifica se o valor é um número 

    if (altura === "" || isNaN(altura))
        result.innerHTML = alert("A altura inserida não é válida");

    else if (Peso === "" || isNaN(Peso))
        result.innerHTML = alert("O peso inserido não é válido");

    // Se for um número executa:

    else {

        let bmi = (Peso / ((altura * altura)
            / 10000)).toFixed(2);

        if (bmi < 18.5) result.innerHTML =
            `Abaixo do peso : <span>${bmi}</span>`;

        else if (bmi >= 18.5 && bmi < 24.9)
            result.innerHTML =
                `Peso Normal : <span>${bmi}</span>`;

        else if (bmi >= 25 && bmi < 29.9)
            result.innerHTML =
                `Sobrepeso : <span>${bmi}</span>`;

        else result.innerHTML =
            `Obesidade : <span>${bmi}</span>`;
    }
}