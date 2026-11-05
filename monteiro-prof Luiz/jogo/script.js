var jogador = "x"

function jogar (celula){
     //comparar se a celula está vazia para assim escrever 
     if(celula.innerHTML ==  ""){
        //escreva no HTML a letra 
        celula.innerHTML = jogador;

        //alterna variavel jogador para a proxima jogada
        if(jogador == "x"){
            jogador = "o";
            celula.style.backgroundColor = "black";
        }else{
            jogador = "x";
            celula.style.backgroundColor = "blue"
        }
     }
}
function reiniciar(){
    window.location.reload();
}