/*
//Funçoe em javascript

//Funções são blocos de codigos reutilizaveis

//função simples
*/
console.log("Função simples");
function saudacao() {
    console.log("Seja bem vindo!")
}
saudacao()

//Função com parametro
/*
console.log("Função com parametro");
let nomeUser =prompt("Qual é o seu nome? ");
function saudacao2(nome) {
    console.log(`Seja bem vindo ${nome}!`)
}
saudacao2(nomeUser)
*/

//Ex2 - funçao com parametro e retorno
function soma(num1, num2) {
    return num1 + num2
}
console.log(`A soma de 10 e 20 é: ${soma(10, 20)}`)

//ex3 - Arrown function
let soma2 = (num1 , num2) => {
    return num1 + num2
}
console.log(`A soma de 10 e 10 é: ${soma2(10, 10)}`)