/*
Exercício 5 - Inverter uma Palavra

Crie uma variável contendo uma palavra.

Exiba essa palavra invertida.

Exemplo:

javascript

tpircsavaj
*/

let palavra = "javascript";
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

console.log(invertida);