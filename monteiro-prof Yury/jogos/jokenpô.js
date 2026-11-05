function jogar Jokenpo(escolhaUsuario){
   //pegar os elementos do HTML onde os textos serão Exibidos
   let divEscolhas = document.getElementByld("texto-escolhas")
   let divResultado = document.getElementById("texto-resultado")

   //Gerando a escolha do computador usando apenas if e else
   let numeroAleatorio =Math.random();
   let escolhaComputador = "";

   if(numeroAleatorio<0.33)
    escolhaComputador ="pedra"

}else if(numeroAleatorio<0.66){
    escolhaComputador="papel";
}else{
    escolhaComputado="tesoura";
}

//mostrar na tela o que cada um escolheu

divEscolhas.innerHTML="Voce:"+ escolhaUsuario +"|Computador: "+escolhaComputador;

//Logica de Determinação do vencedor

if(escolhaUsuario===escolhaComputador){
    divResultado.innerText="empate!"

}else if(escolhaUsuario==="pedra"&& escolhaComputador==="tesoura"){
    
    divResultado.innerText="Jogador Venceu!!"(Pedra amassa a Tesoura);
}else if(escolhaUsuario==="pedra"&& escolhaComputador)

}
