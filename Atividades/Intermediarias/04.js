/*
Exercício 4 - Encontrar o Maior Número

Crie um vetor com cinco números.

Percorra o vetor utilizando um laço
e descubra qual é o maior número.
*/

let numeros = [14, 27, 9, 55, 31];

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Maior número:", maior);