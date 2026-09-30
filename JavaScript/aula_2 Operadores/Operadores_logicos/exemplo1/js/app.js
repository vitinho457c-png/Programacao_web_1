/*
operadores logicos 

&& -> (and/E) logico
|| -> (or/OU) logico
! -> (not/NAO) logico
*/
// exemplos
console.log("Condicao simples")
let num1 =10
let num2 =15
let num3 =2

if(num1>=num2){
    console.log("ENTROU NO IF")
}else{
console.log("(FALSIANE!)NAO ENTROU NO IF")
}
//exemplo  composto
console.log("Condicao compostas")

if((num1>=num2) && (num1 !=num3)){
    console.log("ENTROU NO IF")
}else{
console.log("(FALSIANE!)NAO ENTROU NO IF")
}

// Exemplo com 3 condiçoes 

console.log("Condicao compostas")

if(((num1>=num2) &&( num1 !=num3))||( num1 != num3)){
    console.log("ENTROU NO IF")
}else{
console.log("(FALSIANE!)NAO ENTROU NO IF")
}

//Condiçao Simples negada
console.log("Condicao Simples negada")
if(!(num1>=num2)){
    console.log("ENTROU NO IF")
}else{
console.log("(FALSIANE!)NAO ENTROU NO IF")
}
