//alert("Você ganhou 1000 reais no tigrinho");

//entrada de dados 
//variáveis servem para armazenar dados temporariamente
var nome = "Cleitinho Rodrigues Cunha"; //string
var idade = 22;                         //inteiro
var peso = 80.3;                        //decimal
var altura = 1.55;                      //decimal
var salario = 2000.50;                  //decimal
var votação = true;                     //booleano
var documento = false;
var titulo = true;

if(idade >= 16){
    //alert("pode votar")
}

//estrutura condicional
if (idade >= 16 && idade <= 70 && documento == true && titulo == true){
    //alert("Pode votar! "+ nome);
}else{
    //alert("Não pode votar! sua idade é "+ idade);
}

if(idade < 18 && idade > 15 || idade >= 70){
   //alert("Seu voto é facultativo!");
}

//estrutura de repetição
//LISTAS - ARRAYS
//               0        1        2       3     
candidatos = ['Augusto','Lula','Flavio','Renan'];
numeros = [5 ,2 ,4 , 7, 3,5];

//imprimir 
console.log(candidatos[2]);
//ESTRUTURS DE REPETIÇÃO
var posicao = 0;
while(posicao < 4){
    console.log("candidato:"+ candidatos[posicao]);
    posicao = posicao + 1;
}

// inicio       condição de parada            incrementador
for(contador=0; contador < candidatos.length; contador++ ){
   console.log ("testando for: + [contador]");
}

//trbalhando com funções
function baixarEstoque(){
    console.log("Abaixou o estoque ");
}

function lancarCaixa(){
    console.log("Dinheiro entrando no caixa!");
}

function imprimirComprovante(){
    console.log("Imprimindo comprovante")
}

function efetuarVenda(){
    console.log("Fazendo venda... ");
}
//fazendo a chamada da função - normalmente estaria atrelando à um botão
efetuarVenda();

//Criando objetos 
var pessoa= {nome: "ricardo", idade: 20, altura: 1.75}
console.log(pessoa.nome);
console.log(pessoa.altura);
