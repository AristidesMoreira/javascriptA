// Exercicio - 1
function somar (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    // console.log("Resultado: "+ (n1+n2));

    document.getElementById("resultado1").innerText = "Resultado: " + (n1+n2);
}

// Exercicio - 2
function calcaularidade (){
    let n1 = Number(document.getElementById("idade1").value);
    let resultado;
    if (n1 >= 18){
        resultado = "Você é de maior"
    } else{
        "Você é de menor"
    }

    document.getElementById("resultado").innerText = resultado;
}