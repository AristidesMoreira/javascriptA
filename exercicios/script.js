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
        parouimpar =  "Par";
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
function caixaAlta() {
    let n5 = (document.getElementById("numero6").value);
    let textoMaiusculo = t5.toUpperCase();

    
    document.getElementById("resultado5").innerText = textoMaiusculo;
}


