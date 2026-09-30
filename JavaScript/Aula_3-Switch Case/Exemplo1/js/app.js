alert("Bem vindo a aula de Switch Case")
let num1=Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))

let escolha = Number(prompt("Digite 1 paara soma e 2 para MULTIPLICAÇAO"))

switch(escolha){
    case 1:
        let soma = num1 + num2
        console.log(`Voce escolheu soma. O valor da soma é: ${soma}`)
        break
 case 2:
    let mult = num1*num2
    console.log(`Voce escolheu soma. O valor da soma é: ${mult}`)
    break
    default:
        console.log("Erro escolha invalida")
}