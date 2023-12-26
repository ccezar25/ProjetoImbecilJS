alert("Hello!");
let peso;
let altura;
let imc;
altura = prompt("Qual sua altura? ");
peso = prompt("Qual seu peso: ")

function calculateIMC(peso, altura){
    imc = (peso / (altura * altura))
    return imc;
}
calculateIMC(peso, altura);
console.log(imc);
alert(imc);