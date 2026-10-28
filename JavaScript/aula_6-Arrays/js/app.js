/* 
Arrays em JavaScript 

Variavel armazena um valor
enquanto o array armazena multiplos valores
Ex1

console.log(frutas)
console.log(frutas[0])


let frutas = ["maça", "banana", "Uva"]
for (let i = 0; i < frutas.length; i++) {
    console.log(`${frutas[i]}\n`)
}



//merodos arrays
push() - Adiciona um item 
pop() - Remove o item final
shift() - Remove o item inicial
unshift() - Adiciona no inicio
length() - Retorna o tamanho do array
*/

//ex02
let frutas = ["maça", "banana", "Uva"]

frutas.push("Morango")
frutas.unshift("Goiaba")
frutas.pop()

for (let i = 0; i < frutas.length; i++) {
    console.log(`${frutas[i]}\n`)
}