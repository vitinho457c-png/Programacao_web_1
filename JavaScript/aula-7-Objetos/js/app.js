/*
Objeto armazena dados organizados exemplo : propriedade e valor
ex1:
*/

let aluno = {
    nome: "Carlos",
    idade: 20,
    curso: "Desenvolvimento de Sistemas"
}

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`)
}