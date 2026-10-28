let paragrafo = document.getElementById("primParag")


function mudarparag(){
    paragrafo.textContent = "paragrafo atualizado"

}

function mudarCor(){
    paragrafo.style.color="Pink"
    paragrafo.textContent="Entro no butao"
}

function mudarCorVoltar(){
    paragrafo.style.color="purple"
    paragrafo.textContent="saiu do botao "
}
 function mudarcordiv(){
    div1.style.backgroundColor="Pink"
 }
function mudarVoltar(){
    div1.style.backgroundColor="black"

}
const botao = document.querySelector('.meu-botao');
const audio = document.getElementById('som-botao');

botao.addEventListener('click', function() {
  audio.currentTime = 0; // Reinicia o áudio caso seja clicado rapidamente
  audio.play();          // Reproduz o som
});
