// Exemplo de valores para teste (substitua pelos dados desejados)
var idade = 25;
var renda_mensal = 3500.00;
var score_credito = 750;
var possui_restricao = false;

// Algoritmo de decisão

if (possui_restricao === true) {
    console.log("Empréstimo Negado.");

} else if ((idade >= 22 && renda_mensal > 3000.00) || score_credito > 800) {
    console.log("Empréstimo Aprovado!");
    
} else {
    console.log("Empréstimo Negado.");
}
