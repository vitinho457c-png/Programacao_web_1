/*
A diferença do While e Do While
1 - While 
    1.1 - verifica a condiçao antes de entrar no loop
    1.2 - tem um contador e variavel de escape do loop
2 - Do while
    1.1 - primeiro executa o loop, depois testa
    1.2 - Usado quando se precisa executar o loop pelo
    menos 1 vez
    1.3 - Escapa do loop apenas se a variavel atender 
    a condiçao 
*/
//While 
/*
let num1 = 0 
while(num1 <=5){
    console.log(`${(num1+1)}° rodada`)
    num1++
}

*/

//exemplo 2 tabuada
let num1 = 0 
let numFixo = 2
while(num1 <=10){
    console.log(`${numFixo}x ${num1} = ${(numFixo * num1)}\n`)
    num1++
}
//correção tabuada com 
let num2 = 0
let escolha = Number (prompt("Digite a tabuada"))
while(num2 <= 10){
    console.log(`${escolha}x ${num2} = ${(escolha * num2)}\n`)
    num2++
}