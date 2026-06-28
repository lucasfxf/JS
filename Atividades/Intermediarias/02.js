/*
Exercício 2 - Caixa Eletrônico

Dado um valor inteiro, informe
quantas notas de:

R$100
R$50
R$20
R$10
R$5
R$2
R$1

são necessárias para formar esse valor.
*/

let valor = 287;

console.log("Notas de 100:", Math.floor(valor / 100));
valor %= 100;

console.log("Notas de 50:", Math.floor(valor / 50));
valor %= 50;

console.log("Notas de 20:", Math.floor(valor / 20));
valor %= 20;

console.log("Notas de 10:", Math.floor(valor / 10));
valor %= 10;

console.log("Notas de 5:", Math.floor(valor / 5));
valor %= 5;

console.log("Notas de 2:", Math.floor(valor / 2));
valor %= 2;

console.log("Notas de 1:", valor);