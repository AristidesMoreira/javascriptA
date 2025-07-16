// Exercicio - 1
function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    // console.log("Resultado: "+ (n1+n2));

    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

// Exercicio - 2
function calcularidade() {
    let n1 = Number(document.getElementById("idade1").value);
    let resultado;
    if (n1 >= 18) {
        resultado = "Você é de maior";
    } else {
        resultado = "Você é de menor";
    }

    document.getElementById("resultado2").innerText = resultado;
}
// Exercicio - 3
function contarCaracteres() {
    let t1 = (document.getElementById("texto1").value);
    let tamanho = t1.length;

    document.getElementById("resultado3").innerText = tamanho;
}
// Exercicio - 4
function parOuImpar() {
    let n3 = Number(document.getElementById("n4").value);
    let parouimpar = "";
    if (n3 % 2 === 0) {
        parouimpar = "Par";
    } else {
        parouimpar = "Ímpar";
    }

    document.getElementById("resultado4").innerText = parouimpar;
}
// Exercicio - 5
function caixaAlta() {
    let t5 = (document.getElementById("texto5").value);
    let textoMaiusculo = t5.toUpperCase();


    document.getElementById("resultado5").innerText = textoMaiusculo;
}
// Exercicio - 6
function maiornumero() {
    let n5 = Number(document.getElementById("numero5").value);
    let n6 = Number(document.getElementById("numero6").value);
    let maior = "";
    if (n5 > n6) {
        maior = "O mair número é: " + n5;
    } else if (n6 > n5) {
        maior = "O mair número é: " + n6;
    } else {
        maior = "os números são iguais"
    }

    document.getElementById("resultado6").innerText = maior;
}
// Exercicio - 7
function tabuada() {
    let n7 = Number(document.getElementById("n7").value);
    let tabuada = "";

    for (let i = 1; i <= 10; i++) {
        tabuada += n7 + " x " + i + " = " + (n7 * i) + "\n";
    }

    document.getElementById("resultado7").innerText = tabuada;
}
// Exercicio - 8
function contador() {
    let contar = "";

    for (let i = 1; i <= 10; i++) {
        contar += i + "\n";

        document.getElementById("resultado8").innerText = contar;
    }
}
// Exercicio - 9
function calcularMedia() {
    let num01 = Number(document.getElementById("num01").value);
    let num02 = Number(document.getElementById("num02").value);
    let num03 = Number(document.getElementById("num03").value);
    let media = (num01 + num02 + num03) / 3;

    document.getElementById("resultado9").innerText = "A media é: " + media;
}
// Exercicio - 10
function converter() {
    let celsius = Number(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("resultado10").innerText = "Temperatura em Fahrenheit: " + fahrenheit + " °F";
}
// Exercicio - 11
function diaCorrespondente() {
    let n10 = Number(document.getElementById("n10").value);
    let dia = "";

    if (n10 === 1) {
        dia = "Domingo";
    } else if (n10 === 2) {
        dia = "Segunda-feira";
    } else if (n10 === 3) {
        dia = "Terça-feira";
    } else if (n10 === 4) {
        dia = "Quarta-feira";
    } else if (n10 === 5) {
        dia = "Quinta-feira";
    } else if (n10 === 6) {
        dia = "Sexta-feira";
    } else if (n10 === 7) {
        dia = "Sábado";
    } else {
        dia = "Número inválido! Digite um valor entre 1 e 7.";
    }

    document.getElementById("resultado11").innerText = dia;
}
// Exercicio - 12
function verificarSenha() {  
    let senha = (document.getElementById("s1").value);
    
    if (senha === "1234") {
        document.getElementById("resultado12").innerText = "Acesso permitido!";
    } else {
        document.getElementById("resultado12").innerText = "Senha incorreta.";
    }
}
// Exercicio - 13
function contadorR() {
    let contar = "";

    for (let i = 10; i >= 1; i--) {
        contar += i + "\n";

        document.getElementById("resultado13").innerText = contar;
    }
}

