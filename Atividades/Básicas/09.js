/*
Exercício 9

Calcule o fatorial
de um número inteiro positivo.
*/

let numero = 5;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log("Fatorial =", fatorial);