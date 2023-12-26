/* Pequeno projeto para praticar lógica e programação
* e ainda ver e praticar desenvolvimento web
*
*   Escrito originalmente por Caio Cezar, em Dezembro de 2023.
*   
*                                                       v0.2a
*/

alert("Olá!");
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
console.log(imc.toFixed(3));
alert(`O seu IMC é ${imc.toFixed(3)}.`);
