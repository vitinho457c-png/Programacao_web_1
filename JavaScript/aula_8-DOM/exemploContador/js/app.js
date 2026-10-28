let valorElemento = document.getElementById("valor")
let btnmais = document.getElementById("mais")
let btnmenos = document.getElementById("menos")

let contador = 0

btnmais.addEventListener('click', ()=>{
  contador++
  valorElemento.textContent = contador
})
btnmenos.addEventListener('click', ()=>{
  contador--
  valorElemento.textContent = contador
})